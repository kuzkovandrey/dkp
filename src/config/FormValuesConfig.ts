import { FormValues } from "../models/formValues";

export const BuyerFormValues: FormValues = {
  title: "Покупатель",
  fields: [
    {
      name: "fullName",
      placeholder: "Ф.И.О.",
      isFullWidth: true,
      isRequired: true,
    },
    {
      name: "address",
      placeholder: "Адрес прописки",
      isFullWidth: true,
      isRequired: true,
    },
    {
      name: "passportSerial",
      placeholder: "Серия паспорта",
      isRequired: true,
    },
    {
      name: "passportNumber",
      placeholder: "Номер паспорта",
      isRequired: true,
    },
  ],
};

export const SalesmanFormValues: FormValues = {
  title: "Продавец",
  fields: [
    {
      name: "fullName",
      placeholder: "Ф.И.О.",
      isFullWidth: true,
    },
    {
      name: "address",
      placeholder: "Адрес прописки",
      isFullWidth: true,
    },
    {
      name: "passportSerial",
      placeholder: "Серия паспорта",
    },
    {
      name: "passportNumber",
      placeholder: "Номер паспорта",
    },
  ],
};
