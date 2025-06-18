import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const mockSongs = [
  {
    id: "1",
    name: "Love Hangover (feat. Dominic Fike)",
    artists: ["JENNIE", "Dominic Fike"],
    imageUrl: "/cover1.jpg",
    duration: "03:00",
  },
  {
    id: "2",
    name: "Love Me",
    artists: ["Lil Wayne", "Drake", "Future"],
    imageUrl: "/cover2.jpg",
    duration: "04:15",
  },
];

const mockPlaylists = [
  { id: "a", name: "팝핀" },
  { id: "b", name: "연습힙합" },
  { id: "c", name: "RnB" },
];

const SearchResultPlaylist = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddClick = (
    event: React.MouseEvent<HTMLElement>,
    songId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedSongId(songId);
  };

  const handleSelectPlaylist = (playlistId: string) => {
    console.log(`🎵 Song ${selectedSongId} added to playlist ${playlistId}`);
    setAnchorEl(null);
    setSnackbarOpen(true);
    // 여기에 실제 추가 로직 (API 호출 등) 작성
  };

  return (
    <Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {mockPlaylists.map((pl) => (
          <MenuItem key={pl.id} onClick={() => handleSelectPlaylist(pl.id)}>
            {pl.name}
          </MenuItem>
        ))}
      </Menu>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        message="✅ Added to Playlist"
        onClose={() => setSnackbarOpen(false)}
      />
    </Box>
  );
};

export default SearchResultPlaylist;
