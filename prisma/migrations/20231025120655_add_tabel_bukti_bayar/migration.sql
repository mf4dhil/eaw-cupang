-- CreateTable
CREATE TABLE "BuktiBayar" (
    "id" SERIAL NOT NULL,
    "pesananId" INTEGER NOT NULL,
    "img" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BuktiBayar_pesananId_key" ON "BuktiBayar"("pesananId");

-- AddForeignKey
ALTER TABLE "BuktiBayar" ADD CONSTRAINT "BuktiBayar_pesananId_fkey" FOREIGN KEY ("pesananId") REFERENCES "Pesanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
