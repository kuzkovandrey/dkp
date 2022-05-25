import { PdfFields } from "@values/pdfFields";
import { Form } from "@types";

const Details: Form = {
  title: "Другое",
  fields: [
    {
      name: PdfFields.PAYMENT_PERIOD,
      label: "Сроки оплаты",
      placeholder: "до 20.06.2022",
    },
    {
      name: PdfFields.PAYMENT_FORM,
      label: "Форма оплаты",
      placeholder: "Наличные",
    },
    {
      name: PdfFields.DETAILS,
      label: "Иные условия",
      placeholder: "Передать деньги после 19.00 по адресу...",
    },
  ],
};

const Header: Form = {
  title: "Дата и место",
  fields: [
    {
      name: PdfFields.CITY,
      label: "Город",
      placeholder: "Минск",
    },
    {
      name: PdfFields.DAY,
      label: "День",
      placeholder: "20",
    },
    {
      name: PdfFields.MONTH,
      label: "Месяц",
      placeholder: "Июнь",
    },
    {
      name: PdfFields.YEAR,
      label: "Год",
      placeholder: "22",
    },
  ],
};

const Buyer: Form = {
  title: "Покупатель",
  fields: [
    {
      name: PdfFields.BUYER_NAME,
      label: "Ф.И.О.",
      placeholder: "Иванов Александр Дмитриевич",
    },
    {
      name: PdfFields.BUYER_ADDRESS,
      label: "Адрес проживания",
      placeholder: "Минская обл., Минский р-н., п. Иванова, д. 31, кв. 34",
    },
    {
      name: PdfFields.BUYER_PASSPORT,
      label: "Паспортные данные",
      placeholder: "Серия, номер паспорта, кем и когда выдан",
    },
  ],
};

const Salesman: Form = {
  title: "Продавец",
  fields: [
    {
      name: PdfFields.SALESMAN_NAME,
      label: "Ф.И.О.",
      placeholder: "Петров Андрей Александрович",
    },
    {
      name: PdfFields.SALESMAN_ADDRESS,
      label: "Адрес проживания",
      placeholder:
        "Могилевская обл., Могилевский р-н., д. Иванова, д. 33, кв. 33",
    },
    {
      name: PdfFields.SALESMAN_PASSPORT,
      label: "Паспортные данные",
      placeholder: "Серия, номер паспорта, кем и когда выдан",
    },
  ],
};

const Transport: Form = {
  title: "Транспортное средство",
  fields: [
    {
      name: PdfFields.CAR_NAME,
      label: "Вид транспортного средства",
      placeholder: "Автомобиль, прицеп, мотоцикл",
    },
    {
      name: PdfFields.CAR_MODEL,
      label: "Модель",
      placeholder: "Peugeot 406",
    },
    {
      name: PdfFields.CAR_YEAR,
      label: "Год выпуска",
      placeholder: "1995",
    },
    {
      name: PdfFields.CAR_STATE_NUMBER,
      label: "Регистрационный знак",
      placeholder: "7575 KA-7",
    },
    {
      name: PdfFields.CAR_BODY_NUMBER,
      label: "Номер кузова (рамы, шасси)",
      placeholder: "HF346464300000AB23532",
    },
    {
      name: PdfFields.CERTIFICATE_SERIAL,
      label: "Серия свидетельства",
      placeholder: "AAO",
    },
    {
      name: PdfFields.CERTIFICATE_NUMBER,
      label: "Номер свидетельства",
      placeholder: "23457865356",
    },
    {
      name: PdfFields.CERTIFICATE_ISSUES_BY,
      label: "Кем выдано свидетельство (наименование РЭП ГАИ)",
      placeholder: "Минским РЭП ГАИ Минского района",
    },
    {
      name: PdfFields.CERTIFICATE_ISSUES_DATE,
      label: "Дата выдачи свидетельства",
      placeholder: "20.10.2020 г",
    },
    {
      name: PdfFields.CAR_COST_NUMBER,
      label: "Стоимоть цифрами (BYN)",
      placeholder: "1597",
    },
    {
      name: PdfFields.CAR_COST_TEXT,
      label: "Стоимоть прописью",
      placeholder: "Тысяча пятьсот девяносто семь",
    },
  ],
};

export const FormValues: Form[] = [Header, Buyer, Salesman, Transport, Details];
