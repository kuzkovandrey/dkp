import { FormFieldNames } from "../../values";

export interface PaymentFields {
  payment_period: string;
  payment_form: string;
}

export interface Payment {
  [FormFieldNames.PERIOD]: string;
  [FormFieldNames.FORM]: string;
}

export class PaymentMapper {
  public static map(payment: Payment): PaymentFields {
    return {
      payment_period: payment.period,
      payment_form: payment.form,
    };
  }
}
