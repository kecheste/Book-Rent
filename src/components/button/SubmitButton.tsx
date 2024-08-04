import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const CustomButton = styled(Button)({
  backgroundColor: "#0ea5e9",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0284c7",
  },
  "&:focus": {
    outline: "2px solid #1976d2",
  },
  "&:disabled": {
    backgroundColor: "#ccc",
    color: "#666",
  },
  paddingTop: "8px",
  paddingBottom: "8px",
  width: "100%",
});

const InputButton = ({ children, ...props }: { children: string }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default InputButton;
