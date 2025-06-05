import { Grid, styled } from "@mui/material";
import React from "react";
import PlayButton from "./PlayButton";

interface TCardProps {
  name: string;
  image: string;
  artistName: string | undefined;
}

const CardGrid = styled(Grid)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.text.primary,
    cursor: "pointer",
  },
  //   "&:active": {
  //     color: theme.palette.text.primary,
  //   },
}));

const Card = ({ image, name, artistName }: TCardProps) => {
  return (
    <CardGrid size={{ xs: 6, sm: 4, md: 2 }}>
      <img src={image} alt="albumImg" />
      <div>{name}</div>
      <div>{artistName ? artistName : <div>해당 정보가 없습니다.</div>}</div>
      <PlayButton />
    </CardGrid>
  );
};

export default Card;
