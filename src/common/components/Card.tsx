import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import PlayButton from "./PlayButton";

interface TCardProps {
  name: string | undefined;
  image: string | undefined;
  artistName?: string | undefined;
}

const CardGrid = styled(Grid)(({ theme }) => ({
  // border: "1px solid",
  borderRadius: "15px",
  position: "relative",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  "&:hover .play-button": {
    opacity: 1,
    visibility: "visible",
  },
  "& img": {
    borderRadius: "15px",
  },
}));

const PlayButtonWrapper = styled("div")({
  position: "absolute",
  top: "10px",
  left: "10px",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s ease",
});

const Card = ({ image, name, artistName }: TCardProps) => {
  return (
    <CardGrid size={{ xs: 6, sm: 4, md: 2 }}>
      <img src={image} alt="albumImg" width={"100%"} />
      <Typography fontWeight={"900"} fontSize={"1rem"}>
        {name ? name : <Typography>해당 정보가 없습니다.</Typography>}
      </Typography>
      <Typography
        fontWeight={"100"}
        color={"rgba(255,255,255,0.5)"}
        fontSize={"0.7rem"}
      >
        {artistName ? (
          artistName
        ) : (
          <Typography>해당 정보가 없습니다.</Typography>
        )}
      </Typography>
      <PlayButtonWrapper className="play-button">
        <PlayButton />
      </PlayButtonWrapper>
    </CardGrid>
  );
};

export default Card;
