import React from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#999",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9ca3af",
    },
  },
});

const InputField = ({
  label,
  helperText,
  placeholder,
  value,
  type,
  ...props
}: {
  label: string;
  helperText: string;
  placeholder: string;
  value: string;
  type: string;
}) => {
  return (
    <CustomTextField
      placeholder={placeholder}
      value={value}
      label={label}
      type={type}
      variant="outlined"
      helperText={helperText}
      {...props}
    />
  );
};

export default InputField;
