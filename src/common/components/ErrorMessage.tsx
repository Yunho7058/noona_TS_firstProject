import { Alert } from "@mui/material";
import React from "react";

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return <Alert severity={"error"}>{errorMessage}</Alert>;
};

export default ErrorMessage;
