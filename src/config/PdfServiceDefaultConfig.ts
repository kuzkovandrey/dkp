import { TextAlignment } from "pdf-lib";
import { FONT_PATH, PDF_TEMPLATE_PATH } from "../values";
import { PdfServiceConfig } from "../models";

export const PdfServiceDefaultConfig: PdfServiceConfig = {
  fontSize: 12,
  align: TextAlignment.Center,
  fontPath: FONT_PATH,
  pdfTemplatePath: PDF_TEMPLATE_PATH,
};

// pdfService.setTextByField("city", "Минск");
//     pdfService.setTextByField("day", "28");
//     pdfService.setTextByField("month", "Приущ");
//     pdfService.setTextByField("year", "22");
//     pdfService.setTextByField("salesman_name", "Кузьков Андрей Александрович");
//     pdfService.setTextByField(
//       "salesman_address",
//       "Минская обл., Минский р-н, а. г. Острошицкий городок, 31, кв. 402"
//     );
//     pdfService.setTextByField(
//       "salesman_passport",
//       "АР 1231232, выдан Минским РОВД г Минска"
//     );

//     pdfService.setTextByField("buyer_name", "Кузьков Андрей Александрович");
//     pdfService.setTextByField(
//       "buyer_address",
//       "Минская обл., Минский р-н, а. г. Острошицкий городок, 31, кв. 402"
//     );
//     pdfService.setTextByField(
//       "buyer_passport",
//       "АР 1231232, выдан Минским РОВД г Минска"
//     );

//     pdfService.setTextByField("car_name", "Автомобиль");
//     pdfService.setTextByField("car_model", "Peugeot 406");
//     pdfService.setTextByField("car_year", "1995");
//     pdfService.setTextByField("car_state_number", "7552 КА-5");
//     pdfService.setTextByField("car_body_number", "BFG9235235Y0001442FV4");

//     pdfService.setTextByField("certificate_serial", "HG");
//     pdfService.setTextByField("certificate_number", "124436434634");

//     pdfService.setTextByField("certificate_number", "124436434634");
//     pdfService.setTextByField(
//       "certificate_issued_by",
//       "Минский РУВД РЭС Минской области"
//     );
//     pdfService.setTextByField("certificate_issued_date", "20.10.12");

//     pdfService.setTextByField("car_cost_number", "1590");
//     pdfService.setTextByField("car_cost_text", "Тысяча пятьсот девяносто");

//     pdfService.setTextByField("payment_period", "до 20.10.2020");
//     pdfService.setTextByField("payment_form", "наличные");
