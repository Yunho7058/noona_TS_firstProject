import { alpha, InputBase, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useSearchItemsByKeyword from "../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../model/search";

const StyledSearch = styled("div")<{ ownerState: { propsClassName?: string } }>(
  ({ theme, ownerState }) => ({
    position: "relative",
    borderRadius:
      ownerState.propsClassName === "heade" ? "26px" : theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginTop: "20px",
    width: ownerState.propsClassName === "heade" ? "50%" : "100%",
  })
);

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: theme.spacing(1.5, 1.5, 1.5, 6),
  fontSize: "18px",
}));

export const SearchInput = ({ propsClassName }: { propsClassName: string }) => {
  const [keyword, setKeyword] = useState<string>("");
  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  //const { ref, inView } = useInView({ threshold: 0 });
  const {
    data: tracks,
    isLoading: isLoadingTrack,
    // hasNextPage: hasNextPageTrack,
    //isFetchingNextPage: isFetchingNextPageTrack,
    // fetchNextPage: fetchNextPageTrack,
  } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track],
  });
  const {
    data: artists,
    isLoading: isLoadingArtist,
    // hasNextPage: hasNexPageArtist,
    //isFetchingNextPage: isFetchingNextPageArtist,
    //fetchNextPage: fetchBexPageArtist,
  } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Artist],
  });
  const {
    data: Album,
    isLoading: isLoadingAlbum,
    //hasNextPage: hasNexPageAlbum,
    //isFetchingNextPage: isFetchingNextPageAlbum,
    //fetchNextPage: fetchBexPageAlbum,
  } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Album],
  });
  // useEffect(() => {
  //   if (inView && hasNextPage && !isFetchingNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  console.log(tracks);
  console.log(artists);
  /*
  여기서 저 클래스네임이 헤드면 
  1. url 변경
  /
  */
  return (
    <>
      <StyledSearch ownerState={{ propsClassName }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="곡 또는 에피소드를 검색해주세요."
          value={keyword}
          onChange={handleSearchKeyword}
        />
      </StyledSearch>
    </>
  );
};
