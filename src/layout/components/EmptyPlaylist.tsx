import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "#404040",
  color: theme.palette.text.primary,
  width: "100%",
  padding: "20px",
  marginBottom: "8px",
  marginRight: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
}));

const EmptyPlaylist = () => {
  return (
    <ContentBox>
      <div>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Create your first playlist
          <Typography sx={{ fontSize: "14px" }}>
            It's easy, we'll help you
          </Typography>
        </Typography>
      </div>
      <Button variant="contained" size="medium">
        Create playlist
      </Button>
    </ContentBox>
  );
};

export default EmptyPlaylist;
