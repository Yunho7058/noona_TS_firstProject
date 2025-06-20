import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetAlbums } from "../../../hooks/useGetAlbums";
import Card from "../../../common/components/Card";
import { SEARCH_TYPE } from "../../../model/search";
import useSearchItemsByKeyword from "../../../hooks/useSearchItemsByKeyword";
const AlbumSection = ({ ids }: { ids: string[] }) => {
  const { data, isLoading } = useSearchItemsByKeyword({
    q: "summer",
    type: [SEARCH_TYPE.Track],
  });
  return (
    <>
      <Typography
        variant={"h1"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginBottom={"15px"}
      >
        TRACK - 시원하게 듣는 여름 노래
      </Typography>
      <>
        {data ? (
          <Grid container spacing={3}>
            {data?.pages[0].tracks?.items.map((track) => (
              <Card
                key={track.id}
                image={track?.album?.images?.[0]?.url}
                name={track.name}
                artistName={track?.artists?.map((a) => a.name).join(", ")}
              />
            ))}
          </Grid>
        ) : (
          <Typography variant={"h2"}>No Data</Typography>
        )}
      </>

      {/* <Typography variant={"h2"}>No Data</Typography> */}
    </>
  );
};

export default AlbumSection;
