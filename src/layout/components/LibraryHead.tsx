import { Box, Button, Grid, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";
import { getSpotifyAuthUrl } from "../../utils/auth";

const LibraryHead = () => {
  const { mutate: createPlaylist } = useCreatePlaylist();
  const handleCreateplaylist = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      createPlaylist({ name: "나의 플레이리스트" });
    } else {
      getSpotifyAuthUrl();
    }
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      width="100%"
      sx={{ fontSize: "15px" }}
    >
      <BookmarkIcon sx={{ verticalAlign: "middle" }} />
      <Typography fontSize="18px" fontWeight="800">
        Your Library
      </Typography>
      <AddBoxIcon
        sx={{
          verticalAlign: "middle",
          cursor: "pointer",
          transition: "color 0.2s",
          "&:hover": {
            color: "success.main",
          },
        }}
        onClick={handleCreateplaylist}
      />
    </Box>
  );
};

export default LibraryHead;
