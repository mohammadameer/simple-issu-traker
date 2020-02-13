import React from "react";

import {
  FormControl,
  InputLabel,
  Select,
  Chip,
  Input,
  makeStyles,
  FormHelperText
} from "@material-ui/core";

const useStyles = makeStyles({
  spans: {
    display: "flex-inline",
    flexWrap: "wrap"
  },
  selected: {
    backgroundColor: "#323232",
    padding: 3,
    boxSizing: "border-box",
    color: "#fff"
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const MultipleSelect = ({
  input,
  label,
  data,
  handleChange,
  fullWidth,
  children,
  meta: { touched, error },
  ...custome
}) => {
  const classes = useStyles();
  return (
    <FormControl
      error={touched && error}
      className={classes.formControl}
      fullWidth={fullWidth}
    >
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        {...input}
        {...custome}
        labelId={label}
        multiple
        input={<Input id="select-multiple-chip" />}
        renderValue={selected => (
          <div className={classes.chips}>
            {selected.map(value => (
              <span key={value} className={classes.selected}>
                {value}
              </span>
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {children}
      </Select>
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default MultipleSelect;
