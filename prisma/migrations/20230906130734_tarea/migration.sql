-- CreateTable
CREATE TABLE "tareas" (
    "id_model" SERIAL NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "contenido" VARCHAR(100) NOT NULL,
    "fechaIni" VARCHAR(100) NOT NULL,
    "fechaFin" VARCHAR(100) NOT NULL,
    "asignado" VARCHAR(100) NOT NULL,
    "estado" BOOLEAN NOT NULL,

    CONSTRAINT "tareas_pkey" PRIMARY KEY ("id_model")
);

-- CreateIndex
CREATE UNIQUE INDEX "tareas_titulo_key" ON "tareas"("titulo");
