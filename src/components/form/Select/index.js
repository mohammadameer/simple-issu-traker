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
  meta,
  children,
  fullWidth,
  ...custom
}) => (
  <FormControl error={meta && meta.touched && meta.error} fullWidth={fullWidth}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select {...input} {...custom}>
      {children}
    </Select>
    {meta && meta.touched && meta.error && (
      <FormHelperText>{meta.error}</FormHelperText>
    )}
  </FormControl>
);

export default renderSelectField;
