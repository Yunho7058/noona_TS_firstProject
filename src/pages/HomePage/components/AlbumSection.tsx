import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetAlbums } from "../../../hooks/useGetAlbums";
import Card from "../../../common/components/Card";
const AlbumSection = ({ ids }: { ids: string[] }) => {
  console.log(ids.join(","));
  const { data, isLoading } = useGetAlbums(ids);
  console.log(data);
  return (
    <>
      <Typography
        variant={"h1"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginBottom={"15px"}
      >
        ALBUMS
      </Typography>

      {data && data.albums.length > 0 ? (
        <Grid container spacing={3}>
          {data.albums.map((album) => (
            <Card
              key={album.id}
              image={album.images[0]?.url ?? ""}
              name={album.name}
              artistName={album.artists[0]?.name ?? ""}
            />
          ))}
        </Grid>
      ) : (
        <Typography variant={"h2"}>No Data</Typography>
      )}
    </>
  );
};

export default AlbumSection;
