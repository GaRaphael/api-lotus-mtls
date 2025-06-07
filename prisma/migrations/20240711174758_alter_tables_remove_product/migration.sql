/*
  Warnings:

  - You are about to drop the column `product_id` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `data_dash` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accessories" DROP CONSTRAINT "accessories_product_id_fkey";

-- DropForeignKey
ALTER TABLE "data_dash" DROP CONSTRAINT "data_dash_product_id_fkey";

-- DropForeignKey
ALTER TABLE "pants" DROP CONSTRAINT "pants_product_id_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_product_id_fkey";

-- DropForeignKey
ALTER TABLE "suits" DROP CONSTRAINT "suits_product_id_fkey";

-- DropForeignKey
ALTER TABLE "women_suit" DROP CONSTRAINT "women_suit_product_id_fkey";

-- AlterTable
ALTER TABLE "accessories" DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "data_dash" DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "pants" DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "suits" DROP COLUMN "product_id";

-- AlterTable
ALTER TABLE "women_suit" DROP COLUMN "product_id";

-- DropTable
DROP TABLE "product";
