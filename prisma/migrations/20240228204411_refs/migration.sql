-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "accountRef" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subsiteRef" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "accountRef" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subsiteRef" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "subsiteRef" TEXT NOT NULL DEFAULT '';
