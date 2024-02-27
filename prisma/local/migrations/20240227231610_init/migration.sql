-- CreateTable
CREATE TABLE "Word" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "japanese" TEXT NOT NULL,
    "portuguese" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToWord" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToWord_AB_unique" ON "_BookToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToWord_B_index" ON "_BookToWord"("B");

-- AddForeignKey
ALTER TABLE "_BookToWord" ADD CONSTRAINT "_BookToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToWord" ADD CONSTRAINT "_BookToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;
