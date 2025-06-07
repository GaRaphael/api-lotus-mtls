/*
  Warnings:

  - You are about to drop the column `color` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `composition` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `composition` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `pants` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `composition` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `suits` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the column `composition` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `women_suit` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `women_suit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accessories" DROP COLUMN "color",
DROP COLUMN "composition",
DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "model",
DROP COLUMN "price",
DROP COLUMN "size";

-- AlterTable
ALTER TABLE "pants" DROP COLUMN "color",
DROP COLUMN "composition",
DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "model",
DROP COLUMN "price",
DROP COLUMN "size";

-- AlterTable
ALTER TABLE "suits" DROP COLUMN "color",
DROP COLUMN "composition",
DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "model",
DROP COLUMN "price",
DROP COLUMN "size";

-- AlterTable
ALTER TABLE "women_suit" DROP COLUMN "color",
DROP COLUMN "composition",
DROP COLUMN "description",
DROP COLUMN "image",
DROP COLUMN "model",
DROP COLUMN "price",
DROP COLUMN "size";
