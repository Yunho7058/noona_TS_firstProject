import { Button, styled } from "@mui/material";
import React from "react";

const SButton = styled(Button)();

const LoginButton = () => {
  return (
    <SButton variant={"contained"} color={"secondary"} size={"large"}>
      Login
    </SButton>
  );
};

export default LoginButton;
