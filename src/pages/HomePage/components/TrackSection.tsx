import { Typography } from "@mui/material";
import React from "react";

const TrackSection = () => {
  return (
    <>
      <Typography
        variant={"h1"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginBottom={"15px"}
      >
        TRACKS
      </Typography>
      {/* {data && data?.albums.items.length > 0 ? (
        <Grid container spacing={3}>
          {data.albums.items.map((album) => (
            <Card
              key={album.id}
              image={album.images[0].url}
              name={album.name}
              artistName={album.artists[0].name}
            />
          ))}
        </Grid>
      )  */}{" "}
      <>GK</>: (<Typography variant={"h2"}>No Data</Typography>)
    </>
  );
};

export default TrackSection;
