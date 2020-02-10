import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText
} from "@material-ui/core";

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  fullWidth,
  ...custom
}) => (
  <FormControl error={touched && error} fullWidth={fullWidth}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select {...input} {...custom}>
      {children}
    </Select>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default renderSelectField;
