-- CreateTable
CREATE TABLE "usuarios" (
    "id_user" SERIAL NOT NULL,
    "nombre" VARCHAR(50),
    "password" VARCHAR(25),
    "rol" CHAR(2),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_user")
);
