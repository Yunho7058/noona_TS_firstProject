import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  Typography,
  styled,
  alpha,
  TableRow,
  TableCell,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useSearchItemsByKeyword from "../../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../../model/search";
import { SearchResultList } from "./SearchResultList";
import LoadingSpinner from "../../../../common/components/util/LoadingSpinner";
import { useInView } from "react-intersection-observer";

const SearchBoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "30px",
  borderRadius: "8px",
  marginTop: "20px",
}));
const SearchResultListBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "20px",
  borderRadius: "8px",
  marginTop: "20px",
  height: "100%",
  maxHeight: "380px",
  overflow: "auto",
  gap: "5px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
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

// 플레이 리스트 아이템 없을때, 검색창
const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const { ref, inView } = useInView({ threshold: 0 });
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSearchItemsByKeyword({
      q: keyword,
      type: [SEARCH_TYPE.Track],
    });

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <SearchBoxWrapper>
      <Typography variant="h4" fontWeight="bold">
        플레이리스트에 추가할 곡을 찾아보세요.
      </Typography>

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
      <SearchResultListBox>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          data?.pages.map((item, idx) => {
            if (!item.tracks?.items[0]) {
              return (
                <Typography key={idx} mt={2}>
                  "{keyword}" 일치하는 결과 없습니다.
                </Typography>
              );
            }
            return <SearchResultList key={idx} list={item.tracks.items} />;
          })
        )}
        {hasNextPage && (
          <Box ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</Box>
        )}
      </SearchResultListBox>
    </SearchBoxWrapper>
  );
};

export default EmptyPlaylistWithSearch;
