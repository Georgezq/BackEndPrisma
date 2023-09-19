/*
  Warnings:

  - You are about to drop the column `fechaCreacion` on the `Historia` table. All the data in the column will be lost.
  - You are about to drop the column `fechaExpiracion` on the `Historia` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Historia" DROP COLUMN "fechaCreacion",
DROP COLUMN "fechaExpiracion";
