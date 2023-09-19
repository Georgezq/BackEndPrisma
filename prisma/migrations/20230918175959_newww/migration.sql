/*
  Warnings:

  - Added the required column `img` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "img" VARCHAR(400) NOT NULL;
