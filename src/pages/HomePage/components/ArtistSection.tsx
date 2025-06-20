import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import useSearchItemsByKeyword from "../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../model/search";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const TrackSection = () => {
  const { data, isLoading } = useSearchItemsByKeyword({
    q: "hiphop",
    type: [SEARCH_TYPE.Artist],
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
        Artist - HipHot
      </Typography>
      <Grid container spacing={3}>
        {data?.pages[0].artists?.items.map((artist) => (
          <Grid
            key={artist.id}
            sx={{
              ":hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                cursor: "pointer",
                ".play-icon": {
                  opacity: 1,
                },
              },
              padding: "10px",
              borderRadius: "10px",
              position: "relative",
            }}
            size={{ xs: 4, sm: 3, md: 2 }}
          >
            <Box>
              <Avatar
                src={artist.images?.[0]?.url || ""}
                alt={artist.name}
                sx={{ width: 80, height: 80, mx: "auto" }}
              />
              <Typography variant="subtitle2" mt={1}>
                {artist.name}
              </Typography>
              <Typography variant="caption" color="gray">
                Artist
              </Typography>
              <PlayCircleIcon
                className="play-icon"
                sx={{
                  position: "absolute",
                  opacity: 0,
                  top: 5,
                  left: 5,
                  width: "40px",
                  height: "40px",
                  transition: "opacity 0.3s ease",
                  color: "#5CE75C",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* : (<Typography variant={"h2"}>No Data</Typography>) */}
    </>
  );
};

export default TrackSection;
