/*
  Warnings:

  - You are about to drop the column `año` on the `moto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[placa]` on the table `Moto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `placa` to the `Moto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Cliente_email_key` ON `cliente`;

-- AlterTable
ALTER TABLE `moto` DROP COLUMN `año`,
    ADD COLUMN `placa` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `servicio` MODIFY `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Moto_placa_key` ON `Moto`(`placa`);
