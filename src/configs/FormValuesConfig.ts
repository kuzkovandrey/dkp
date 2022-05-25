import { PdfFields } from "@values/pdfFields";
import { Form } from "@types";

const Details: Form = {
  title: "Другое",
  fields: [
    {
      name: PdfFields.PAYMENT_PERIOD,
      placeholder: "Сроки оплаты",
    },
    {
      name: PdfFields.PAYMENT_FORM,
      placeholder: "Форма оплаты",
    },
    {
      name: PdfFields.DETAILS,
      placeholder: "Иные условия договора",
    },
  ],
};

const Header: Form = {
  title: "Дата и место",
  fields: [
    {
      name: PdfFields.CITY,
      placeholder: "Город",
    },
    {
      name: PdfFields.DAY,
      placeholder: "День",
    },
    {
      name: PdfFields.MONTH,
      placeholder: "Месяц",
    },
    {
      name: PdfFields.YEAR,
      placeholder: "Год (например - 22)",
    },
  ],
};

const Buyer: Form = {
  title: "Покупатель",
  fields: [
    {
      name: PdfFields.BUYER_NAME,
      placeholder: "Ф.И.О.",
    },
    {
      name: PdfFields.BUYER_ADDRESS,
      placeholder: "Адрес прописки",
    },
    {
      name: PdfFields.BUYER_PASSPORT,
      placeholder: "Серия, номер паспорта, кем выдан",
    },
  ],
};

const Salesman: Form = {
  title: "Продавец",
  fields: [
    {
      name: PdfFields.SALESMAN_NAME,
      placeholder: "Ф.И.О.",
    },
    {
      name: PdfFields.SALESMAN_ADDRESS,
      placeholder: "Адрес прописки",
    },
    {
      name: PdfFields.SALESMAN_PASSPORT,
      placeholder: "Серия, номер паспорта, кем выдан",
    },
  ],
};

const Transport: Form = {
  title: "Транспортное средство",
  fields: [
    {
      name: PdfFields.CAR_NAME,
      placeholder: "Вид транспортного средства (автомобиль, прицеп, мотоцикл)",
    },
    {
      name: PdfFields.CAR_MODEL,
      placeholder: "Модель",
    },
    {
      name: PdfFields.CAR_YEAR,
      placeholder: "Год выпуска",
    },
    {
      name: PdfFields.CAR_STATE_NUMBER,
      placeholder: "Регистрационный знак",
    },
    {
      name: PdfFields.CAR_BODY_NUMBER,
      placeholder: "Номер кузова, рамы, шасси",
    },
    {
      name: PdfFields.CERTIFICATE_SERIAL,
      placeholder: "Серия свидетельства",
    },
    {
      name: PdfFields.CERTIFICATE_NUMBER,
      placeholder: "Номер свидетельства",
    },
    {
      name: PdfFields.CERTIFICATE_ISSUES_BY,
      placeholder: "Кем выдано (наименование РЭП ГАИ)",
    },
    {
      name: PdfFields.CERTIFICATE_ISSUES_DATE,
      placeholder: "Дата выдачи",
    },
    {
      name: PdfFields.CAR_COST_NUMBER,
      placeholder: "Стоимоть цифрами",
    },
    {
      name: PdfFields.CAR_COST_TEXT,
      placeholder: "Стоимоть прописью",
    },
  ],
};

export const FormValues: Form[] = [Header, Buyer, Salesman, Transport, Details];
