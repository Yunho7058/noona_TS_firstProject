import { Box, Grid, ListItem, Snackbar, styled } from "@mui/material";
import React, { useState } from "react";
import { TSimplifiedPlaylist } from "../../../model/playlist";
import useAddPlaylistItem from "../../../hooks/useAddPlaylistItem";
import Alert from "@mui/material/Alert";

interface TProps {
  playlists: TSimplifiedPlaylist;
  uris?: string;
  setIsBtn: React.Dispatch<React.SetStateAction<boolean>>;
  //isOpen: boolean;
  //onToggle: (id: string) => void;
}

export const SearchResultPlaylistItem = ({
  playlists,
  uris,
  setIsBtn,
}: // isOpen,
// onToggle,
TProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const { mutate: addPlaylistItem } = useAddPlaylistItem(playlists.id);
  const handlePlaylistAddItem = () => {
    if (!uris) return;
    addPlaylistItem({
      playlistId: playlists.id,
      uris: [uris],
    });
    setIsBtn(false);
    setShowAlert(true);
  };
  return (
    <Box>
      <StyleListItem
        key={playlists.id}
        onClick={() => {
          handlePlaylistAddItem();
        }}
      >
        {playlists.name}
      </StyleListItem>
      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          sx={{ width: "200px", fontSize: "1.1rem", boxShadow: 3 }}
        >
          노래 추가 완료!
        </Alert>
      </Snackbar>
    </Box>
  );
};

const StyleListItem = styled(ListItem)(({ theme }) => ({
  zIndex: "1500",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
}));
