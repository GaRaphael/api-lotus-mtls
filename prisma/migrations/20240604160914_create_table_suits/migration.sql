-- CreateTable
CREATE TABLE "suits" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "model" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    CONSTRAINT "suits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_has_suits" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "suits_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    CONSTRAINT "user_has_suits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_has_suits" ADD CONSTRAINT "user_has_suits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_has_suits" ADD CONSTRAINT "user_has_suits_suits_id_fkey" FOREIGN KEY ("suits_id") REFERENCES "suits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
