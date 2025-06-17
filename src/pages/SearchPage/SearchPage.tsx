import { alpha, InputBase, styled, Typography } from "@mui/material";
import SearchPageCardGrid from "./SearchPageCardGrid";
import SearchResultPage from "./SearchResultPage";
import useSearchItemsByKeyword from "../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../model/search";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams, useRoutes } from "react-router";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "26px",
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginTop: "20px",
  width: "50%",
}));

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

const SearchPage = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState<string>("");
  useEffect(() => {
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    }
  }, [keyword, navigate]);
  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  //const { ref, inView } = useInView({ threshold: 0 });
  const { data: tracks, isLoading: isLoadingTrack } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track],
  });
  const { data: artists, isLoading: isLoadingArtist } = useSearchItemsByKeyword(
    {
      q: keyword,
      type: [SEARCH_TYPE.Artist],
    }
  );
  const { data: albums, isLoading: isLoadingAlbum } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Album],
  });
  // useEffect(() => {
  //   if (inView && hasNextPage && !isFetchingNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  const trackItems =
    tracks?.pages.flatMap((page) => page.tracks?.items ?? []) ?? [];
  const artistItems =
    artists?.pages.flatMap((page) => page.artists?.items ?? []) ?? [];
  const albumItems =
    albums?.pages.flatMap((page) => page.albums?.items ?? []) ?? [];
  return (
    <div>
      <StyledSearch>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="곡 또는 에피소드를 검색해주세요."
          value={keyword}
          onChange={handleSearchKeyword}
        />
      </StyledSearch>
      {keyword ? (
        <>
          {tracks && artists && albums && (
            <SearchResultPage
              tracks={trackItems}
              artists={artistItems}
              albums={albumItems}
            />
          )}
        </>
      ) : (
        <>
          <Typography variant="h1" textAlign={"left"} padding={"20px"}>
            Browse all
          </Typography>
          <div>
            <SearchPageCardGrid />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
