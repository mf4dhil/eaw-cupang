import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";

type AppState = {
    session: Session
}
const app = new Application<AppState>()

app.addEventListener('error', (evt) => {
    console.log(evt.error)
})

const router = new Router<AppState>();

// Apply sessions to your Oak application.
// You can also apply the middleware to specific routes instead of the whole app.
// Without params, default MemoryStore is used. See the Storage chapter below for more info.
app.use(Session.initMiddleware())

router.post('/login', async (ctx) => {
    const form = await ctx.request.body({type: 'form'}).value
    if(form.get('password') === 'correct') {
        // Set persistent data in the session
        ctx.state.session.set('email', form.get('email'))
        ctx.state.session.set('failed-login-attempts', null)
        // Set flash data in the session. This will be removed the first time it's accessed with get
        ctx.state.session.flash('message', 'Login successful')
    } else {
        const failedLoginAttempts = (await ctx.state.session.get('failed-login-attempts') || 0) as number
        ctx.state.session.set('failed-login-attempts', failedLoginAttempts+1)
        ctx.state.session.flash('error', 'Incorrect username or password')
    }
    ctx.response.redirect('/')
})

router.post('/logout', async (ctx) => {
    // Clear all session data
    await ctx.state.session.deleteSession()
    ctx.response.redirect('/')
})

router.get("/", async (ctx) => {
    const message = await ctx.state.session.get('message') || ''
    const error = await ctx.state.session.get('error') || ''
    const failedLoginAttempts = await ctx.state.session.get('failed-login-attempts')
    const email = await ctx.state.session.get('email')
    ctx.response.body = `<!DOCTYPE html>
    <body>
        <p>
            ${message}
        </p>
        <p>
            ${error}
        </p>
        <p>
            ${failedLoginAttempts ? `Failed login attempts: ${failedLoginAttempts}` : ''}
        </p>

        ${email ? 
        `<form id="logout" action="/logout" method="post">
            <button name="logout" type="submit">Log out ${email}</button>
        </form>`
        : 
        `<form id="login" action="/login" method="post">
            <p>
                <input id="email" name="email" type="text" placeholder="you@email.com">
            </p>
            <p>
                <input id="password" name="password" type="password" placeholder="password">
            </p>
            <button name="login" type="submit">Log in</button>
        </form>` 
    }
    </body>`;
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8002 });