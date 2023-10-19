
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    alamat: AlamatPayload<ExtArgs>[]
    pembelian: PesananPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nama: string
    username: string
    email: string
    password: string
    role: string
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type AlamatPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Alamat"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    alamat: string
    gedung: string
    userId: number
  }, ExtArgs["result"]["alamat"]>
  composites: {}
}

/**
 * Model Alamat
 * 
 */
export type Alamat = runtime.Types.DefaultSelection<AlamatPayload>
export type CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Category"
  objects: {
    product: ProductPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nama: string
  }, ExtArgs["result"]["category"]>
  composites: {}
}

/**
 * Model Category
 * 
 */
export type Category = runtime.Types.DefaultSelection<CategoryPayload>
export type ProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Product"
  objects: {
    category: CategoryPayload<ExtArgs>
    detailPes: DetailPesananPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nama: string
    desc: string
    harga: number
    stock: number
    categoryId: number
  }, ExtArgs["result"]["product"]>
  composites: {}
}

/**
 * Model Product
 * 
 */
export type Product = runtime.Types.DefaultSelection<ProductPayload>
export type PesananPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Pesanan"
  objects: {
    DetailPesanan: DetailPesananPayload<ExtArgs>[]
    pengiriman: PengirimanPayload<ExtArgs> | null
    pembeli: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    tanggalPesanan: Date
    statusPesanan: string
    pembeliId: number
  }, ExtArgs["result"]["pesanan"]>
  composites: {}
}

/**
 * Model Pesanan
 * 
 */
export type Pesanan = runtime.Types.DefaultSelection<PesananPayload>
export type DetailPesananPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DetailPesanan"
  objects: {
    pesanan: PesananPayload<ExtArgs>
    products: ProductPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    pesananId: number
  }, ExtArgs["result"]["detailPesanan"]>
  composites: {}
}

/**
 * Model DetailPesanan
 * 
 */
export type DetailPesanan = runtime.Types.DefaultSelection<DetailPesananPayload>
export type PengirimanPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Pengiriman"
  objects: {
    pesanan: PesananPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    pesananId: number
    alamatPengiriman: string
    Tanggal: Date
  }, ExtArgs["result"]["pengiriman"]>
  composites: {}
}

/**
 * Model Pengiriman
 * 
 */
export type Pengiriman = runtime.Types.DefaultSelection<PengirimanPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.alamat`: Exposes CRUD operations for the **Alamat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alamats
    * const alamats = await prisma.alamat.findMany()
    * ```
    */
  get alamat(): Prisma.AlamatDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pesanan`: Exposes CRUD operations for the **Pesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesanans
    * const pesanans = await prisma.pesanan.findMany()
    * ```
    */
  get pesanan(): Prisma.PesananDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.detailPesanan`: Exposes CRUD operations for the **DetailPesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailPesanans
    * const detailPesanans = await prisma.detailPesanan.findMany()
    * ```
    */
  get detailPesanan(): Prisma.DetailPesananDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pengiriman`: Exposes CRUD operations for the **Pengiriman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengirimen
    * const pengirimen = await prisma.pengiriman.findMany()
    * ```
    */
  get pengiriman(): Prisma.PengirimanDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Alamat: 'Alamat',
    Category: 'Category',
    Product: 'Product',
    Pesanan: 'Pesanan',
    DetailPesanan: 'DetailPesanan',
    Pengiriman: 'Pengiriman'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'alamat' | 'category' | 'product' | 'pesanan' | 'detailPesanan' | 'pengiriman'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Alamat: {
        payload: AlamatPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AlamatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlamatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>
          }
          findFirst: {
            args: Prisma.AlamatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlamatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>
          }
          findMany: {
            args: Prisma.AlamatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>[]
          }
          create: {
            args: Prisma.AlamatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>
          }
          createMany: {
            args: Prisma.AlamatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlamatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>
          }
          update: {
            args: Prisma.AlamatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>
          }
          deleteMany: {
            args: Prisma.AlamatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlamatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlamatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AlamatPayload>
          }
          aggregate: {
            args: Prisma.AlamatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlamat>
          }
          groupBy: {
            args: Prisma.AlamatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlamatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlamatCountArgs<ExtArgs>,
            result: $Utils.Optional<AlamatCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: CategoryPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: ProductPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Pesanan: {
        payload: PesananPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PesananFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesananFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>
          }
          findFirst: {
            args: Prisma.PesananFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesananFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>
          }
          findMany: {
            args: Prisma.PesananFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>[]
          }
          create: {
            args: Prisma.PesananCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>
          }
          createMany: {
            args: Prisma.PesananCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PesananDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>
          }
          update: {
            args: Prisma.PesananUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>
          }
          deleteMany: {
            args: Prisma.PesananDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PesananUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PesananUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PesananPayload>
          }
          aggregate: {
            args: Prisma.PesananAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePesanan>
          }
          groupBy: {
            args: Prisma.PesananGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesananCountArgs<ExtArgs>,
            result: $Utils.Optional<PesananCountAggregateOutputType> | number
          }
        }
      }
      DetailPesanan: {
        payload: DetailPesananPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DetailPesananFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailPesananFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>
          }
          findFirst: {
            args: Prisma.DetailPesananFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailPesananFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>
          }
          findMany: {
            args: Prisma.DetailPesananFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>[]
          }
          create: {
            args: Prisma.DetailPesananCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>
          }
          createMany: {
            args: Prisma.DetailPesananCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DetailPesananDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>
          }
          update: {
            args: Prisma.DetailPesananUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>
          }
          deleteMany: {
            args: Prisma.DetailPesananDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DetailPesananUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DetailPesananUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DetailPesananPayload>
          }
          aggregate: {
            args: Prisma.DetailPesananAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDetailPesanan>
          }
          groupBy: {
            args: Prisma.DetailPesananGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DetailPesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailPesananCountArgs<ExtArgs>,
            result: $Utils.Optional<DetailPesananCountAggregateOutputType> | number
          }
        }
      }
      Pengiriman: {
        payload: PengirimanPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PengirimanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengirimanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>
          }
          findFirst: {
            args: Prisma.PengirimanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengirimanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>
          }
          findMany: {
            args: Prisma.PengirimanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>[]
          }
          create: {
            args: Prisma.PengirimanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>
          }
          createMany: {
            args: Prisma.PengirimanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PengirimanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>
          }
          update: {
            args: Prisma.PengirimanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>
          }
          deleteMany: {
            args: Prisma.PengirimanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PengirimanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PengirimanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PengirimanPayload>
          }
          aggregate: {
            args: Prisma.PengirimanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePengiriman>
          }
          groupBy: {
            args: Prisma.PengirimanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PengirimanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengirimanCountArgs<ExtArgs>,
            result: $Utils.Optional<PengirimanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    alamat: number
    pembelian: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    alamat?: boolean | UserCountOutputTypeCountAlamatArgs
    pembelian?: boolean | UserCountOutputTypeCountPembelianArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlamatWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPembelianArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    detailPes: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    detailPes?: boolean | ProductCountOutputTypeCountDetailPesArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDetailPesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetailPesananWhereInput
  }



  /**
   * Count Type PesananCountOutputType
   */


  export type PesananCountOutputType = {
    DetailPesanan: number
  }

  export type PesananCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetailPesanan?: boolean | PesananCountOutputTypeCountDetailPesananArgs
  }

  // Custom InputTypes

  /**
   * PesananCountOutputType without action
   */
  export type PesananCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananCountOutputType
     */
    select?: PesananCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PesananCountOutputType without action
   */
  export type PesananCountOutputTypeCountDetailPesananArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetailPesananWhereInput
  }



  /**
   * Count Type DetailPesananCountOutputType
   */


  export type DetailPesananCountOutputType = {
    products: number
  }

  export type DetailPesananCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | DetailPesananCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * DetailPesananCountOutputType without action
   */
  export type DetailPesananCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesananCountOutputType
     */
    select?: DetailPesananCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DetailPesananCountOutputType without action
   */
  export type DetailPesananCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nama: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    username: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    nama: string
    username: string
    email: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    alamat?: boolean | User$alamatArgs<ExtArgs>
    pembelian?: boolean | User$pembelianArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    alamat?: boolean | User$alamatArgs<ExtArgs>
    pembelian?: boolean | User$pembelianArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    alamat<T extends User$alamatArgs<ExtArgs> = {}>(args?: Subset<T, User$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findMany', never>| Null>;

    pembelian<T extends User$pembelianArgs<ExtArgs> = {}>(args?: Subset<T, User$pembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.alamat
   */
  export type User$alamatArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    where?: AlamatWhereInput
    orderBy?: Enumerable<AlamatOrderByWithRelationInput>
    cursor?: AlamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlamatScalarFieldEnum>
  }


  /**
   * User.pembelian
   */
  export type User$pembelianArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    where?: PesananWhereInput
    orderBy?: Enumerable<PesananOrderByWithRelationInput>
    cursor?: PesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PesananScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Alamat
   */


  export type AggregateAlamat = {
    _count: AlamatCountAggregateOutputType | null
    _avg: AlamatAvgAggregateOutputType | null
    _sum: AlamatSumAggregateOutputType | null
    _min: AlamatMinAggregateOutputType | null
    _max: AlamatMaxAggregateOutputType | null
  }

  export type AlamatAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AlamatSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AlamatMinAggregateOutputType = {
    id: number | null
    alamat: string | null
    gedung: string | null
    userId: number | null
  }

  export type AlamatMaxAggregateOutputType = {
    id: number | null
    alamat: string | null
    gedung: string | null
    userId: number | null
  }

  export type AlamatCountAggregateOutputType = {
    id: number
    alamat: number
    gedung: number
    userId: number
    _all: number
  }


  export type AlamatAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AlamatSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AlamatMinAggregateInputType = {
    id?: true
    alamat?: true
    gedung?: true
    userId?: true
  }

  export type AlamatMaxAggregateInputType = {
    id?: true
    alamat?: true
    gedung?: true
    userId?: true
  }

  export type AlamatCountAggregateInputType = {
    id?: true
    alamat?: true
    gedung?: true
    userId?: true
    _all?: true
  }

  export type AlamatAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alamat to aggregate.
     */
    where?: AlamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alamats to fetch.
     */
    orderBy?: Enumerable<AlamatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alamats
    **/
    _count?: true | AlamatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlamatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlamatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlamatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlamatMaxAggregateInputType
  }

  export type GetAlamatAggregateType<T extends AlamatAggregateArgs> = {
        [P in keyof T & keyof AggregateAlamat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlamat[P]>
      : GetScalarType<T[P], AggregateAlamat[P]>
  }




  export type AlamatGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlamatWhereInput
    orderBy?: Enumerable<AlamatOrderByWithAggregationInput>
    by: AlamatScalarFieldEnum[]
    having?: AlamatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlamatCountAggregateInputType | true
    _avg?: AlamatAvgAggregateInputType
    _sum?: AlamatSumAggregateInputType
    _min?: AlamatMinAggregateInputType
    _max?: AlamatMaxAggregateInputType
  }


  export type AlamatGroupByOutputType = {
    id: number
    alamat: string
    gedung: string
    userId: number
    _count: AlamatCountAggregateOutputType | null
    _avg: AlamatAvgAggregateOutputType | null
    _sum: AlamatSumAggregateOutputType | null
    _min: AlamatMinAggregateOutputType | null
    _max: AlamatMaxAggregateOutputType | null
  }

  type GetAlamatGroupByPayload<T extends AlamatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AlamatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlamatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlamatGroupByOutputType[P]>
            : GetScalarType<T[P], AlamatGroupByOutputType[P]>
        }
      >
    >


  export type AlamatSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alamat?: boolean
    gedung?: boolean
    userId?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["alamat"]>

  export type AlamatSelectScalar = {
    id?: boolean
    alamat?: boolean
    gedung?: boolean
    userId?: boolean
  }

  export type AlamatInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type AlamatGetPayload<S extends boolean | null | undefined | AlamatArgs> = $Types.GetResult<AlamatPayload, S>

  type AlamatCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AlamatFindManyArgs, 'select' | 'include'> & {
      select?: AlamatCountAggregateInputType | true
    }

  export interface AlamatDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alamat'], meta: { name: 'Alamat' } }
    /**
     * Find zero or one Alamat that matches the filter.
     * @param {AlamatFindUniqueArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlamatFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlamatFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Alamat'> extends True ? Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Alamat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlamatFindUniqueOrThrowArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlamatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlamatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Alamat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatFindFirstArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlamatFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlamatFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Alamat'> extends True ? Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Alamat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatFindFirstOrThrowArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlamatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlamatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Alamats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alamats
     * const alamats = await prisma.alamat.findMany()
     * 
     * // Get first 10 Alamats
     * const alamats = await prisma.alamat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alamatWithIdOnly = await prisma.alamat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlamatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlamatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Alamat.
     * @param {AlamatCreateArgs} args - Arguments to create a Alamat.
     * @example
     * // Create one Alamat
     * const Alamat = await prisma.alamat.create({
     *   data: {
     *     // ... data to create a Alamat
     *   }
     * })
     * 
    **/
    create<T extends AlamatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlamatCreateArgs<ExtArgs>>
    ): Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Alamats.
     *     @param {AlamatCreateManyArgs} args - Arguments to create many Alamats.
     *     @example
     *     // Create many Alamats
     *     const alamat = await prisma.alamat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlamatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlamatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alamat.
     * @param {AlamatDeleteArgs} args - Arguments to delete one Alamat.
     * @example
     * // Delete one Alamat
     * const Alamat = await prisma.alamat.delete({
     *   where: {
     *     // ... filter to delete one Alamat
     *   }
     * })
     * 
    **/
    delete<T extends AlamatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlamatDeleteArgs<ExtArgs>>
    ): Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Alamat.
     * @param {AlamatUpdateArgs} args - Arguments to update one Alamat.
     * @example
     * // Update one Alamat
     * const alamat = await prisma.alamat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlamatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlamatUpdateArgs<ExtArgs>>
    ): Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Alamats.
     * @param {AlamatDeleteManyArgs} args - Arguments to filter Alamats to delete.
     * @example
     * // Delete a few Alamats
     * const { count } = await prisma.alamat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlamatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlamatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alamats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alamats
     * const alamat = await prisma.alamat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlamatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlamatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alamat.
     * @param {AlamatUpsertArgs} args - Arguments to update or create a Alamat.
     * @example
     * // Update or create a Alamat
     * const alamat = await prisma.alamat.upsert({
     *   create: {
     *     // ... data to create a Alamat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alamat we want to update
     *   }
     * })
    **/
    upsert<T extends AlamatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlamatUpsertArgs<ExtArgs>>
    ): Prisma__AlamatClient<$Types.GetResult<AlamatPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Alamats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatCountArgs} args - Arguments to filter Alamats to count.
     * @example
     * // Count the number of Alamats
     * const count = await prisma.alamat.count({
     *   where: {
     *     // ... the filter for the Alamats we want to count
     *   }
     * })
    **/
    count<T extends AlamatCountArgs>(
      args?: Subset<T, AlamatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlamatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alamat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlamatAggregateArgs>(args: Subset<T, AlamatAggregateArgs>): Prisma.PrismaPromise<GetAlamatAggregateType<T>>

    /**
     * Group by Alamat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlamatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlamatGroupByArgs['orderBy'] }
        : { orderBy?: AlamatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlamatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlamatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Alamat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlamatClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Alamat base type for findUnique actions
   */
  export type AlamatFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * Filter, which Alamat to fetch.
     */
    where: AlamatWhereUniqueInput
  }

  /**
   * Alamat findUnique
   */
  export interface AlamatFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AlamatFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Alamat findUniqueOrThrow
   */
  export type AlamatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * Filter, which Alamat to fetch.
     */
    where: AlamatWhereUniqueInput
  }


  /**
   * Alamat base type for findFirst actions
   */
  export type AlamatFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * Filter, which Alamat to fetch.
     */
    where?: AlamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alamats to fetch.
     */
    orderBy?: Enumerable<AlamatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alamats.
     */
    cursor?: AlamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alamats.
     */
    distinct?: Enumerable<AlamatScalarFieldEnum>
  }

  /**
   * Alamat findFirst
   */
  export interface AlamatFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AlamatFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Alamat findFirstOrThrow
   */
  export type AlamatFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * Filter, which Alamat to fetch.
     */
    where?: AlamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alamats to fetch.
     */
    orderBy?: Enumerable<AlamatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alamats.
     */
    cursor?: AlamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alamats.
     */
    distinct?: Enumerable<AlamatScalarFieldEnum>
  }


  /**
   * Alamat findMany
   */
  export type AlamatFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * Filter, which Alamats to fetch.
     */
    where?: AlamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alamats to fetch.
     */
    orderBy?: Enumerable<AlamatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alamats.
     */
    cursor?: AlamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alamats.
     */
    skip?: number
    distinct?: Enumerable<AlamatScalarFieldEnum>
  }


  /**
   * Alamat create
   */
  export type AlamatCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * The data needed to create a Alamat.
     */
    data: XOR<AlamatCreateInput, AlamatUncheckedCreateInput>
  }


  /**
   * Alamat createMany
   */
  export type AlamatCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alamats.
     */
    data: Enumerable<AlamatCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Alamat update
   */
  export type AlamatUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * The data needed to update a Alamat.
     */
    data: XOR<AlamatUpdateInput, AlamatUncheckedUpdateInput>
    /**
     * Choose, which Alamat to update.
     */
    where: AlamatWhereUniqueInput
  }


  /**
   * Alamat updateMany
   */
  export type AlamatUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alamats.
     */
    data: XOR<AlamatUpdateManyMutationInput, AlamatUncheckedUpdateManyInput>
    /**
     * Filter which Alamats to update
     */
    where?: AlamatWhereInput
  }


  /**
   * Alamat upsert
   */
  export type AlamatUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * The filter to search for the Alamat to update in case it exists.
     */
    where: AlamatWhereUniqueInput
    /**
     * In case the Alamat found by the `where` argument doesn't exist, create a new Alamat with this data.
     */
    create: XOR<AlamatCreateInput, AlamatUncheckedCreateInput>
    /**
     * In case the Alamat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlamatUpdateInput, AlamatUncheckedUpdateInput>
  }


  /**
   * Alamat delete
   */
  export type AlamatDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
    /**
     * Filter which Alamat to delete.
     */
    where: AlamatWhereUniqueInput
  }


  /**
   * Alamat deleteMany
   */
  export type AlamatDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alamats to delete
     */
    where?: AlamatWhereInput
  }


  /**
   * Alamat without action
   */
  export type AlamatArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alamat
     */
    select?: AlamatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlamatInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    nama: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> = $Types.GetResult<CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CategoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CategoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    harga: number | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    nama: string | null
    desc: string | null
    harga: number | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    desc: string | null
    harga: number | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    nama: number
    desc: number
    harga: number
    stock: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    harga?: true
    stock?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    harga?: true
    stock?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    nama?: true
    desc?: true
    harga?: true
    stock?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    nama?: true
    desc?: true
    harga?: true
    stock?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    nama?: true
    desc?: true
    harga?: true
    stock?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    nama: string
    desc: string
    harga: number
    stock: number
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    desc?: boolean
    harga?: boolean
    stock?: boolean
    categoryId?: boolean
    category?: boolean | CategoryArgs<ExtArgs>
    detailPes?: boolean | Product$detailPesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    nama?: boolean
    desc?: boolean
    harga?: boolean
    stock?: boolean
    categoryId?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryArgs<ExtArgs>
    detailPes?: boolean | Product$detailPesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeArgs<ExtArgs>
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> = $Types.GetResult<ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Types.GetResult<ProductPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends CategoryArgs<ExtArgs> = {}>(args?: Subset<T, CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    detailPes<T extends Product$detailPesArgs<ExtArgs> = {}>(args?: Subset<T, Product$detailPesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProductFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProductFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.detailPes
   */
  export type Product$detailPesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    where?: DetailPesananWhereInput
    orderBy?: Enumerable<DetailPesananOrderByWithRelationInput>
    cursor?: DetailPesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DetailPesananScalarFieldEnum>
  }


  /**
   * Product without action
   */
  export type ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Pesanan
   */


  export type AggregatePesanan = {
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  export type PesananAvgAggregateOutputType = {
    id: number | null
    pembeliId: number | null
  }

  export type PesananSumAggregateOutputType = {
    id: number | null
    pembeliId: number | null
  }

  export type PesananMinAggregateOutputType = {
    id: number | null
    tanggalPesanan: Date | null
    statusPesanan: string | null
    pembeliId: number | null
  }

  export type PesananMaxAggregateOutputType = {
    id: number | null
    tanggalPesanan: Date | null
    statusPesanan: string | null
    pembeliId: number | null
  }

  export type PesananCountAggregateOutputType = {
    id: number
    tanggalPesanan: number
    statusPesanan: number
    pembeliId: number
    _all: number
  }


  export type PesananAvgAggregateInputType = {
    id?: true
    pembeliId?: true
  }

  export type PesananSumAggregateInputType = {
    id?: true
    pembeliId?: true
  }

  export type PesananMinAggregateInputType = {
    id?: true
    tanggalPesanan?: true
    statusPesanan?: true
    pembeliId?: true
  }

  export type PesananMaxAggregateInputType = {
    id?: true
    tanggalPesanan?: true
    statusPesanan?: true
    pembeliId?: true
  }

  export type PesananCountAggregateInputType = {
    id?: true
    tanggalPesanan?: true
    statusPesanan?: true
    pembeliId?: true
    _all?: true
  }

  export type PesananAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanan to aggregate.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Enumerable<PesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pesanans
    **/
    _count?: true | PesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesananMaxAggregateInputType
  }

  export type GetPesananAggregateType<T extends PesananAggregateArgs> = {
        [P in keyof T & keyof AggregatePesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesanan[P]>
      : GetScalarType<T[P], AggregatePesanan[P]>
  }




  export type PesananGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
    orderBy?: Enumerable<PesananOrderByWithAggregationInput>
    by: PesananScalarFieldEnum[]
    having?: PesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesananCountAggregateInputType | true
    _avg?: PesananAvgAggregateInputType
    _sum?: PesananSumAggregateInputType
    _min?: PesananMinAggregateInputType
    _max?: PesananMaxAggregateInputType
  }


  export type PesananGroupByOutputType = {
    id: number
    tanggalPesanan: Date
    statusPesanan: string
    pembeliId: number
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  type GetPesananGroupByPayload<T extends PesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesananGroupByOutputType[P]>
            : GetScalarType<T[P], PesananGroupByOutputType[P]>
        }
      >
    >


  export type PesananSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggalPesanan?: boolean
    statusPesanan?: boolean
    pembeliId?: boolean
    DetailPesanan?: boolean | Pesanan$DetailPesananArgs<ExtArgs>
    pengiriman?: boolean | PengirimanArgs<ExtArgs>
    pembeli?: boolean | UserArgs<ExtArgs>
    _count?: boolean | PesananCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectScalar = {
    id?: boolean
    tanggalPesanan?: boolean
    statusPesanan?: boolean
    pembeliId?: boolean
  }

  export type PesananInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DetailPesanan?: boolean | Pesanan$DetailPesananArgs<ExtArgs>
    pengiriman?: boolean | PengirimanArgs<ExtArgs>
    pembeli?: boolean | UserArgs<ExtArgs>
    _count?: boolean | PesananCountOutputTypeArgs<ExtArgs>
  }


  type PesananGetPayload<S extends boolean | null | undefined | PesananArgs> = $Types.GetResult<PesananPayload, S>

  type PesananCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PesananFindManyArgs, 'select' | 'include'> & {
      select?: PesananCountAggregateInputType | true
    }

  export interface PesananDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pesanan'], meta: { name: 'Pesanan' } }
    /**
     * Find zero or one Pesanan that matches the filter.
     * @param {PesananFindUniqueArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PesananFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PesananFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pesanan'> extends True ? Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Pesanan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PesananFindUniqueOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PesananFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PesananFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Pesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PesananFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PesananFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pesanan'> extends True ? Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Pesanan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PesananFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PesananFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Pesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesanans
     * const pesanans = await prisma.pesanan.findMany()
     * 
     * // Get first 10 Pesanans
     * const pesanans = await prisma.pesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesananWithIdOnly = await prisma.pesanan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PesananFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PesananFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Pesanan.
     * @param {PesananCreateArgs} args - Arguments to create a Pesanan.
     * @example
     * // Create one Pesanan
     * const Pesanan = await prisma.pesanan.create({
     *   data: {
     *     // ... data to create a Pesanan
     *   }
     * })
     * 
    **/
    create<T extends PesananCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PesananCreateArgs<ExtArgs>>
    ): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Pesanans.
     *     @param {PesananCreateManyArgs} args - Arguments to create many Pesanans.
     *     @example
     *     // Create many Pesanans
     *     const pesanan = await prisma.pesanan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PesananCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PesananCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pesanan.
     * @param {PesananDeleteArgs} args - Arguments to delete one Pesanan.
     * @example
     * // Delete one Pesanan
     * const Pesanan = await prisma.pesanan.delete({
     *   where: {
     *     // ... filter to delete one Pesanan
     *   }
     * })
     * 
    **/
    delete<T extends PesananDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PesananDeleteArgs<ExtArgs>>
    ): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Pesanan.
     * @param {PesananUpdateArgs} args - Arguments to update one Pesanan.
     * @example
     * // Update one Pesanan
     * const pesanan = await prisma.pesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PesananUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PesananUpdateArgs<ExtArgs>>
    ): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Pesanans.
     * @param {PesananDeleteManyArgs} args - Arguments to filter Pesanans to delete.
     * @example
     * // Delete a few Pesanans
     * const { count } = await prisma.pesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PesananDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PesananDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PesananUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PesananUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pesanan.
     * @param {PesananUpsertArgs} args - Arguments to update or create a Pesanan.
     * @example
     * // Update or create a Pesanan
     * const pesanan = await prisma.pesanan.upsert({
     *   create: {
     *     // ... data to create a Pesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesanan we want to update
     *   }
     * })
    **/
    upsert<T extends PesananUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PesananUpsertArgs<ExtArgs>>
    ): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananCountArgs} args - Arguments to filter Pesanans to count.
     * @example
     * // Count the number of Pesanans
     * const count = await prisma.pesanan.count({
     *   where: {
     *     // ... the filter for the Pesanans we want to count
     *   }
     * })
    **/
    count<T extends PesananCountArgs>(
      args?: Subset<T, PesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PesananAggregateArgs>(args: Subset<T, PesananAggregateArgs>): Prisma.PrismaPromise<GetPesananAggregateType<T>>

    /**
     * Group by Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesananGroupByArgs['orderBy'] }
        : { orderBy?: PesananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PesananClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    DetailPesanan<T extends Pesanan$DetailPesananArgs<ExtArgs> = {}>(args?: Subset<T, Pesanan$DetailPesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findMany', never>| Null>;

    pengiriman<T extends PengirimanArgs<ExtArgs> = {}>(args?: Subset<T, PengirimanArgs<ExtArgs>>): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    pembeli<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pesanan base type for findUnique actions
   */
  export type PesananFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan findUnique
   */
  export interface PesananFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PesananFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pesanan findUniqueOrThrow
   */
  export type PesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where: PesananWhereUniqueInput
  }


  /**
   * Pesanan base type for findFirst actions
   */
  export type PesananFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Enumerable<PesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesanans.
     */
    distinct?: Enumerable<PesananScalarFieldEnum>
  }

  /**
   * Pesanan findFirst
   */
  export interface PesananFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PesananFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pesanan findFirstOrThrow
   */
  export type PesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Enumerable<PesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesanans.
     */
    distinct?: Enumerable<PesananScalarFieldEnum>
  }


  /**
   * Pesanan findMany
   */
  export type PesananFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanans to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: Enumerable<PesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    distinct?: Enumerable<PesananScalarFieldEnum>
  }


  /**
   * Pesanan create
   */
  export type PesananCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The data needed to create a Pesanan.
     */
    data: XOR<PesananCreateInput, PesananUncheckedCreateInput>
  }


  /**
   * Pesanan createMany
   */
  export type PesananCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesanans.
     */
    data: Enumerable<PesananCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pesanan update
   */
  export type PesananUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The data needed to update a Pesanan.
     */
    data: XOR<PesananUpdateInput, PesananUncheckedUpdateInput>
    /**
     * Choose, which Pesanan to update.
     */
    where: PesananWhereUniqueInput
  }


  /**
   * Pesanan updateMany
   */
  export type PesananUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesanans.
     */
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyInput>
    /**
     * Filter which Pesanans to update
     */
    where?: PesananWhereInput
  }


  /**
   * Pesanan upsert
   */
  export type PesananUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The filter to search for the Pesanan to update in case it exists.
     */
    where: PesananWhereUniqueInput
    /**
     * In case the Pesanan found by the `where` argument doesn't exist, create a new Pesanan with this data.
     */
    create: XOR<PesananCreateInput, PesananUncheckedCreateInput>
    /**
     * In case the Pesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesananUpdateInput, PesananUncheckedUpdateInput>
  }


  /**
   * Pesanan delete
   */
  export type PesananDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter which Pesanan to delete.
     */
    where: PesananWhereUniqueInput
  }


  /**
   * Pesanan deleteMany
   */
  export type PesananDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanans to delete
     */
    where?: PesananWhereInput
  }


  /**
   * Pesanan.DetailPesanan
   */
  export type Pesanan$DetailPesananArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    where?: DetailPesananWhereInput
    orderBy?: Enumerable<DetailPesananOrderByWithRelationInput>
    cursor?: DetailPesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DetailPesananScalarFieldEnum>
  }


  /**
   * Pesanan without action
   */
  export type PesananArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PesananInclude<ExtArgs> | null
  }



  /**
   * Model DetailPesanan
   */


  export type AggregateDetailPesanan = {
    _count: DetailPesananCountAggregateOutputType | null
    _avg: DetailPesananAvgAggregateOutputType | null
    _sum: DetailPesananSumAggregateOutputType | null
    _min: DetailPesananMinAggregateOutputType | null
    _max: DetailPesananMaxAggregateOutputType | null
  }

  export type DetailPesananAvgAggregateOutputType = {
    id: number | null
    pesananId: number | null
  }

  export type DetailPesananSumAggregateOutputType = {
    id: number | null
    pesananId: number | null
  }

  export type DetailPesananMinAggregateOutputType = {
    id: number | null
    pesananId: number | null
  }

  export type DetailPesananMaxAggregateOutputType = {
    id: number | null
    pesananId: number | null
  }

  export type DetailPesananCountAggregateOutputType = {
    id: number
    pesananId: number
    _all: number
  }


  export type DetailPesananAvgAggregateInputType = {
    id?: true
    pesananId?: true
  }

  export type DetailPesananSumAggregateInputType = {
    id?: true
    pesananId?: true
  }

  export type DetailPesananMinAggregateInputType = {
    id?: true
    pesananId?: true
  }

  export type DetailPesananMaxAggregateInputType = {
    id?: true
    pesananId?: true
  }

  export type DetailPesananCountAggregateInputType = {
    id?: true
    pesananId?: true
    _all?: true
  }

  export type DetailPesananAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPesanan to aggregate.
     */
    where?: DetailPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Enumerable<DetailPesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailPesanans
    **/
    _count?: true | DetailPesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailPesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailPesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailPesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailPesananMaxAggregateInputType
  }

  export type GetDetailPesananAggregateType<T extends DetailPesananAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailPesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailPesanan[P]>
      : GetScalarType<T[P], AggregateDetailPesanan[P]>
  }




  export type DetailPesananGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DetailPesananWhereInput
    orderBy?: Enumerable<DetailPesananOrderByWithAggregationInput>
    by: DetailPesananScalarFieldEnum[]
    having?: DetailPesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailPesananCountAggregateInputType | true
    _avg?: DetailPesananAvgAggregateInputType
    _sum?: DetailPesananSumAggregateInputType
    _min?: DetailPesananMinAggregateInputType
    _max?: DetailPesananMaxAggregateInputType
  }


  export type DetailPesananGroupByOutputType = {
    id: number
    pesananId: number
    _count: DetailPesananCountAggregateOutputType | null
    _avg: DetailPesananAvgAggregateOutputType | null
    _sum: DetailPesananSumAggregateOutputType | null
    _min: DetailPesananMinAggregateOutputType | null
    _max: DetailPesananMaxAggregateOutputType | null
  }

  type GetDetailPesananGroupByPayload<T extends DetailPesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DetailPesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailPesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailPesananGroupByOutputType[P]>
            : GetScalarType<T[P], DetailPesananGroupByOutputType[P]>
        }
      >
    >


  export type DetailPesananSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pesananId?: boolean
    pesanan?: boolean | PesananArgs<ExtArgs>
    products?: boolean | DetailPesanan$productsArgs<ExtArgs>
    _count?: boolean | DetailPesananCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["detailPesanan"]>

  export type DetailPesananSelectScalar = {
    id?: boolean
    pesananId?: boolean
  }

  export type DetailPesananInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pesanan?: boolean | PesananArgs<ExtArgs>
    products?: boolean | DetailPesanan$productsArgs<ExtArgs>
    _count?: boolean | DetailPesananCountOutputTypeArgs<ExtArgs>
  }


  type DetailPesananGetPayload<S extends boolean | null | undefined | DetailPesananArgs> = $Types.GetResult<DetailPesananPayload, S>

  type DetailPesananCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DetailPesananFindManyArgs, 'select' | 'include'> & {
      select?: DetailPesananCountAggregateInputType | true
    }

  export interface DetailPesananDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailPesanan'], meta: { name: 'DetailPesanan' } }
    /**
     * Find zero or one DetailPesanan that matches the filter.
     * @param {DetailPesananFindUniqueArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DetailPesananFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DetailPesananFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DetailPesanan'> extends True ? Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DetailPesanan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DetailPesananFindUniqueOrThrowArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DetailPesananFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPesananFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DetailPesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananFindFirstArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DetailPesananFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DetailPesananFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DetailPesanan'> extends True ? Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DetailPesanan that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananFindFirstOrThrowArgs} args - Arguments to find a DetailPesanan
     * @example
     * // Get one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DetailPesananFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPesananFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DetailPesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailPesanans
     * const detailPesanans = await prisma.detailPesanan.findMany()
     * 
     * // Get first 10 DetailPesanans
     * const detailPesanans = await prisma.detailPesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailPesananWithIdOnly = await prisma.detailPesanan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DetailPesananFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPesananFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DetailPesanan.
     * @param {DetailPesananCreateArgs} args - Arguments to create a DetailPesanan.
     * @example
     * // Create one DetailPesanan
     * const DetailPesanan = await prisma.detailPesanan.create({
     *   data: {
     *     // ... data to create a DetailPesanan
     *   }
     * })
     * 
    **/
    create<T extends DetailPesananCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPesananCreateArgs<ExtArgs>>
    ): Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DetailPesanans.
     *     @param {DetailPesananCreateManyArgs} args - Arguments to create many DetailPesanans.
     *     @example
     *     // Create many DetailPesanans
     *     const detailPesanan = await prisma.detailPesanan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DetailPesananCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPesananCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailPesanan.
     * @param {DetailPesananDeleteArgs} args - Arguments to delete one DetailPesanan.
     * @example
     * // Delete one DetailPesanan
     * const DetailPesanan = await prisma.detailPesanan.delete({
     *   where: {
     *     // ... filter to delete one DetailPesanan
     *   }
     * })
     * 
    **/
    delete<T extends DetailPesananDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPesananDeleteArgs<ExtArgs>>
    ): Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DetailPesanan.
     * @param {DetailPesananUpdateArgs} args - Arguments to update one DetailPesanan.
     * @example
     * // Update one DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DetailPesananUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPesananUpdateArgs<ExtArgs>>
    ): Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DetailPesanans.
     * @param {DetailPesananDeleteManyArgs} args - Arguments to filter DetailPesanans to delete.
     * @example
     * // Delete a few DetailPesanans
     * const { count } = await prisma.detailPesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DetailPesananDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPesananDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailPesanans
     * const detailPesanan = await prisma.detailPesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DetailPesananUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPesananUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailPesanan.
     * @param {DetailPesananUpsertArgs} args - Arguments to update or create a DetailPesanan.
     * @example
     * // Update or create a DetailPesanan
     * const detailPesanan = await prisma.detailPesanan.upsert({
     *   create: {
     *     // ... data to create a DetailPesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailPesanan we want to update
     *   }
     * })
    **/
    upsert<T extends DetailPesananUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPesananUpsertArgs<ExtArgs>>
    ): Prisma__DetailPesananClient<$Types.GetResult<DetailPesananPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DetailPesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananCountArgs} args - Arguments to filter DetailPesanans to count.
     * @example
     * // Count the number of DetailPesanans
     * const count = await prisma.detailPesanan.count({
     *   where: {
     *     // ... the filter for the DetailPesanans we want to count
     *   }
     * })
    **/
    count<T extends DetailPesananCountArgs>(
      args?: Subset<T, DetailPesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailPesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailPesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailPesananAggregateArgs>(args: Subset<T, DetailPesananAggregateArgs>): Prisma.PrismaPromise<GetDetailPesananAggregateType<T>>

    /**
     * Group by DetailPesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPesananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailPesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailPesananGroupByArgs['orderBy'] }
        : { orderBy?: DetailPesananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailPesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailPesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DetailPesananClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    pesanan<T extends PesananArgs<ExtArgs> = {}>(args?: Subset<T, PesananArgs<ExtArgs>>): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    products<T extends DetailPesanan$productsArgs<ExtArgs> = {}>(args?: Subset<T, DetailPesanan$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DetailPesanan base type for findUnique actions
   */
  export type DetailPesananFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where: DetailPesananWhereUniqueInput
  }

  /**
   * DetailPesanan findUnique
   */
  export interface DetailPesananFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DetailPesananFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DetailPesanan findUniqueOrThrow
   */
  export type DetailPesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where: DetailPesananWhereUniqueInput
  }


  /**
   * DetailPesanan base type for findFirst actions
   */
  export type DetailPesananFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where?: DetailPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Enumerable<DetailPesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPesanans.
     */
    cursor?: DetailPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPesanans.
     */
    distinct?: Enumerable<DetailPesananScalarFieldEnum>
  }

  /**
   * DetailPesanan findFirst
   */
  export interface DetailPesananFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DetailPesananFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DetailPesanan findFirstOrThrow
   */
  export type DetailPesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * Filter, which DetailPesanan to fetch.
     */
    where?: DetailPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Enumerable<DetailPesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPesanans.
     */
    cursor?: DetailPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPesanans.
     */
    distinct?: Enumerable<DetailPesananScalarFieldEnum>
  }


  /**
   * DetailPesanan findMany
   */
  export type DetailPesananFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * Filter, which DetailPesanans to fetch.
     */
    where?: DetailPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPesanans to fetch.
     */
    orderBy?: Enumerable<DetailPesananOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailPesanans.
     */
    cursor?: DetailPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPesanans.
     */
    skip?: number
    distinct?: Enumerable<DetailPesananScalarFieldEnum>
  }


  /**
   * DetailPesanan create
   */
  export type DetailPesananCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailPesanan.
     */
    data: XOR<DetailPesananCreateInput, DetailPesananUncheckedCreateInput>
  }


  /**
   * DetailPesanan createMany
   */
  export type DetailPesananCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailPesanans.
     */
    data: Enumerable<DetailPesananCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DetailPesanan update
   */
  export type DetailPesananUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailPesanan.
     */
    data: XOR<DetailPesananUpdateInput, DetailPesananUncheckedUpdateInput>
    /**
     * Choose, which DetailPesanan to update.
     */
    where: DetailPesananWhereUniqueInput
  }


  /**
   * DetailPesanan updateMany
   */
  export type DetailPesananUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailPesanans.
     */
    data: XOR<DetailPesananUpdateManyMutationInput, DetailPesananUncheckedUpdateManyInput>
    /**
     * Filter which DetailPesanans to update
     */
    where?: DetailPesananWhereInput
  }


  /**
   * DetailPesanan upsert
   */
  export type DetailPesananUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailPesanan to update in case it exists.
     */
    where: DetailPesananWhereUniqueInput
    /**
     * In case the DetailPesanan found by the `where` argument doesn't exist, create a new DetailPesanan with this data.
     */
    create: XOR<DetailPesananCreateInput, DetailPesananUncheckedCreateInput>
    /**
     * In case the DetailPesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailPesananUpdateInput, DetailPesananUncheckedUpdateInput>
  }


  /**
   * DetailPesanan delete
   */
  export type DetailPesananDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
    /**
     * Filter which DetailPesanan to delete.
     */
    where: DetailPesananWhereUniqueInput
  }


  /**
   * DetailPesanan deleteMany
   */
  export type DetailPesananDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPesanans to delete
     */
    where?: DetailPesananWhereInput
  }


  /**
   * DetailPesanan.products
   */
  export type DetailPesanan$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * DetailPesanan without action
   */
  export type DetailPesananArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPesanan
     */
    select?: DetailPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPesananInclude<ExtArgs> | null
  }



  /**
   * Model Pengiriman
   */


  export type AggregatePengiriman = {
    _count: PengirimanCountAggregateOutputType | null
    _avg: PengirimanAvgAggregateOutputType | null
    _sum: PengirimanSumAggregateOutputType | null
    _min: PengirimanMinAggregateOutputType | null
    _max: PengirimanMaxAggregateOutputType | null
  }

  export type PengirimanAvgAggregateOutputType = {
    id: number | null
    pesananId: number | null
  }

  export type PengirimanSumAggregateOutputType = {
    id: number | null
    pesananId: number | null
  }

  export type PengirimanMinAggregateOutputType = {
    id: number | null
    pesananId: number | null
    alamatPengiriman: string | null
    Tanggal: Date | null
  }

  export type PengirimanMaxAggregateOutputType = {
    id: number | null
    pesananId: number | null
    alamatPengiriman: string | null
    Tanggal: Date | null
  }

  export type PengirimanCountAggregateOutputType = {
    id: number
    pesananId: number
    alamatPengiriman: number
    Tanggal: number
    _all: number
  }


  export type PengirimanAvgAggregateInputType = {
    id?: true
    pesananId?: true
  }

  export type PengirimanSumAggregateInputType = {
    id?: true
    pesananId?: true
  }

  export type PengirimanMinAggregateInputType = {
    id?: true
    pesananId?: true
    alamatPengiriman?: true
    Tanggal?: true
  }

  export type PengirimanMaxAggregateInputType = {
    id?: true
    pesananId?: true
    alamatPengiriman?: true
    Tanggal?: true
  }

  export type PengirimanCountAggregateInputType = {
    id?: true
    pesananId?: true
    alamatPengiriman?: true
    Tanggal?: true
    _all?: true
  }

  export type PengirimanAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengiriman to aggregate.
     */
    where?: PengirimanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengirimen to fetch.
     */
    orderBy?: Enumerable<PengirimanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengirimanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengirimen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengirimen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pengirimen
    **/
    _count?: true | PengirimanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengirimanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengirimanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengirimanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengirimanMaxAggregateInputType
  }

  export type GetPengirimanAggregateType<T extends PengirimanAggregateArgs> = {
        [P in keyof T & keyof AggregatePengiriman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengiriman[P]>
      : GetScalarType<T[P], AggregatePengiriman[P]>
  }




  export type PengirimanGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PengirimanWhereInput
    orderBy?: Enumerable<PengirimanOrderByWithAggregationInput>
    by: PengirimanScalarFieldEnum[]
    having?: PengirimanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengirimanCountAggregateInputType | true
    _avg?: PengirimanAvgAggregateInputType
    _sum?: PengirimanSumAggregateInputType
    _min?: PengirimanMinAggregateInputType
    _max?: PengirimanMaxAggregateInputType
  }


  export type PengirimanGroupByOutputType = {
    id: number
    pesananId: number
    alamatPengiriman: string
    Tanggal: Date
    _count: PengirimanCountAggregateOutputType | null
    _avg: PengirimanAvgAggregateOutputType | null
    _sum: PengirimanSumAggregateOutputType | null
    _min: PengirimanMinAggregateOutputType | null
    _max: PengirimanMaxAggregateOutputType | null
  }

  type GetPengirimanGroupByPayload<T extends PengirimanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PengirimanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengirimanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengirimanGroupByOutputType[P]>
            : GetScalarType<T[P], PengirimanGroupByOutputType[P]>
        }
      >
    >


  export type PengirimanSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pesananId?: boolean
    alamatPengiriman?: boolean
    Tanggal?: boolean
    pesanan?: boolean | PesananArgs<ExtArgs>
  }, ExtArgs["result"]["pengiriman"]>

  export type PengirimanSelectScalar = {
    id?: boolean
    pesananId?: boolean
    alamatPengiriman?: boolean
    Tanggal?: boolean
  }

  export type PengirimanInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pesanan?: boolean | PesananArgs<ExtArgs>
  }


  type PengirimanGetPayload<S extends boolean | null | undefined | PengirimanArgs> = $Types.GetResult<PengirimanPayload, S>

  type PengirimanCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PengirimanFindManyArgs, 'select' | 'include'> & {
      select?: PengirimanCountAggregateInputType | true
    }

  export interface PengirimanDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengiriman'], meta: { name: 'Pengiriman' } }
    /**
     * Find zero or one Pengiriman that matches the filter.
     * @param {PengirimanFindUniqueArgs} args - Arguments to find a Pengiriman
     * @example
     * // Get one Pengiriman
     * const pengiriman = await prisma.pengiriman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PengirimanFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PengirimanFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pengiriman'> extends True ? Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Pengiriman that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PengirimanFindUniqueOrThrowArgs} args - Arguments to find a Pengiriman
     * @example
     * // Get one Pengiriman
     * const pengiriman = await prisma.pengiriman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PengirimanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PengirimanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Pengiriman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanFindFirstArgs} args - Arguments to find a Pengiriman
     * @example
     * // Get one Pengiriman
     * const pengiriman = await prisma.pengiriman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PengirimanFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PengirimanFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pengiriman'> extends True ? Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Pengiriman that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanFindFirstOrThrowArgs} args - Arguments to find a Pengiriman
     * @example
     * // Get one Pengiriman
     * const pengiriman = await prisma.pengiriman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PengirimanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PengirimanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Pengirimen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengirimen
     * const pengirimen = await prisma.pengiriman.findMany()
     * 
     * // Get first 10 Pengirimen
     * const pengirimen = await prisma.pengiriman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pengirimanWithIdOnly = await prisma.pengiriman.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PengirimanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PengirimanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Pengiriman.
     * @param {PengirimanCreateArgs} args - Arguments to create a Pengiriman.
     * @example
     * // Create one Pengiriman
     * const Pengiriman = await prisma.pengiriman.create({
     *   data: {
     *     // ... data to create a Pengiriman
     *   }
     * })
     * 
    **/
    create<T extends PengirimanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PengirimanCreateArgs<ExtArgs>>
    ): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Pengirimen.
     *     @param {PengirimanCreateManyArgs} args - Arguments to create many Pengirimen.
     *     @example
     *     // Create many Pengirimen
     *     const pengiriman = await prisma.pengiriman.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PengirimanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PengirimanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengiriman.
     * @param {PengirimanDeleteArgs} args - Arguments to delete one Pengiriman.
     * @example
     * // Delete one Pengiriman
     * const Pengiriman = await prisma.pengiriman.delete({
     *   where: {
     *     // ... filter to delete one Pengiriman
     *   }
     * })
     * 
    **/
    delete<T extends PengirimanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PengirimanDeleteArgs<ExtArgs>>
    ): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Pengiriman.
     * @param {PengirimanUpdateArgs} args - Arguments to update one Pengiriman.
     * @example
     * // Update one Pengiriman
     * const pengiriman = await prisma.pengiriman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PengirimanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PengirimanUpdateArgs<ExtArgs>>
    ): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Pengirimen.
     * @param {PengirimanDeleteManyArgs} args - Arguments to filter Pengirimen to delete.
     * @example
     * // Delete a few Pengirimen
     * const { count } = await prisma.pengiriman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PengirimanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PengirimanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengirimen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengirimen
     * const pengiriman = await prisma.pengiriman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PengirimanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PengirimanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengiriman.
     * @param {PengirimanUpsertArgs} args - Arguments to update or create a Pengiriman.
     * @example
     * // Update or create a Pengiriman
     * const pengiriman = await prisma.pengiriman.upsert({
     *   create: {
     *     // ... data to create a Pengiriman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengiriman we want to update
     *   }
     * })
    **/
    upsert<T extends PengirimanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PengirimanUpsertArgs<ExtArgs>>
    ): Prisma__PengirimanClient<$Types.GetResult<PengirimanPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Pengirimen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanCountArgs} args - Arguments to filter Pengirimen to count.
     * @example
     * // Count the number of Pengirimen
     * const count = await prisma.pengiriman.count({
     *   where: {
     *     // ... the filter for the Pengirimen we want to count
     *   }
     * })
    **/
    count<T extends PengirimanCountArgs>(
      args?: Subset<T, PengirimanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengirimanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengiriman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PengirimanAggregateArgs>(args: Subset<T, PengirimanAggregateArgs>): Prisma.PrismaPromise<GetPengirimanAggregateType<T>>

    /**
     * Group by Pengiriman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengirimanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PengirimanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengirimanGroupByArgs['orderBy'] }
        : { orderBy?: PengirimanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PengirimanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengirimanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengiriman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PengirimanClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    pesanan<T extends PesananArgs<ExtArgs> = {}>(args?: Subset<T, PesananArgs<ExtArgs>>): Prisma__PesananClient<$Types.GetResult<PesananPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pengiriman base type for findUnique actions
   */
  export type PengirimanFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * Filter, which Pengiriman to fetch.
     */
    where: PengirimanWhereUniqueInput
  }

  /**
   * Pengiriman findUnique
   */
  export interface PengirimanFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PengirimanFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pengiriman findUniqueOrThrow
   */
  export type PengirimanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * Filter, which Pengiriman to fetch.
     */
    where: PengirimanWhereUniqueInput
  }


  /**
   * Pengiriman base type for findFirst actions
   */
  export type PengirimanFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * Filter, which Pengiriman to fetch.
     */
    where?: PengirimanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengirimen to fetch.
     */
    orderBy?: Enumerable<PengirimanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengirimen.
     */
    cursor?: PengirimanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengirimen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengirimen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengirimen.
     */
    distinct?: Enumerable<PengirimanScalarFieldEnum>
  }

  /**
   * Pengiriman findFirst
   */
  export interface PengirimanFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PengirimanFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pengiriman findFirstOrThrow
   */
  export type PengirimanFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * Filter, which Pengiriman to fetch.
     */
    where?: PengirimanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengirimen to fetch.
     */
    orderBy?: Enumerable<PengirimanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengirimen.
     */
    cursor?: PengirimanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengirimen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengirimen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengirimen.
     */
    distinct?: Enumerable<PengirimanScalarFieldEnum>
  }


  /**
   * Pengiriman findMany
   */
  export type PengirimanFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * Filter, which Pengirimen to fetch.
     */
    where?: PengirimanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengirimen to fetch.
     */
    orderBy?: Enumerable<PengirimanOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pengirimen.
     */
    cursor?: PengirimanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengirimen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengirimen.
     */
    skip?: number
    distinct?: Enumerable<PengirimanScalarFieldEnum>
  }


  /**
   * Pengiriman create
   */
  export type PengirimanCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * The data needed to create a Pengiriman.
     */
    data: XOR<PengirimanCreateInput, PengirimanUncheckedCreateInput>
  }


  /**
   * Pengiriman createMany
   */
  export type PengirimanCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pengirimen.
     */
    data: Enumerable<PengirimanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pengiriman update
   */
  export type PengirimanUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * The data needed to update a Pengiriman.
     */
    data: XOR<PengirimanUpdateInput, PengirimanUncheckedUpdateInput>
    /**
     * Choose, which Pengiriman to update.
     */
    where: PengirimanWhereUniqueInput
  }


  /**
   * Pengiriman updateMany
   */
  export type PengirimanUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pengirimen.
     */
    data: XOR<PengirimanUpdateManyMutationInput, PengirimanUncheckedUpdateManyInput>
    /**
     * Filter which Pengirimen to update
     */
    where?: PengirimanWhereInput
  }


  /**
   * Pengiriman upsert
   */
  export type PengirimanUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * The filter to search for the Pengiriman to update in case it exists.
     */
    where: PengirimanWhereUniqueInput
    /**
     * In case the Pengiriman found by the `where` argument doesn't exist, create a new Pengiriman with this data.
     */
    create: XOR<PengirimanCreateInput, PengirimanUncheckedCreateInput>
    /**
     * In case the Pengiriman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengirimanUpdateInput, PengirimanUncheckedUpdateInput>
  }


  /**
   * Pengiriman delete
   */
  export type PengirimanDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
    /**
     * Filter which Pengiriman to delete.
     */
    where: PengirimanWhereUniqueInput
  }


  /**
   * Pengiriman deleteMany
   */
  export type PengirimanDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengirimen to delete
     */
    where?: PengirimanWhereInput
  }


  /**
   * Pengiriman without action
   */
  export type PengirimanArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengiriman
     */
    select?: PengirimanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PengirimanInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AlamatScalarFieldEnum: {
    id: 'id',
    alamat: 'alamat',
    gedung: 'gedung',
    userId: 'userId'
  };

  export type AlamatScalarFieldEnum = (typeof AlamatScalarFieldEnum)[keyof typeof AlamatScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    desc: 'desc',
    harga: 'harga',
    stock: 'stock',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PesananScalarFieldEnum: {
    id: 'id',
    tanggalPesanan: 'tanggalPesanan',
    statusPesanan: 'statusPesanan',
    pembeliId: 'pembeliId'
  };

  export type PesananScalarFieldEnum = (typeof PesananScalarFieldEnum)[keyof typeof PesananScalarFieldEnum]


  export const DetailPesananScalarFieldEnum: {
    id: 'id',
    pesananId: 'pesananId'
  };

  export type DetailPesananScalarFieldEnum = (typeof DetailPesananScalarFieldEnum)[keyof typeof DetailPesananScalarFieldEnum]


  export const PengirimanScalarFieldEnum: {
    id: 'id',
    pesananId: 'pesananId',
    alamatPengiriman: 'alamatPengiriman',
    Tanggal: 'Tanggal'
  };

  export type PengirimanScalarFieldEnum = (typeof PengirimanScalarFieldEnum)[keyof typeof PengirimanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    nama?: StringFilter | string
    username?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    role?: StringFilter | string
    alamat?: AlamatListRelationFilter
    pembelian?: PesananListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    alamat?: AlamatOrderByRelationAggregateInput
    pembelian?: PesananOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
  }

  export type AlamatWhereInput = {
    AND?: Enumerable<AlamatWhereInput>
    OR?: Enumerable<AlamatWhereInput>
    NOT?: Enumerable<AlamatWhereInput>
    id?: IntFilter | number
    alamat?: StringFilter | string
    gedung?: StringFilter | string
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AlamatOrderByWithRelationInput = {
    id?: SortOrder
    alamat?: SortOrder
    gedung?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AlamatWhereUniqueInput = {
    id?: number
  }

  export type AlamatOrderByWithAggregationInput = {
    id?: SortOrder
    alamat?: SortOrder
    gedung?: SortOrder
    userId?: SortOrder
    _count?: AlamatCountOrderByAggregateInput
    _avg?: AlamatAvgOrderByAggregateInput
    _max?: AlamatMaxOrderByAggregateInput
    _min?: AlamatMinOrderByAggregateInput
    _sum?: AlamatSumOrderByAggregateInput
  }

  export type AlamatScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlamatScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlamatScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlamatScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    alamat?: StringWithAggregatesFilter | string
    gedung?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    nama?: StringFilter | string
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama?: StringWithAggregatesFilter | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    nama?: StringFilter | string
    desc?: StringFilter | string
    harga?: IntFilter | number
    stock?: IntFilter | number
    categoryId?: IntFilter | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    detailPes?: DetailPesananListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    desc?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    detailPes?: DetailPesananOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    desc?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama?: StringWithAggregatesFilter | string
    desc?: StringWithAggregatesFilter | string
    harga?: IntWithAggregatesFilter | number
    stock?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
  }

  export type PesananWhereInput = {
    AND?: Enumerable<PesananWhereInput>
    OR?: Enumerable<PesananWhereInput>
    NOT?: Enumerable<PesananWhereInput>
    id?: IntFilter | number
    tanggalPesanan?: DateTimeFilter | Date | string
    statusPesanan?: StringFilter | string
    pembeliId?: IntFilter | number
    DetailPesanan?: DetailPesananListRelationFilter
    pengiriman?: XOR<PengirimanRelationFilter, PengirimanWhereInput> | null
    pembeli?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PesananOrderByWithRelationInput = {
    id?: SortOrder
    tanggalPesanan?: SortOrder
    statusPesanan?: SortOrder
    pembeliId?: SortOrder
    DetailPesanan?: DetailPesananOrderByRelationAggregateInput
    pengiriman?: PengirimanOrderByWithRelationInput
    pembeli?: UserOrderByWithRelationInput
  }

  export type PesananWhereUniqueInput = {
    id?: number
  }

  export type PesananOrderByWithAggregationInput = {
    id?: SortOrder
    tanggalPesanan?: SortOrder
    statusPesanan?: SortOrder
    pembeliId?: SortOrder
    _count?: PesananCountOrderByAggregateInput
    _avg?: PesananAvgOrderByAggregateInput
    _max?: PesananMaxOrderByAggregateInput
    _min?: PesananMinOrderByAggregateInput
    _sum?: PesananSumOrderByAggregateInput
  }

  export type PesananScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PesananScalarWhereWithAggregatesInput>
    OR?: Enumerable<PesananScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PesananScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    tanggalPesanan?: DateTimeWithAggregatesFilter | Date | string
    statusPesanan?: StringWithAggregatesFilter | string
    pembeliId?: IntWithAggregatesFilter | number
  }

  export type DetailPesananWhereInput = {
    AND?: Enumerable<DetailPesananWhereInput>
    OR?: Enumerable<DetailPesananWhereInput>
    NOT?: Enumerable<DetailPesananWhereInput>
    id?: IntFilter | number
    pesananId?: IntFilter | number
    pesanan?: XOR<PesananRelationFilter, PesananWhereInput>
    products?: ProductListRelationFilter
  }

  export type DetailPesananOrderByWithRelationInput = {
    id?: SortOrder
    pesananId?: SortOrder
    pesanan?: PesananOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type DetailPesananWhereUniqueInput = {
    id?: number
  }

  export type DetailPesananOrderByWithAggregationInput = {
    id?: SortOrder
    pesananId?: SortOrder
    _count?: DetailPesananCountOrderByAggregateInput
    _avg?: DetailPesananAvgOrderByAggregateInput
    _max?: DetailPesananMaxOrderByAggregateInput
    _min?: DetailPesananMinOrderByAggregateInput
    _sum?: DetailPesananSumOrderByAggregateInput
  }

  export type DetailPesananScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DetailPesananScalarWhereWithAggregatesInput>
    OR?: Enumerable<DetailPesananScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DetailPesananScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    pesananId?: IntWithAggregatesFilter | number
  }

  export type PengirimanWhereInput = {
    AND?: Enumerable<PengirimanWhereInput>
    OR?: Enumerable<PengirimanWhereInput>
    NOT?: Enumerable<PengirimanWhereInput>
    id?: IntFilter | number
    pesananId?: IntFilter | number
    alamatPengiriman?: StringFilter | string
    Tanggal?: DateTimeFilter | Date | string
    pesanan?: XOR<PesananRelationFilter, PesananWhereInput>
  }

  export type PengirimanOrderByWithRelationInput = {
    id?: SortOrder
    pesananId?: SortOrder
    alamatPengiriman?: SortOrder
    Tanggal?: SortOrder
    pesanan?: PesananOrderByWithRelationInput
  }

  export type PengirimanWhereUniqueInput = {
    pesananId?: number
  }

  export type PengirimanOrderByWithAggregationInput = {
    id?: SortOrder
    pesananId?: SortOrder
    alamatPengiriman?: SortOrder
    Tanggal?: SortOrder
    _count?: PengirimanCountOrderByAggregateInput
    _avg?: PengirimanAvgOrderByAggregateInput
    _max?: PengirimanMaxOrderByAggregateInput
    _min?: PengirimanMinOrderByAggregateInput
    _sum?: PengirimanSumOrderByAggregateInput
  }

  export type PengirimanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PengirimanScalarWhereWithAggregatesInput>
    OR?: Enumerable<PengirimanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PengirimanScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    pesananId?: IntWithAggregatesFilter | number
    alamatPengiriman?: StringWithAggregatesFilter | string
    Tanggal?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    nama: string
    username: string
    email: string
    password: string
    role: string
    alamat?: AlamatCreateNestedManyWithoutUserInput
    pembelian?: PesananCreateNestedManyWithoutPembeliInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nama: string
    username: string
    email: string
    password: string
    role: string
    alamat?: AlamatUncheckedCreateNestedManyWithoutUserInput
    pembelian?: PesananUncheckedCreateNestedManyWithoutPembeliInput
  }

  export type UserUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    alamat?: AlamatUpdateManyWithoutUserNestedInput
    pembelian?: PesananUpdateManyWithoutPembeliNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    alamat?: AlamatUncheckedUpdateManyWithoutUserNestedInput
    pembelian?: PesananUncheckedUpdateManyWithoutPembeliNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nama: string
    username: string
    email: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatCreateInput = {
    alamat: string
    gedung: string
    user: UserCreateNestedOneWithoutAlamatInput
  }

  export type AlamatUncheckedCreateInput = {
    id?: number
    alamat: string
    gedung: string
    userId: number
  }

  export type AlamatUpdateInput = {
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type AlamatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AlamatCreateManyInput = {
    id?: number
    alamat: string
    gedung: string
    userId: number
  }

  export type AlamatUpdateManyMutationInput = {
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    nama: string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    nama: string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    nama: string
  }

  export type CategoryUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    nama: string
    desc: string
    harga: number
    stock: number
    category: CategoryCreateNestedOneWithoutProductInput
    detailPes?: DetailPesananCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    nama: string
    desc: string
    harga: number
    stock: number
    categoryId: number
    detailPes?: DetailPesananUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    detailPes?: DetailPesananUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    detailPes?: DetailPesananUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    nama: string
    desc: string
    harga: number
    stock: number
    categoryId: number
  }

  export type ProductUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PesananCreateInput = {
    tanggalPesanan: Date | string
    statusPesanan: string
    DetailPesanan?: DetailPesananCreateNestedManyWithoutPesananInput
    pengiriman?: PengirimanCreateNestedOneWithoutPesananInput
    pembeli: UserCreateNestedOneWithoutPembelianInput
  }

  export type PesananUncheckedCreateInput = {
    id?: number
    tanggalPesanan: Date | string
    statusPesanan: string
    pembeliId: number
    DetailPesanan?: DetailPesananUncheckedCreateNestedManyWithoutPesananInput
    pengiriman?: PengirimanUncheckedCreateNestedOneWithoutPesananInput
  }

  export type PesananUpdateInput = {
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    DetailPesanan?: DetailPesananUpdateManyWithoutPesananNestedInput
    pengiriman?: PengirimanUpdateOneWithoutPesananNestedInput
    pembeli?: UserUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PesananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    pembeliId?: IntFieldUpdateOperationsInput | number
    DetailPesanan?: DetailPesananUncheckedUpdateManyWithoutPesananNestedInput
    pengiriman?: PengirimanUncheckedUpdateOneWithoutPesananNestedInput
  }

  export type PesananCreateManyInput = {
    id?: number
    tanggalPesanan: Date | string
    statusPesanan: string
    pembeliId: number
  }

  export type PesananUpdateManyMutationInput = {
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
  }

  export type PesananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    pembeliId?: IntFieldUpdateOperationsInput | number
  }

  export type DetailPesananCreateInput = {
    pesanan: PesananCreateNestedOneWithoutDetailPesananInput
    products?: ProductCreateNestedManyWithoutDetailPesInput
  }

  export type DetailPesananUncheckedCreateInput = {
    id?: number
    pesananId: number
    products?: ProductUncheckedCreateNestedManyWithoutDetailPesInput
  }

  export type DetailPesananUpdateInput = {
    pesanan?: PesananUpdateOneRequiredWithoutDetailPesananNestedInput
    products?: ProductUpdateManyWithoutDetailPesNestedInput
  }

  export type DetailPesananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesananId?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutDetailPesNestedInput
  }

  export type DetailPesananCreateManyInput = {
    id?: number
    pesananId: number
  }

  export type DetailPesananUpdateManyMutationInput = {

  }

  export type DetailPesananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesananId?: IntFieldUpdateOperationsInput | number
  }

  export type PengirimanCreateInput = {
    id: number
    alamatPengiriman: string
    Tanggal: Date | string
    pesanan: PesananCreateNestedOneWithoutPengirimanInput
  }

  export type PengirimanUncheckedCreateInput = {
    id: number
    pesananId: number
    alamatPengiriman: string
    Tanggal: Date | string
  }

  export type PengirimanUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamatPengiriman?: StringFieldUpdateOperationsInput | string
    Tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    pesanan?: PesananUpdateOneRequiredWithoutPengirimanNestedInput
  }

  export type PengirimanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesananId?: IntFieldUpdateOperationsInput | number
    alamatPengiriman?: StringFieldUpdateOperationsInput | string
    Tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengirimanCreateManyInput = {
    id: number
    pesananId: number
    alamatPengiriman: string
    Tanggal: Date | string
  }

  export type PengirimanUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamatPengiriman?: StringFieldUpdateOperationsInput | string
    Tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengirimanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesananId?: IntFieldUpdateOperationsInput | number
    alamatPengiriman?: StringFieldUpdateOperationsInput | string
    Tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type AlamatListRelationFilter = {
    every?: AlamatWhereInput
    some?: AlamatWhereInput
    none?: AlamatWhereInput
  }

  export type PesananListRelationFilter = {
    every?: PesananWhereInput
    some?: PesananWhereInput
    none?: PesananWhereInput
  }

  export type AlamatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AlamatCountOrderByAggregateInput = {
    id?: SortOrder
    alamat?: SortOrder
    gedung?: SortOrder
    userId?: SortOrder
  }

  export type AlamatAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AlamatMaxOrderByAggregateInput = {
    id?: SortOrder
    alamat?: SortOrder
    gedung?: SortOrder
    userId?: SortOrder
  }

  export type AlamatMinOrderByAggregateInput = {
    id?: SortOrder
    alamat?: SortOrder
    gedung?: SortOrder
    userId?: SortOrder
  }

  export type AlamatSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type DetailPesananListRelationFilter = {
    every?: DetailPesananWhereInput
    some?: DetailPesananWhereInput
    none?: DetailPesananWhereInput
  }

  export type DetailPesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    desc?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    desc?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    desc?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PengirimanRelationFilter = {
    is?: PengirimanWhereInput | null
    isNot?: PengirimanWhereInput | null
  }

  export type PesananCountOrderByAggregateInput = {
    id?: SortOrder
    tanggalPesanan?: SortOrder
    statusPesanan?: SortOrder
    pembeliId?: SortOrder
  }

  export type PesananAvgOrderByAggregateInput = {
    id?: SortOrder
    pembeliId?: SortOrder
  }

  export type PesananMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggalPesanan?: SortOrder
    statusPesanan?: SortOrder
    pembeliId?: SortOrder
  }

  export type PesananMinOrderByAggregateInput = {
    id?: SortOrder
    tanggalPesanan?: SortOrder
    statusPesanan?: SortOrder
    pembeliId?: SortOrder
  }

  export type PesananSumOrderByAggregateInput = {
    id?: SortOrder
    pembeliId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PesananRelationFilter = {
    is?: PesananWhereInput | null
    isNot?: PesananWhereInput | null
  }

  export type DetailPesananCountOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type DetailPesananAvgOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type DetailPesananMaxOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type DetailPesananMinOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type DetailPesananSumOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type PengirimanCountOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
    alamatPengiriman?: SortOrder
    Tanggal?: SortOrder
  }

  export type PengirimanAvgOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type PengirimanMaxOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
    alamatPengiriman?: SortOrder
    Tanggal?: SortOrder
  }

  export type PengirimanMinOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
    alamatPengiriman?: SortOrder
    Tanggal?: SortOrder
  }

  export type PengirimanSumOrderByAggregateInput = {
    id?: SortOrder
    pesananId?: SortOrder
  }

  export type AlamatCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AlamatCreateWithoutUserInput>, Enumerable<AlamatUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AlamatCreateOrConnectWithoutUserInput>
    createMany?: AlamatCreateManyUserInputEnvelope
    connect?: Enumerable<AlamatWhereUniqueInput>
  }

  export type PesananCreateNestedManyWithoutPembeliInput = {
    create?: XOR<Enumerable<PesananCreateWithoutPembeliInput>, Enumerable<PesananUncheckedCreateWithoutPembeliInput>>
    connectOrCreate?: Enumerable<PesananCreateOrConnectWithoutPembeliInput>
    createMany?: PesananCreateManyPembeliInputEnvelope
    connect?: Enumerable<PesananWhereUniqueInput>
  }

  export type AlamatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AlamatCreateWithoutUserInput>, Enumerable<AlamatUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AlamatCreateOrConnectWithoutUserInput>
    createMany?: AlamatCreateManyUserInputEnvelope
    connect?: Enumerable<AlamatWhereUniqueInput>
  }

  export type PesananUncheckedCreateNestedManyWithoutPembeliInput = {
    create?: XOR<Enumerable<PesananCreateWithoutPembeliInput>, Enumerable<PesananUncheckedCreateWithoutPembeliInput>>
    connectOrCreate?: Enumerable<PesananCreateOrConnectWithoutPembeliInput>
    createMany?: PesananCreateManyPembeliInputEnvelope
    connect?: Enumerable<PesananWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AlamatUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AlamatCreateWithoutUserInput>, Enumerable<AlamatUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AlamatCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AlamatUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AlamatCreateManyUserInputEnvelope
    set?: Enumerable<AlamatWhereUniqueInput>
    disconnect?: Enumerable<AlamatWhereUniqueInput>
    delete?: Enumerable<AlamatWhereUniqueInput>
    connect?: Enumerable<AlamatWhereUniqueInput>
    update?: Enumerable<AlamatUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AlamatUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AlamatScalarWhereInput>
  }

  export type PesananUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<Enumerable<PesananCreateWithoutPembeliInput>, Enumerable<PesananUncheckedCreateWithoutPembeliInput>>
    connectOrCreate?: Enumerable<PesananCreateOrConnectWithoutPembeliInput>
    upsert?: Enumerable<PesananUpsertWithWhereUniqueWithoutPembeliInput>
    createMany?: PesananCreateManyPembeliInputEnvelope
    set?: Enumerable<PesananWhereUniqueInput>
    disconnect?: Enumerable<PesananWhereUniqueInput>
    delete?: Enumerable<PesananWhereUniqueInput>
    connect?: Enumerable<PesananWhereUniqueInput>
    update?: Enumerable<PesananUpdateWithWhereUniqueWithoutPembeliInput>
    updateMany?: Enumerable<PesananUpdateManyWithWhereWithoutPembeliInput>
    deleteMany?: Enumerable<PesananScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlamatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AlamatCreateWithoutUserInput>, Enumerable<AlamatUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AlamatCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AlamatUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AlamatCreateManyUserInputEnvelope
    set?: Enumerable<AlamatWhereUniqueInput>
    disconnect?: Enumerable<AlamatWhereUniqueInput>
    delete?: Enumerable<AlamatWhereUniqueInput>
    connect?: Enumerable<AlamatWhereUniqueInput>
    update?: Enumerable<AlamatUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AlamatUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AlamatScalarWhereInput>
  }

  export type PesananUncheckedUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<Enumerable<PesananCreateWithoutPembeliInput>, Enumerable<PesananUncheckedCreateWithoutPembeliInput>>
    connectOrCreate?: Enumerable<PesananCreateOrConnectWithoutPembeliInput>
    upsert?: Enumerable<PesananUpsertWithWhereUniqueWithoutPembeliInput>
    createMany?: PesananCreateManyPembeliInputEnvelope
    set?: Enumerable<PesananWhereUniqueInput>
    disconnect?: Enumerable<PesananWhereUniqueInput>
    delete?: Enumerable<PesananWhereUniqueInput>
    connect?: Enumerable<PesananWhereUniqueInput>
    update?: Enumerable<PesananUpdateWithWhereUniqueWithoutPembeliInput>
    updateMany?: Enumerable<PesananUpdateManyWithWhereWithoutPembeliInput>
    deleteMany?: Enumerable<PesananScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAlamatInput = {
    create?: XOR<UserCreateWithoutAlamatInput, UserUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlamatInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<UserCreateWithoutAlamatInput, UserUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlamatInput
    upsert?: UserUpsertWithoutAlamatInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAlamatInput, UserUncheckedUpdateWithoutAlamatInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type DetailPesananCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutProductsInput>, Enumerable<DetailPesananUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutProductsInput>
    connect?: Enumerable<DetailPesananWhereUniqueInput>
  }

  export type DetailPesananUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutProductsInput>, Enumerable<DetailPesananUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutProductsInput>
    connect?: Enumerable<DetailPesananWhereUniqueInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type DetailPesananUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutProductsInput>, Enumerable<DetailPesananUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<DetailPesananUpsertWithWhereUniqueWithoutProductsInput>
    set?: Enumerable<DetailPesananWhereUniqueInput>
    disconnect?: Enumerable<DetailPesananWhereUniqueInput>
    delete?: Enumerable<DetailPesananWhereUniqueInput>
    connect?: Enumerable<DetailPesananWhereUniqueInput>
    update?: Enumerable<DetailPesananUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<DetailPesananUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<DetailPesananScalarWhereInput>
  }

  export type DetailPesananUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutProductsInput>, Enumerable<DetailPesananUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<DetailPesananUpsertWithWhereUniqueWithoutProductsInput>
    set?: Enumerable<DetailPesananWhereUniqueInput>
    disconnect?: Enumerable<DetailPesananWhereUniqueInput>
    delete?: Enumerable<DetailPesananWhereUniqueInput>
    connect?: Enumerable<DetailPesananWhereUniqueInput>
    update?: Enumerable<DetailPesananUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<DetailPesananUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<DetailPesananScalarWhereInput>
  }

  export type DetailPesananCreateNestedManyWithoutPesananInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutPesananInput>, Enumerable<DetailPesananUncheckedCreateWithoutPesananInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutPesananInput>
    createMany?: DetailPesananCreateManyPesananInputEnvelope
    connect?: Enumerable<DetailPesananWhereUniqueInput>
  }

  export type PengirimanCreateNestedOneWithoutPesananInput = {
    create?: XOR<PengirimanCreateWithoutPesananInput, PengirimanUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PengirimanCreateOrConnectWithoutPesananInput
    connect?: PengirimanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPembelianInput = {
    create?: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: UserCreateOrConnectWithoutPembelianInput
    connect?: UserWhereUniqueInput
  }

  export type DetailPesananUncheckedCreateNestedManyWithoutPesananInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutPesananInput>, Enumerable<DetailPesananUncheckedCreateWithoutPesananInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutPesananInput>
    createMany?: DetailPesananCreateManyPesananInputEnvelope
    connect?: Enumerable<DetailPesananWhereUniqueInput>
  }

  export type PengirimanUncheckedCreateNestedOneWithoutPesananInput = {
    create?: XOR<PengirimanCreateWithoutPesananInput, PengirimanUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PengirimanCreateOrConnectWithoutPesananInput
    connect?: PengirimanWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DetailPesananUpdateManyWithoutPesananNestedInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutPesananInput>, Enumerable<DetailPesananUncheckedCreateWithoutPesananInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutPesananInput>
    upsert?: Enumerable<DetailPesananUpsertWithWhereUniqueWithoutPesananInput>
    createMany?: DetailPesananCreateManyPesananInputEnvelope
    set?: Enumerable<DetailPesananWhereUniqueInput>
    disconnect?: Enumerable<DetailPesananWhereUniqueInput>
    delete?: Enumerable<DetailPesananWhereUniqueInput>
    connect?: Enumerable<DetailPesananWhereUniqueInput>
    update?: Enumerable<DetailPesananUpdateWithWhereUniqueWithoutPesananInput>
    updateMany?: Enumerable<DetailPesananUpdateManyWithWhereWithoutPesananInput>
    deleteMany?: Enumerable<DetailPesananScalarWhereInput>
  }

  export type PengirimanUpdateOneWithoutPesananNestedInput = {
    create?: XOR<PengirimanCreateWithoutPesananInput, PengirimanUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PengirimanCreateOrConnectWithoutPesananInput
    upsert?: PengirimanUpsertWithoutPesananInput
    disconnect?: boolean
    delete?: boolean
    connect?: PengirimanWhereUniqueInput
    update?: XOR<PengirimanUpdateWithoutPesananInput, PengirimanUncheckedUpdateWithoutPesananInput>
  }

  export type UserUpdateOneRequiredWithoutPembelianNestedInput = {
    create?: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: UserCreateOrConnectWithoutPembelianInput
    upsert?: UserUpsertWithoutPembelianInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPembelianInput, UserUncheckedUpdateWithoutPembelianInput>
  }

  export type DetailPesananUncheckedUpdateManyWithoutPesananNestedInput = {
    create?: XOR<Enumerable<DetailPesananCreateWithoutPesananInput>, Enumerable<DetailPesananUncheckedCreateWithoutPesananInput>>
    connectOrCreate?: Enumerable<DetailPesananCreateOrConnectWithoutPesananInput>
    upsert?: Enumerable<DetailPesananUpsertWithWhereUniqueWithoutPesananInput>
    createMany?: DetailPesananCreateManyPesananInputEnvelope
    set?: Enumerable<DetailPesananWhereUniqueInput>
    disconnect?: Enumerable<DetailPesananWhereUniqueInput>
    delete?: Enumerable<DetailPesananWhereUniqueInput>
    connect?: Enumerable<DetailPesananWhereUniqueInput>
    update?: Enumerable<DetailPesananUpdateWithWhereUniqueWithoutPesananInput>
    updateMany?: Enumerable<DetailPesananUpdateManyWithWhereWithoutPesananInput>
    deleteMany?: Enumerable<DetailPesananScalarWhereInput>
  }

  export type PengirimanUncheckedUpdateOneWithoutPesananNestedInput = {
    create?: XOR<PengirimanCreateWithoutPesananInput, PengirimanUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PengirimanCreateOrConnectWithoutPesananInput
    upsert?: PengirimanUpsertWithoutPesananInput
    disconnect?: boolean
    delete?: boolean
    connect?: PengirimanWhereUniqueInput
    update?: XOR<PengirimanUpdateWithoutPesananInput, PengirimanUncheckedUpdateWithoutPesananInput>
  }

  export type PesananCreateNestedOneWithoutDetailPesananInput = {
    create?: XOR<PesananCreateWithoutDetailPesananInput, PesananUncheckedCreateWithoutDetailPesananInput>
    connectOrCreate?: PesananCreateOrConnectWithoutDetailPesananInput
    connect?: PesananWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutDetailPesInput = {
    create?: XOR<Enumerable<ProductCreateWithoutDetailPesInput>, Enumerable<ProductUncheckedCreateWithoutDetailPesInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutDetailPesInput>
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutDetailPesInput = {
    create?: XOR<Enumerable<ProductCreateWithoutDetailPesInput>, Enumerable<ProductUncheckedCreateWithoutDetailPesInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutDetailPesInput>
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type PesananUpdateOneRequiredWithoutDetailPesananNestedInput = {
    create?: XOR<PesananCreateWithoutDetailPesananInput, PesananUncheckedCreateWithoutDetailPesananInput>
    connectOrCreate?: PesananCreateOrConnectWithoutDetailPesananInput
    upsert?: PesananUpsertWithoutDetailPesananInput
    connect?: PesananWhereUniqueInput
    update?: XOR<PesananUpdateWithoutDetailPesananInput, PesananUncheckedUpdateWithoutDetailPesananInput>
  }

  export type ProductUpdateManyWithoutDetailPesNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutDetailPesInput>, Enumerable<ProductUncheckedCreateWithoutDetailPesInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutDetailPesInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutDetailPesInput>
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutDetailPesInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutDetailPesInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutDetailPesNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutDetailPesInput>, Enumerable<ProductUncheckedCreateWithoutDetailPesInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutDetailPesInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutDetailPesInput>
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutDetailPesInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutDetailPesInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type PesananCreateNestedOneWithoutPengirimanInput = {
    create?: XOR<PesananCreateWithoutPengirimanInput, PesananUncheckedCreateWithoutPengirimanInput>
    connectOrCreate?: PesananCreateOrConnectWithoutPengirimanInput
    connect?: PesananWhereUniqueInput
  }

  export type PesananUpdateOneRequiredWithoutPengirimanNestedInput = {
    create?: XOR<PesananCreateWithoutPengirimanInput, PesananUncheckedCreateWithoutPengirimanInput>
    connectOrCreate?: PesananCreateOrConnectWithoutPengirimanInput
    upsert?: PesananUpsertWithoutPengirimanInput
    connect?: PesananWhereUniqueInput
    update?: XOR<PesananUpdateWithoutPengirimanInput, PesananUncheckedUpdateWithoutPengirimanInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AlamatCreateWithoutUserInput = {
    alamat: string
    gedung: string
  }

  export type AlamatUncheckedCreateWithoutUserInput = {
    id?: number
    alamat: string
    gedung: string
  }

  export type AlamatCreateOrConnectWithoutUserInput = {
    where: AlamatWhereUniqueInput
    create: XOR<AlamatCreateWithoutUserInput, AlamatUncheckedCreateWithoutUserInput>
  }

  export type AlamatCreateManyUserInputEnvelope = {
    data: Enumerable<AlamatCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PesananCreateWithoutPembeliInput = {
    tanggalPesanan: Date | string
    statusPesanan: string
    DetailPesanan?: DetailPesananCreateNestedManyWithoutPesananInput
    pengiriman?: PengirimanCreateNestedOneWithoutPesananInput
  }

  export type PesananUncheckedCreateWithoutPembeliInput = {
    id?: number
    tanggalPesanan: Date | string
    statusPesanan: string
    DetailPesanan?: DetailPesananUncheckedCreateNestedManyWithoutPesananInput
    pengiriman?: PengirimanUncheckedCreateNestedOneWithoutPesananInput
  }

  export type PesananCreateOrConnectWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput>
  }

  export type PesananCreateManyPembeliInputEnvelope = {
    data: Enumerable<PesananCreateManyPembeliInput>
    skipDuplicates?: boolean
  }

  export type AlamatUpsertWithWhereUniqueWithoutUserInput = {
    where: AlamatWhereUniqueInput
    update: XOR<AlamatUpdateWithoutUserInput, AlamatUncheckedUpdateWithoutUserInput>
    create: XOR<AlamatCreateWithoutUserInput, AlamatUncheckedCreateWithoutUserInput>
  }

  export type AlamatUpdateWithWhereUniqueWithoutUserInput = {
    where: AlamatWhereUniqueInput
    data: XOR<AlamatUpdateWithoutUserInput, AlamatUncheckedUpdateWithoutUserInput>
  }

  export type AlamatUpdateManyWithWhereWithoutUserInput = {
    where: AlamatScalarWhereInput
    data: XOR<AlamatUpdateManyMutationInput, AlamatUncheckedUpdateManyWithoutAlamatInput>
  }

  export type AlamatScalarWhereInput = {
    AND?: Enumerable<AlamatScalarWhereInput>
    OR?: Enumerable<AlamatScalarWhereInput>
    NOT?: Enumerable<AlamatScalarWhereInput>
    id?: IntFilter | number
    alamat?: StringFilter | string
    gedung?: StringFilter | string
    userId?: IntFilter | number
  }

  export type PesananUpsertWithWhereUniqueWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    update: XOR<PesananUpdateWithoutPembeliInput, PesananUncheckedUpdateWithoutPembeliInput>
    create: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput>
  }

  export type PesananUpdateWithWhereUniqueWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    data: XOR<PesananUpdateWithoutPembeliInput, PesananUncheckedUpdateWithoutPembeliInput>
  }

  export type PesananUpdateManyWithWhereWithoutPembeliInput = {
    where: PesananScalarWhereInput
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyWithoutPembelianInput>
  }

  export type PesananScalarWhereInput = {
    AND?: Enumerable<PesananScalarWhereInput>
    OR?: Enumerable<PesananScalarWhereInput>
    NOT?: Enumerable<PesananScalarWhereInput>
    id?: IntFilter | number
    tanggalPesanan?: DateTimeFilter | Date | string
    statusPesanan?: StringFilter | string
    pembeliId?: IntFilter | number
  }

  export type UserCreateWithoutAlamatInput = {
    nama: string
    username: string
    email: string
    password: string
    role: string
    pembelian?: PesananCreateNestedManyWithoutPembeliInput
  }

  export type UserUncheckedCreateWithoutAlamatInput = {
    id?: number
    nama: string
    username: string
    email: string
    password: string
    role: string
    pembelian?: PesananUncheckedCreateNestedManyWithoutPembeliInput
  }

  export type UserCreateOrConnectWithoutAlamatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlamatInput, UserUncheckedCreateWithoutAlamatInput>
  }

  export type UserUpsertWithoutAlamatInput = {
    update: XOR<UserUpdateWithoutAlamatInput, UserUncheckedUpdateWithoutAlamatInput>
    create: XOR<UserCreateWithoutAlamatInput, UserUncheckedCreateWithoutAlamatInput>
  }

  export type UserUpdateWithoutAlamatInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pembelian?: PesananUpdateManyWithoutPembeliNestedInput
  }

  export type UserUncheckedUpdateWithoutAlamatInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pembelian?: PesananUncheckedUpdateManyWithoutPembeliNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    nama: string
    desc: string
    harga: number
    stock: number
    detailPes?: DetailPesananCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    nama: string
    desc: string
    harga: number
    stock: number
    detailPes?: DetailPesananUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: Enumerable<ProductCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: IntFilter | number
    nama?: StringFilter | string
    desc?: StringFilter | string
    harga?: IntFilter | number
    stock?: IntFilter | number
    categoryId?: IntFilter | number
  }

  export type CategoryCreateWithoutProductInput = {
    nama: string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    nama: string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type DetailPesananCreateWithoutProductsInput = {
    pesanan: PesananCreateNestedOneWithoutDetailPesananInput
  }

  export type DetailPesananUncheckedCreateWithoutProductsInput = {
    id?: number
    pesananId: number
  }

  export type DetailPesananCreateOrConnectWithoutProductsInput = {
    where: DetailPesananWhereUniqueInput
    create: XOR<DetailPesananCreateWithoutProductsInput, DetailPesananUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPesananUpsertWithWhereUniqueWithoutProductsInput = {
    where: DetailPesananWhereUniqueInput
    update: XOR<DetailPesananUpdateWithoutProductsInput, DetailPesananUncheckedUpdateWithoutProductsInput>
    create: XOR<DetailPesananCreateWithoutProductsInput, DetailPesananUncheckedCreateWithoutProductsInput>
  }

  export type DetailPesananUpdateWithWhereUniqueWithoutProductsInput = {
    where: DetailPesananWhereUniqueInput
    data: XOR<DetailPesananUpdateWithoutProductsInput, DetailPesananUncheckedUpdateWithoutProductsInput>
  }

  export type DetailPesananUpdateManyWithWhereWithoutProductsInput = {
    where: DetailPesananScalarWhereInput
    data: XOR<DetailPesananUpdateManyMutationInput, DetailPesananUncheckedUpdateManyWithoutDetailPesInput>
  }

  export type DetailPesananScalarWhereInput = {
    AND?: Enumerable<DetailPesananScalarWhereInput>
    OR?: Enumerable<DetailPesananScalarWhereInput>
    NOT?: Enumerable<DetailPesananScalarWhereInput>
    id?: IntFilter | number
    pesananId?: IntFilter | number
  }

  export type DetailPesananCreateWithoutPesananInput = {
    products?: ProductCreateNestedManyWithoutDetailPesInput
  }

  export type DetailPesananUncheckedCreateWithoutPesananInput = {
    id?: number
    products?: ProductUncheckedCreateNestedManyWithoutDetailPesInput
  }

  export type DetailPesananCreateOrConnectWithoutPesananInput = {
    where: DetailPesananWhereUniqueInput
    create: XOR<DetailPesananCreateWithoutPesananInput, DetailPesananUncheckedCreateWithoutPesananInput>
  }

  export type DetailPesananCreateManyPesananInputEnvelope = {
    data: Enumerable<DetailPesananCreateManyPesananInput>
    skipDuplicates?: boolean
  }

  export type PengirimanCreateWithoutPesananInput = {
    id: number
    alamatPengiriman: string
    Tanggal: Date | string
  }

  export type PengirimanUncheckedCreateWithoutPesananInput = {
    id: number
    alamatPengiriman: string
    Tanggal: Date | string
  }

  export type PengirimanCreateOrConnectWithoutPesananInput = {
    where: PengirimanWhereUniqueInput
    create: XOR<PengirimanCreateWithoutPesananInput, PengirimanUncheckedCreateWithoutPesananInput>
  }

  export type UserCreateWithoutPembelianInput = {
    nama: string
    username: string
    email: string
    password: string
    role: string
    alamat?: AlamatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPembelianInput = {
    id?: number
    nama: string
    username: string
    email: string
    password: string
    role: string
    alamat?: AlamatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPembelianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
  }

  export type DetailPesananUpsertWithWhereUniqueWithoutPesananInput = {
    where: DetailPesananWhereUniqueInput
    update: XOR<DetailPesananUpdateWithoutPesananInput, DetailPesananUncheckedUpdateWithoutPesananInput>
    create: XOR<DetailPesananCreateWithoutPesananInput, DetailPesananUncheckedCreateWithoutPesananInput>
  }

  export type DetailPesananUpdateWithWhereUniqueWithoutPesananInput = {
    where: DetailPesananWhereUniqueInput
    data: XOR<DetailPesananUpdateWithoutPesananInput, DetailPesananUncheckedUpdateWithoutPesananInput>
  }

  export type DetailPesananUpdateManyWithWhereWithoutPesananInput = {
    where: DetailPesananScalarWhereInput
    data: XOR<DetailPesananUpdateManyMutationInput, DetailPesananUncheckedUpdateManyWithoutDetailPesananInput>
  }

  export type PengirimanUpsertWithoutPesananInput = {
    update: XOR<PengirimanUpdateWithoutPesananInput, PengirimanUncheckedUpdateWithoutPesananInput>
    create: XOR<PengirimanCreateWithoutPesananInput, PengirimanUncheckedCreateWithoutPesananInput>
  }

  export type PengirimanUpdateWithoutPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamatPengiriman?: StringFieldUpdateOperationsInput | string
    Tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengirimanUncheckedUpdateWithoutPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamatPengiriman?: StringFieldUpdateOperationsInput | string
    Tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPembelianInput = {
    update: XOR<UserUpdateWithoutPembelianInput, UserUncheckedUpdateWithoutPembelianInput>
    create: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
  }

  export type UserUpdateWithoutPembelianInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    alamat?: AlamatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    alamat?: AlamatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PesananCreateWithoutDetailPesananInput = {
    tanggalPesanan: Date | string
    statusPesanan: string
    pengiriman?: PengirimanCreateNestedOneWithoutPesananInput
    pembeli: UserCreateNestedOneWithoutPembelianInput
  }

  export type PesananUncheckedCreateWithoutDetailPesananInput = {
    id?: number
    tanggalPesanan: Date | string
    statusPesanan: string
    pembeliId: number
    pengiriman?: PengirimanUncheckedCreateNestedOneWithoutPesananInput
  }

  export type PesananCreateOrConnectWithoutDetailPesananInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutDetailPesananInput, PesananUncheckedCreateWithoutDetailPesananInput>
  }

  export type ProductCreateWithoutDetailPesInput = {
    nama: string
    desc: string
    harga: number
    stock: number
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDetailPesInput = {
    id?: number
    nama: string
    desc: string
    harga: number
    stock: number
    categoryId: number
  }

  export type ProductCreateOrConnectWithoutDetailPesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDetailPesInput, ProductUncheckedCreateWithoutDetailPesInput>
  }

  export type PesananUpsertWithoutDetailPesananInput = {
    update: XOR<PesananUpdateWithoutDetailPesananInput, PesananUncheckedUpdateWithoutDetailPesananInput>
    create: XOR<PesananCreateWithoutDetailPesananInput, PesananUncheckedCreateWithoutDetailPesananInput>
  }

  export type PesananUpdateWithoutDetailPesananInput = {
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    pengiriman?: PengirimanUpdateOneWithoutPesananNestedInput
    pembeli?: UserUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PesananUncheckedUpdateWithoutDetailPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    pembeliId?: IntFieldUpdateOperationsInput | number
    pengiriman?: PengirimanUncheckedUpdateOneWithoutPesananNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutDetailPesInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutDetailPesInput, ProductUncheckedUpdateWithoutDetailPesInput>
    create: XOR<ProductCreateWithoutDetailPesInput, ProductUncheckedCreateWithoutDetailPesInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutDetailPesInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutDetailPesInput, ProductUncheckedUpdateWithoutDetailPesInput>
  }

  export type ProductUpdateManyWithWhereWithoutDetailPesInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type PesananCreateWithoutPengirimanInput = {
    tanggalPesanan: Date | string
    statusPesanan: string
    DetailPesanan?: DetailPesananCreateNestedManyWithoutPesananInput
    pembeli: UserCreateNestedOneWithoutPembelianInput
  }

  export type PesananUncheckedCreateWithoutPengirimanInput = {
    id?: number
    tanggalPesanan: Date | string
    statusPesanan: string
    pembeliId: number
    DetailPesanan?: DetailPesananUncheckedCreateNestedManyWithoutPesananInput
  }

  export type PesananCreateOrConnectWithoutPengirimanInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutPengirimanInput, PesananUncheckedCreateWithoutPengirimanInput>
  }

  export type PesananUpsertWithoutPengirimanInput = {
    update: XOR<PesananUpdateWithoutPengirimanInput, PesananUncheckedUpdateWithoutPengirimanInput>
    create: XOR<PesananCreateWithoutPengirimanInput, PesananUncheckedCreateWithoutPengirimanInput>
  }

  export type PesananUpdateWithoutPengirimanInput = {
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    DetailPesanan?: DetailPesananUpdateManyWithoutPesananNestedInput
    pembeli?: UserUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PesananUncheckedUpdateWithoutPengirimanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    pembeliId?: IntFieldUpdateOperationsInput | number
    DetailPesanan?: DetailPesananUncheckedUpdateManyWithoutPesananNestedInput
  }

  export type AlamatCreateManyUserInput = {
    id?: number
    alamat: string
    gedung: string
  }

  export type PesananCreateManyPembeliInput = {
    id?: number
    tanggalPesanan: Date | string
    statusPesanan: string
  }

  export type AlamatUpdateWithoutUserInput = {
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
  }

  export type AlamatUncheckedUpdateManyWithoutAlamatInput = {
    id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    gedung?: StringFieldUpdateOperationsInput | string
  }

  export type PesananUpdateWithoutPembeliInput = {
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    DetailPesanan?: DetailPesananUpdateManyWithoutPesananNestedInput
    pengiriman?: PengirimanUpdateOneWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateWithoutPembeliInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
    DetailPesanan?: DetailPesananUncheckedUpdateManyWithoutPesananNestedInput
    pengiriman?: PengirimanUncheckedUpdateOneWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateManyWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggalPesanan?: DateTimeFieldUpdateOperationsInput | Date | string
    statusPesanan?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    nama: string
    desc: string
    harga: number
    stock: number
  }

  export type ProductUpdateWithoutCategoryInput = {
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    detailPes?: DetailPesananUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    detailPes?: DetailPesananUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type DetailPesananUpdateWithoutProductsInput = {
    pesanan?: PesananUpdateOneRequiredWithoutDetailPesananNestedInput
  }

  export type DetailPesananUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesananId?: IntFieldUpdateOperationsInput | number
  }

  export type DetailPesananUncheckedUpdateManyWithoutDetailPesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesananId?: IntFieldUpdateOperationsInput | number
  }

  export type DetailPesananCreateManyPesananInput = {
    id?: number
  }

  export type DetailPesananUpdateWithoutPesananInput = {
    products?: ProductUpdateManyWithoutDetailPesNestedInput
  }

  export type DetailPesananUncheckedUpdateWithoutPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutDetailPesNestedInput
  }

  export type DetailPesananUncheckedUpdateManyWithoutDetailPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutDetailPesInput = {
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDetailPesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}