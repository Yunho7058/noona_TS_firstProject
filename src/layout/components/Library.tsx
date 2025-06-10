import React, { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useInView } from "react-intersection-observer";

import EmptyPlaylist from "./EmptyPlaylist";
import Playlists from "../../common/components/PlaylistItem";
import LoadingSpinner from "../../common/components/util/LoadingSpinner";
import useGetCurrentUserPlaylist from "../../hooks/useGetCurrentUserPlaylist";
import PlaylistItem from "../../common/components/PlaylistItem";
import { useNavigate } from "react-router";

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  height: "100%",
});

const Library = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCurrentUserPlaylist();

  useEffect(() => {
    console.log("inView:", inView);
    console.log("hasNextPage:", hasNextPage);
    console.log("isFetchingNextPage:", isFetchingNextPage);
    console.log("data:", data);
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const shouldShowEmpty = error || !data?.pages[0]?.total;

  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`playlist/${id}`);
  };

  return (
    <ContentBox>
      {isLoading ? (
        <LoadingSpinner />
      ) : shouldShowEmpty ? (
        <EmptyPlaylist />
      ) : (
        <>
          {data.pages.map((page, idx) => (
            <PlaylistItem
              key={idx}
              currentUserPlaylists={page.items}
              handleClick={handleClick}
            />
          ))}
          <div ref={ref} style={{ height: "1px" }}>
            {isFetchingNextPage ? (
              <LoadingSpinner />
            ) : (
              hasNextPage && <LoadingSpinner />
            )}
          </div>
        </>
      )}
    </ContentBox>
  );
};

export default Library;
