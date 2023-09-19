/*
  Warnings:

  - Added the required column `fechaExpiracion` to the `Historia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Historia" ADD COLUMN     "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fechaExpiracion" TIMESTAMP(3) NOT NULL;
