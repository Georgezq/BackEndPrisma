/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Made the column `nombre` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rol` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "nombre" SET NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "rol" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_nombre_key" ON "usuarios"("nombre");
