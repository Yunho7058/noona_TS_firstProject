import React, { useState } from "react";
import { Box, InputBase, Typography, styled, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useSearchItemsByKeyword from "../../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../../model/search";
import { SearchResultList } from "./SearchResultList";
import LoadingSpinner from "../../../../common/components/util/LoadingSpinner";

// 스타일 정의
const SearchBoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "8px",
  marginTop: "20px",
}));

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginTop: "20px",
  width: "100%",
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

// 컴포넌트
const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { data, isLoading } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track],
  });

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <SearchBoxWrapper>
      <Typography variant="h4" fontWeight="bold">
        Let’s find something for your playlist
      </Typography>

      <StyledSearch>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for songs or episodes"
          value={keyword}
          onChange={handleSearchKeyword}
        />
      </StyledSearch>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data?.pages.map((item, idx) => {
          if (!item.tracks?.items[0]) {
            return (
              <Typography key={idx} mt={2}>
                No Result for {keyword}
              </Typography>
            );
          }
          return <SearchResultList key={idx} list={item.tracks.items} />;
        })
      )}
    </SearchBoxWrapper>
  );
};

export default EmptyPlaylistWithSearch;
