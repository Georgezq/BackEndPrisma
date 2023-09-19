/*
  Warnings:

  - You are about to drop the column `img` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `foto` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "img",
ADD COLUMN     "foto" VARCHAR(400) NOT NULL;
