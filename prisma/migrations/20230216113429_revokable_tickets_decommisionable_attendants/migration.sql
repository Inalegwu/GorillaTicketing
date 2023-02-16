/*
  Warnings:

  - Added the required column `isDecommissioned` to the `Attendant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCompleted` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRevoked` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendant" ADD COLUMN     "isDecommissioned" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "isCompleted" BOOLEAN NOT NULL,
ADD COLUMN     "isRevoked" BOOLEAN NOT NULL;
