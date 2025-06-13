import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useSearchItemsByKeyword from "../../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../../model/search";
import { SearchResultList } from "./SearchResultList";

const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const { data, isLoading, error } = useSearchItemsByKeyword({
    q: keyword,
    type: [SEARCH_TYPE.Track],
  });
  console.log("검색정보", data);
  const handleSearchKeyord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  return (
    <div>
      <Typography variant="h1" my={"10px"}>
        원하는 노래를 찾아보세요.
      </Typography>
      <TextField value={keyword} onChange={handleSearchKeyord} />
      {data?.pages.map((item) => {
        if (!item.tracks) return false;
        return <SearchResultList list={item.tracks?.items} />;
      })}
    </div>
  );
};

export default EmptyPlaylistWithSearch;
