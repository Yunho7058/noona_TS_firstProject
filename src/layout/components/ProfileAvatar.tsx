import React, { useState } from "react";
import { Avatar, Box, Typography, Paper, styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StylePaper = styled(Paper)({
  position: "absolute",
  top: "110%",

  px: 1.5,
  py: 0.5,
  bgcolor: "#222",
  color: "white",
  borderRadius: "6px",
  fontSize: 14,
  "&:hover": {
    bgcolor: "#333",
  },
});

const ProfileAvatar = ({
  userImageUrl,
  isImage,
}: {
  userImageUrl: string;
  isImage: boolean;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ cursor: "pointer" }}
    >
      {isImage ? (
        <Avatar src={userImageUrl} sx={{ width: 56, height: 56 }}>
          {!userImageUrl && <AccountCircleIcon sx={{ fontSize: 40 }} />}
        </Avatar>
      ) : (
        <Avatar sx={{ width: 56, height: 56 }}>
          <AccountCircleIcon sx={{ fontSize: 40 }} />
        </Avatar>
      )}
      {hover && <StylePaper elevation={1}>Logout</StylePaper>}
    </Box>
  );
};

export default ProfileAvatar;
