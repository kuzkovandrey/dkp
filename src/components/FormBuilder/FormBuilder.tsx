import React, { FC } from "react";
import { FormBuilderProps } from "./FormBuilderProps";
import { Typography, TextField } from "@mui/material";

export const FormBuilder: FC<FormBuilderProps> = ({ form }) => (
  <div>
    <Typography variant="h6" component="h4" align="center">
      {form.title}
    </Typography>

    {form.fields.map((field) => (
      <TextField
        size="small"
        style={{
          width: field.isFullWidth ? "100%" : "auto",
          minWidth: "40%",
          boxSizing: "border-box",
        }}
        key={field.name}
        id={field.name}
        label={field.placeholder}
        variant="outlined"
        required={field.isRequired}
      />
    ))}
  </div>
);
