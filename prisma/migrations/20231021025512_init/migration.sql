-- CreateTable
CREATE TABLE "UserCompany" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name_company" TEXT NOT NULL,
    "contact_company" TEXT NOT NULL,
    "cep_company" TEXT NOT NULL,
    "rua_company" TEXT NOT NULL,
    "number_adress" TEXT NOT NULL,
    "name_owner" TEXT NOT NULL,
    "cpf_owner" TEXT NOT NULL,
    "number_owner" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "UserCompany_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCompany_email_key" ON "UserCompany"("email");
