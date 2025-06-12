import React, { useState } from "react";
import { Avatar, Box, Typography, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileAvatar = ({ userImageUrl }: { userImageUrl: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ cursor: "pointer" }}
    >
      <Avatar src={userImageUrl} sx={{ width: 56, height: 56 }}>
        {!userImageUrl && <AccountCircleIcon sx={{ fontSize: 40 }} />}
      </Avatar>
      {hover && (
        <Paper
          sx={{
            position: "absolute",
            top: "110%",
            right: 0,
            px: 1.5,
            py: 0.5,
            bgcolor: "#222",
            color: "white",
            borderRadius: "6px",
            fontSize: 14,
            "&:hover": {
              bgcolor: "#333",
            },
          }}
          elevation={3}
        >
          Logout
        </Paper>
      )}
    </Box>
  );
};

export default ProfileAvatar;
