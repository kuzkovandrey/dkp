import { GenericForm, Form } from "@types";

export const createFormObject = ({ fields }: Form): GenericForm => {
  const form: GenericForm = {};
  fields.forEach(({ name }) => (form[name] = ""));

  return form;
};
