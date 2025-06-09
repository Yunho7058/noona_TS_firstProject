import { Avatar, Box, styled } from "@mui/material";
import React from "react";
import LoginButton from "../../common/components/LoginButton";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoadingSpinner from "../../common/components/util/LoadingSpinner";

const Navbar = () => {
  const { data: userProfile, isLoading } = useGetUserProfile();

  return (
    <Box
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      height={"64px"}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : userProfile ? (
        userProfile.images[0] ? (
          <Avatar
            src={userProfile.images[0].url}
            sx={{ width: 56, height: 56 }}
          />
        ) : (
          <Avatar sx={{ width: 56, height: 56 }}>
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </Avatar>
        )
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};

export default Navbar;
