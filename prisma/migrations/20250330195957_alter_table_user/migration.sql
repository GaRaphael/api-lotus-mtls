/*
  Warnings:

  - You are about to drop the column `profile_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_has_profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "user_has_profile" DROP CONSTRAINT "user_has_profile_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "user_has_profile" DROP CONSTRAINT "user_has_profile_user_id_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "profile_id";

-- DropTable
DROP TABLE "profile";

-- DropTable
DROP TABLE "user_has_profile";
