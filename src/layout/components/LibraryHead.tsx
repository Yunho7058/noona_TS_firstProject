import { Grid, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";

const LibraryHead = () => {
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      alignItems="center"
      width="100%"
      sx={{ fontSize: "15px" }}
    >
      <BookmarkIcon sx={{ verticalAlign: "middle" }} />
      <Typography fontSize="18px" fontWeight="800">
        Your Library
      </Typography>
      <AddBoxIcon sx={{ verticalAlign: "middle" }} />
    </Grid>
  );
};

export default LibraryHead;
