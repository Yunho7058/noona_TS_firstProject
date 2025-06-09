import React, { useEffect } from "react";
import EmptyPlaylist from "./EmptyPlaylist";
import useGetCurrentUserPlaylist from "../../hooks/useGetCurrentUserPlaylist";
import LoadingSpinner from "../../common/components/util/LoadingSpinner";
import Playlists from "./Playlists";
import { Box, styled } from "@mui/material";
import { useInView } from "react-intersection-observer";

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  height: "100%",
});

const Library = () => {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCurrentUserPlaylist({
    limit: 10,
    offset: 0,
  });
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      // 함수 호출
      fetchNextPage();
    }
  }, [inView]);

  // console.log("리스트", data, isLoading, inView);
  const shouldShowEmpty = error || !data?.pages[0].total;
  return (
    <ContentBox>
      {isLoading ? (
        <LoadingSpinner />
      ) : shouldShowEmpty ? (
        <EmptyPlaylist />
      ) : (
        <>
          {data?.pages.map((page, idx) => (
            <Playlists currentUserPlaylists={page.items} key={idx} />
          ))}
          <div ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</div>
        </>
      )}
    </ContentBox>
  );
};

export default Library;
