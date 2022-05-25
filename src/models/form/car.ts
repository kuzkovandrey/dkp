import { FormFieldNames } from "./../../values/formFieldNames";
export interface CarFields {
  car_name: string;
  car_model: string;
  car_year: number;
  car_state_number: string;
  car_body_number: string;
  car_cost_number: number;
  car_cost_text: string;
}

export interface Car {
  [FormFieldNames.NAME]: string;
  [FormFieldNames.MODEL]: string;
  [FormFieldNames.CAR_YEAR]: number;
  [FormFieldNames.STATE_NUMBER]: string;
  [FormFieldNames.BODY_NUMBER]: string;
  [FormFieldNames.COST_NUMBER]: number;
  [FormFieldNames.COST_TEXT]: string;
}

export class CarMapper {
  public static map(car: Car): CarFields {
    return {
      car_name: car.name,
      car_model: car.model,
      car_year: car.carYear,
      car_state_number: car.stateNumber,
      car_body_number: car.bodyNumber,
      car_cost_number: car.costNumber,
      car_cost_text: car.costText,
    };
  }
}
