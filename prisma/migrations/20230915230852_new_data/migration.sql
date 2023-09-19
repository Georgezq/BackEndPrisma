/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "usuarios";

-- CreateTable
CREATE TABLE "Usuario" (
    "id_user" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "rol" CHAR(2) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Historia" (
    "id_historia" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Historia_pkey" PRIMARY KEY ("id_historia")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_key" ON "Usuario"("nombre");

-- AddForeignKey
ALTER TABLE "Historia" ADD CONSTRAINT "Historia_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
