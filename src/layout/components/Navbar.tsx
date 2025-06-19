import { Avatar, Box, styled } from "@mui/material";
import LoginButton from "../../common/components/LoginButton";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import LoadingSpinner from "../../common/components/util/LoadingSpinner";
import { useNavigate } from "react-router";
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const { data: userProfile, isLoading } = useGetUserProfile();
  const navigate = useNavigate();
  // console.log(userProfile, " 하이");
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("code_verifier");
    navigate("/");
    window.location.reload();
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      height={"64px"}
    >
      {/* <SearchInput propsClassName={"heade"} /> */}
      <Box onClick={handleLogout}>
        {isLoading ? (
          <LoadingSpinner />
        ) : userProfile ? (
          userProfile.images[0] ? (
            <ProfileAvatar
              userImageUrl={userProfile.images[0].url}
              isImage={true}
            />
          ) : (
            <ProfileAvatar userImageUrl={"noImage"} isImage={false} />
          )
        ) : (
          <LoginButton />
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
