import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from "@mui/material";
import { TTrack } from "../../model/track";
import { TArtist } from "../../model/artist";
import { TSimplifiedAlbum } from "../../model/album";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SearchResultPlaylist from "./components/SearchResultPlaylist";

type TSearchResultPageProps = {
  tracks: TTrack[];
  artists: TArtist[];
  albums: TSimplifiedAlbum[];
};

const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const SearchResultPage = ({
  tracks,
  artists,
  albums,
}: TSearchResultPageProps) => {
  const topTrack = tracks?.[0];
  const otherTracks = tracks?.slice(1);
  console.log(otherTracks);
  return (
    <>
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Top result
        </Typography>
        {topTrack ? (
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={topTrack?.album?.images?.[0]?.url}
              variant="rounded"
              sx={{ width: 96, height: 96 }}
            />
            <Box sx={{ height: "160px" }}>
              <Typography variant="h6" fontWeight="bold">
                {topTrack.name}
              </Typography>
              <Typography variant="body2" color="gray">
                Song • {topTrack?.artists?.map((a) => a.name).join(", ")}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography>검색한 자료가 없습니다.</Typography>
        )}
      </Box>

      {/* 컴포넌트 화 */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Songs
        </Typography>
        {otherTracks.length > 0 ? (
          <List>
            {otherTracks.map((track) => (
              <ListItem
                key={track.id}
                disableGutters
                sx={{
                  padding: "10px",
                  borderRadius: "10px",
                  ":hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={track?.album?.images?.[0]?.url}
                    variant="rounded"
                    sx={{ width: 48, height: 48 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={track.name}
                  secondary={track?.artists?.map((a) => a.name).join(", ")}
                />
                <SearchResultPlaylist uris={track.uri} />
                <Typography variant="body2" color="gray" ml={10}>
                  {track.duration_ms && formatDuration(track.duration_ms)}
                </Typography>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>검색한 자료가 없습니다.</Typography>
        )}
      </Box>
      {/* 컴포넌트 화 */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Artists
        </Typography>
        {artists.length > 0 ? (
          <Grid container spacing={2}>
            {artists.map((artist) => (
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
                  width: "120px",
                }}
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
        ) : (
          <Typography>검색한 자료가 없습니다.</Typography>
        )}
      </Box>
      <Box>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Albums
        </Typography>
        {albums.length > 0 ? (
          <Box>
            {albums.map((album) => (
              <Grid key={album.id}>
                <Avatar
                  src={album.images?.[0]?.url || ""}
                  alt={album.name}
                  variant="rounded"
                  sx={{ width: 96, height: 96 }}
                ></Avatar>
                <Typography>{album.name}</Typography>
                <Typography>{album.artists[0].name}</Typography>
              </Grid>
            ))}
          </Box>
        ) : (
          <Typography>검색한 자료가 없습니다.</Typography>
        )}
      </Box>
    </>
  );
};

export default SearchResultPage;
