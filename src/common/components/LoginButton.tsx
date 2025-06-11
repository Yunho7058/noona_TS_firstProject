import { Button, styled } from "@mui/material";
import React from "react";
import { getSpotifyAuthUrl } from "../../utils/auth";

const SButton = styled(Button)(({ theme }) => ({}));

const LoginButton = () => {
  return (
    <SButton variant={"contained"} onClick={getSpotifyAuthUrl}>
      Login
    </SButton>
  );
};

export default LoginButton;
