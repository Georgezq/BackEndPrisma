/*
  Warnings:

  - Made the column `contenidoMedia` on table `Historia` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Historia" ALTER COLUMN "contenidoMedia" SET NOT NULL;

-- CreateTable
CREATE TABLE "Comentario" (
    "id_comentario" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "reaccion" TEXT NOT NULL,
    "id_historia" INTEGER NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id_comentario")
);

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_historia_fkey" FOREIGN KEY ("id_historia") REFERENCES "Historia"("id_historia") ON DELETE RESTRICT ON UPDATE CASCADE;
