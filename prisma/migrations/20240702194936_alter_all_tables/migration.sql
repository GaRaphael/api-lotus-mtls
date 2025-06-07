-- AlterTable
ALTER TABLE "accessories" ADD COLUMN     "product_id" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "pants" ADD COLUMN     "product_id" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "suits" ADD COLUMN     "product_id" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "women_suit" ADD COLUMN     "product_id" SERIAL NOT NULL;

-- AddForeignKey
ALTER TABLE "suits" ADD CONSTRAINT "suits_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pants" ADD CONSTRAINT "pants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "women_suit" ADD CONSTRAINT "women_suit_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accessories" ADD CONSTRAINT "accessories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
