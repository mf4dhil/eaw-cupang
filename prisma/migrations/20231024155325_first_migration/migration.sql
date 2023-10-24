-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alamat" (
    "id" SERIAL NOT NULL,
    "alamat" TEXT NOT NULL,
    "gedung" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Alamat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pesanan" (
    "id" SERIAL NOT NULL,
    "tanggalPesanan" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statusPesanan" TEXT NOT NULL,
    "pembeliId" INTEGER NOT NULL,

    CONSTRAINT "Pesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailPesanan" (
    "id" SERIAL NOT NULL,
    "pesananId" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,

    CONSTRAINT "DetailPesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengiriman" (
    "id" INTEGER NOT NULL,
    "pesananId" INTEGER NOT NULL,
    "alamatPengiriman" TEXT NOT NULL,
    "Tanggal" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "_DetailPesananToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pengiriman_pesananId_key" ON "Pengiriman"("pesananId");

-- CreateIndex
CREATE UNIQUE INDEX "_DetailPesananToProduct_AB_unique" ON "_DetailPesananToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_DetailPesananToProduct_B_index" ON "_DetailPesananToProduct"("B");

-- AddForeignKey
ALTER TABLE "Alamat" ADD CONSTRAINT "Alamat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pesanan" ADD CONSTRAINT "Pesanan_pembeliId_fkey" FOREIGN KEY ("pembeliId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailPesanan" ADD CONSTRAINT "DetailPesanan_pesananId_fkey" FOREIGN KEY ("pesananId") REFERENCES "Pesanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengiriman" ADD CONSTRAINT "Pengiriman_pesananId_fkey" FOREIGN KEY ("pesananId") REFERENCES "Pesanan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DetailPesananToProduct" ADD CONSTRAINT "_DetailPesananToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "DetailPesanan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DetailPesananToProduct" ADD CONSTRAINT "_DetailPesananToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
