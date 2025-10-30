-- CreateTable
CREATE TABLE "monitors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "tag" TEXT,
    "method" TEXT NOT NULL DEFAULT 'GET',
    "authToken" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "monitors_pkey" PRIMARY KEY ("id")
);
