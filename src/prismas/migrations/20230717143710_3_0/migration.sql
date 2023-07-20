/*
  Warnings:

  - Made the column `userId` on table `address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `address` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
