import React, { useEffect, useRef, useState } from "react";
import { Box, Collapse, List, ListItem, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useGetCurrentUserPlaylist from "../../../hooks/useGetCurrentUserPlaylist";

import useAddPlaylistItem from "../../../hooks/useAddPlaylistItem";
import { SearchResultPlaylistItem } from "./SearchResultPlaylistItem";

const StyleIconContainer = styled(AddIcon)(({ theme }) => ({
  overflow: "hidden",
  zIndex: "100",
  "&:hover": {
    color: "#1DB954",
  },
}));

const StlyedCollapse = styled(Collapse)(({ theme }) => ({
  position: "absolute",
  width: "100px",
  backgroundColor: "rgba(50,50,50,0.95)",
  borderRadius: "10px",
  zIndex: "150",
}));

const StlyedList = styled(List)(({ theme }) => ({
  height: "300px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
}));

const SearchResultPlaylist = ({ uris }: { uris?: string }) => {
  const [isBtn, setIsBtn] = useState(false);
  const { data: playlists, isLoading } = useGetCurrentUserPlaylist();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsBtn(false);
      }
    };

    if (isBtn) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBtn]);
  return (
    <Box sx={{ position: "relative" }} ref={ref}>
      <StyleIconContainer onClick={() => setIsBtn(!isBtn)} />
      <StlyedCollapse in={isBtn}>
        <StlyedList>
          {playlists?.pages[0].items?.map((play) => (
            <SearchResultPlaylistItem
              key={play.id}
              playlists={play}
              setIsBtn={setIsBtn}
              uris={uris}
            />
          ))}
        </StlyedList>
      </StlyedCollapse>
    </Box>
  );
};

export default SearchResultPlaylist;
