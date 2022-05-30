import React, { FC, BaseSyntheticEvent } from "react";
import { Typography, TextField, Box } from "@mui/material";
import { Form } from "@types";
import "./FormBuilder.scss";

export interface FormBuilderProps {
  form: Form;
  onChange(fieldName: string, value: string | number): void;
}

export const FormBuilder: FC<FormBuilderProps> = ({ form, onChange }) => {
  const handleChanges = ({ target }: BaseSyntheticEvent) => {
    onChange(target.id, target.value);
  };

  return (
    <Box
      className="form"
      component="form"
      noValidate
      autoComplete="off"
      onChange={handleChanges}
    >
      <Typography variant="h6" component="h4" align="center">
        {form.title}
      </Typography>

      {form.fields.map((field, index) => (
        <TextField
          className="form__field"
          size="small"
          variant="outlined"
          key={`${field.name}-${index}`}
          id={field.name}
          label={field.label}
          placeholder={field.placeholder}
          required={field.isRequired}
        />
      ))}
    </Box>
  );
};
