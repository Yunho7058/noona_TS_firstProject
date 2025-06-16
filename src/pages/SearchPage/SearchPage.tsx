import { Typography } from "@mui/material";
import SearchPageCardGrid from "./SearchPageCardGrid";

/*
검색창 // 만든거 가져오기
카드 리스트 / 색깔 랜덤

*/

const SearchPage = () => {
  return (
    <div>
      <Typography variant="h1" textAlign={"left"} padding={"20px"}>
        Browse all
      </Typography>
      <div>
        <SearchPageCardGrid />
      </div>
    </div>
  );
};

export default SearchPage;
