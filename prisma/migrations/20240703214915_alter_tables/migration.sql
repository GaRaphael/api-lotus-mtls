/*
  Warnings:

  - Added the required column `color` to the `accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `accessories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `pants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `pants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `pants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `pants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `suits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `suits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `suits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `suits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `women_suit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `women_suit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `women_suit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `women_suit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accessories" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "composition" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pants" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "composition" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "suits" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "composition" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "women_suit" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "composition" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
