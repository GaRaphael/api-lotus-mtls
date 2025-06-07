-- AlterTable
ALTER TABLE "accessories" ALTER COLUMN "product_id" SET DEFAULT 0,
ALTER COLUMN "product_id" DROP DEFAULT;
DROP SEQUENCE "accessories_product_id_seq";

-- AlterTable
ALTER TABLE "pants" ALTER COLUMN "product_id" SET DEFAULT 0,
ALTER COLUMN "product_id" DROP DEFAULT;
DROP SEQUENCE "pants_product_id_seq";

-- AlterTable
ALTER TABLE "suits" ALTER COLUMN "product_id" SET DEFAULT 0,
ALTER COLUMN "product_id" DROP DEFAULT;
DROP SEQUENCE "suits_product_id_seq";

-- AlterTable
ALTER TABLE "women_suit" ALTER COLUMN "product_id" SET DEFAULT 0,
ALTER COLUMN "product_id" DROP DEFAULT;
DROP SEQUENCE "women_suit_product_id_seq";
