import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetNewReleases } from "../../../hooks/useGetNewReleases";
import LoadingSpinner from "../../../common/components/util/LoadingSpinner";
import ErrorMessage from "../../../common/components/ErrorMessage";
import { TSimplifiedAlbum } from "../../../model/album";
import Card from "../../../common/components/Card";

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }
  return (
    <div>
      <Typography
        variant={"h1"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginBottom={"15px"}
      >
        NewReleases Albums
      </Typography>
      {data && data?.albums.items.length > 0 ? (
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
      ) : (
        <Typography variant={"h2"}>No Data</Typography>
      )}
    </div>
  );
};

export default NewReleases;
