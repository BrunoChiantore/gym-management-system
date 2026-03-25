-- AlterTable
ALTER TABLE "Socio" ADD COLUMN     "planId" INTEGER;

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "duracionMeses" INTEGER NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Socio" ADD CONSTRAINT "Socio_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
