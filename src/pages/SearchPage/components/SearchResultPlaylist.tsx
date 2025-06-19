import React, { useEffect, useRef, useState } from "react";
import { Box, Collapse, List, ListItem, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useGetCurrentUserPlaylist from "../../../hooks/useGetCurrentUserPlaylist";

import useAddPlaylistItem from "../../../hooks/useAddPlaylistItem";
import { SearchResultPlaylistItem } from "./SearchResultPlaylistItem";

const StyleIconContainer = styled(AddIcon)(({ theme }) => ({
  "&:hover": {
    color: "blue",
  },
}));
/*
구현 해야할거
1. 노래 호버시, 나의 네이버바 보이면서 나의 플레이르스트 쭉 보이게 하기,
2. 그리고 그 플레이리스트 클릭시, 그 플레이리스트로 노래 추가

자 일단 호버시 네이버바 구현
*/
// (({ theme }) => ({}))
const StlyedCollapse = styled(Collapse)(({ theme }) => ({
  position: "absolute",
  width: "300px",
  height: "500px",
  backgroundColor: "rgba(255,255,255,0.3)",
  borderRadius: "10px",
}));

const SearchResultPlaylist = ({ uris }: { uris?: string }) => {
  const [isBtn, setIsBtn] = useState(false);
  const { data: playlists, isLoading } = useGetCurrentUserPlaylist();
  // 플레이 리스트 아이디랑, 선택한 노래 아이디 보내기?
  //const { mutate: addPlaylistItem } = useAddPlaylistItem(playlistId);
  const [openPlaylistId, setOpenPlaylistId] = useState<string | null>(null);

  //const handleToggle = (id: string) => {
  //   console.log(id);
  //   setOpenPlaylistId((prev) => (prev === id ? null : id)); // 같은 거 누르면 닫기
  // };
  const ref = useRef<HTMLDivElement | null>(null);

  // 🔹 외부 클릭 시 닫힘
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
        <List>
          {playlists?.pages[0].items?.map((play) => (
            <SearchResultPlaylistItem
              key={play.id}
              playlists={play}
              setIsBtn={setIsBtn}
              // isOpen={openPlaylistId === play.id}
              // onToggle={handleToggle}
              uris={uris}
            />
          ))}
        </List>
      </StlyedCollapse>
    </Box>
  );
};

export default SearchResultPlaylist;
