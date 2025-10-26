-- CreateTable
CREATE TABLE "test_users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "data" TEXT,
    "authToken" TEXT,

    CONSTRAINT "test_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "test_users_email_key" ON "test_users"("email");
