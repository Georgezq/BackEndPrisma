/*
  Warnings:

  - You are about to drop the column `contenido` on the `Historia` table. All the data in the column will be lost.
  - Added the required column `contenidoTexto` to the `Historia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historia" DROP COLUMN "contenido",
ADD COLUMN     "contenidoMedia" TEXT,
ADD COLUMN     "contenidoTexto" TEXT NOT NULL;
