-- CreateTable
CREATE TABLE "Publicacion" (
    "id_publicacion" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "multimedia" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Publicacion_pkey" PRIMARY KEY ("id_publicacion")
);

-- AddForeignKey
ALTER TABLE "Publicacion" ADD CONSTRAINT "Publicacion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
