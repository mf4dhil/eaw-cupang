-- AlterTable
CREATE SEQUENCE pengiriman_id_seq;
ALTER TABLE "Pengiriman" ALTER COLUMN "id" SET DEFAULT nextval('pengiriman_id_seq');
ALTER SEQUENCE pengiriman_id_seq OWNED BY "Pengiriman"."id";
