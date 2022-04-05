-- CreateTable
CREATE TABLE "Label" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "clickCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);
