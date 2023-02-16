/*
  Warnings:

  - Changed the type of `expiry` on the `Ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "expiry",
ADD COLUMN     "expiry" INTEGER NOT NULL;
