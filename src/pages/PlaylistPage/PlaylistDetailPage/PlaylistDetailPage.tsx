import React, { useEffect, useState } from "react";
import { useGetPlaylist } from "../../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlaylistHeader from "./components/PlaylistHeader";
import useGetPlaylistItems from "../../../hooks/useGetPlaylistItems";
import PlaylistItems from "./components/PlaylistItems";
import { Box, Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { TPlaylistResponse } from "../../../model/playlist";
import { getSpotifyAuthUrl } from "../../../utils/auth";

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isLogin, setIsLogin] = useState(true);
  if (id === undefined) {
    return <Navigate to={"/"} />;
  }
  const {
    data: playlist,
    isLoading,
    error,
  } = useGetPlaylist({ playlist_id: id });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setIsLogin(false);
    }
  }, []);
  useEffect(() => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("code_verifier");
      setIsLogin(false);
    }
  }, [error]);

  return (
    <>
      {isLogin ? (
        <div>
          {playlist && <PlaylistHeader playlist={playlist} />}
          {playlist?.tracks?.total === 0 ? (
            <Typography>검색</Typography>
          ) : (
            <PlaylistItems paramsId={id} />
          )}
        </div>
      ) : (
        <Box textAlign="center" mt={10}>
          <Typography variant="h6">다시 로그인 하세요</Typography>
          <Button onClick={getSpotifyAuthUrl}>Login</Button>
        </Box>
      )}
    </>
  );
};

export default PlaylistDetailPage;
