import { Button, styled } from "@mui/material";
import React from "react";
import { getSpotifyAuthUrl } from "../../utils/auth";

const SButton = styled(Button)(({ theme }) => ({}));

const LoginButton = () => {
  const login = () => {
    getSpotifyAuthUrl();
  };
  return (
    <SButton variant={"contained"} onClick={login}>
      Login
    </SButton>
  );
};

export default LoginButton;
