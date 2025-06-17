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
  console.log(artists);
  return (
    <Box sx={{ px: 4, py: 3, color: "white", bgcolor: "#121212" }}>
      {topTrack && (
        <Box mb={5}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Top result
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={topTrack?.album?.images?.[0]?.url}
              variant="rounded"
              sx={{ width: 96, height: 96 }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {topTrack.name}
              </Typography>
              <Typography variant="body2" color="gray">
                Song • {topTrack?.artists?.map((a) => a.name).join(", ")}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Songs
        </Typography>
        <List>
          {otherTracks.map((track) => (
            <ListItem
              key={track.id}
              disableGutters
              secondaryAction={
                <Typography variant="body2" color="gray">
                  {track.duration_ms && formatDuration(track.duration_ms)}
                </Typography>
              }
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
            </ListItem>
          ))}
        </List>
      </Box>
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Artists
        </Typography>
        <Grid container spacing={2}>
          {artists.map((artist) => (
            <Grid key={artist.id}>
              <Box textAlign="center">
                <Avatar
                  src={artist?.image?.[0].url}
                  alt={artist.name}
                  sx={{ width: 80, height: 80, mx: "auto" }}
                />
                <Typography variant="subtitle2" mt={1}>
                  {artist.name}
                </Typography>
                <Typography variant="caption" color="gray">
                  Artist
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SearchResultPage;
