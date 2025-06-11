import React from "react";
import { useGetPlaylist } from "../../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlaylistHeader from "./components/PlaylistHeader";
import useGetPlaylistItems from "../../../hooks/useGetPlaylistItems";
import PlaylistItems from "./components/PlaylistItems";
import { Typography } from "@mui/material";

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) {
    return <Navigate to={"/"} />;
  }
  const { data: playlist } = useGetPlaylist({ playlist_id: id });

  // 사진, 노래 제목, 가수 이름 // 없으면 기본 이미지 -> MusicNoteIcon 보여주기
  return (
    <div>
      {playlist && <PlaylistHeader playlist={playlist} />}
      {playlist?.tracks?.total === 0 ? (
        <Typography>검색</Typography>
      ) : (
        <PlaylistItems paramsId={id} />
      )}
    </div>
  );
};

export default PlaylistDetailPage;

/*
import { Box, ImageList, ImageListItem, styled } from "@mui/material";
import React from "react";
import { TSimplifiedPlaylist } from "../../model/playlist";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "#121212",
  color: theme.palette.text.primary,
  width: "100%",
  padding: "15px",
  display: "flex",
  height: "500px",
  flexDirection: "row",
  gap: "1px",
  position: "relative",
  "&:hover .playIcon": {
    opacity: 1,
  },
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7,
  },
}));
const StyledImage = styled("img")(({ theme }) => ({
  width: "30%", // 너비
  height: "100%", // 정사각형 이미지
  borderRadius: "4px",
  objectFit: "cover",
  flexShrink: 0, // 이미지 크기 줄어들지 않게
}));
const StlyedIconBox = styled(Box)(({ theme }) => ({
  width: "30%", // 너비
  height: "60px", // 정사각형 이미지
  borderRadius: "4px",
  objectFit: "cover",
  flexShrink: 0, // 이미지 크기 줄어들지 않게
  backgroundColor: theme.palette.background.default,
}));
const InfoBox = styled(Box)({
  flex: 1, // 나머지 공간 차지
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const IconStyle = styled(PlayCircleIcon)({
  position: "absolute",
  top: "50%",
  left: "19%",
  transform: "translate(-50%, -50%)",
  fontSize: "48px",
  color: "white",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  pointerEvents: "none",
});
//playlist.
const PlaylistItem = ({
  currentUserPlaylists,
  handleClick,
}: {
  currentUserPlaylists: TSimplifiedPlaylist[];
  handleClick: (id: string) => void;
}) => {
  // console.log("여기", currentUserPlaylists);
  return (
    <>
      {currentUserPlaylists.map((playlist) => {
        return (
          <ContentBox
            onClick={() => playlist.id && handleClick(playlist.id)}
            key={playlist.id}
          >
            {playlist?.images?.[0]?.url ? (
              <StyledImage src={playlist?.images[0].url} />
            ) : (
              <StlyedIconBox
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <MusicNoteIcon />
              </StlyedIconBox>
            )}
            <IconStyle className="playIcon" />
            <InfoBox>
              <Box sx={{ fontWeight: "bold", fontSize: "14px" }}>
                {playlist.name}
              </Box>
              <Box sx={{ color: "#b3b3b3", fontSize: "12px" }}>
                playlist • {playlist.owner.display_name}
              </Box>
            </InfoBox>
          </ContentBox>
        );
      })}
    </>
  );
};

export default PlaylistItem;

*/
