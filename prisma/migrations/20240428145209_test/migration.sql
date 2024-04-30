-- CreateTable
CREATE TABLE "Invoices" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);
