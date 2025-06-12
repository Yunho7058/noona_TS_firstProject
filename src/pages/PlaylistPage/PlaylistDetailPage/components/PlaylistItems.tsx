import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import useGetPlaylistItems from "../../../../hooks/useGetPlaylistItems";
import DesktopPlaylistItem from "./DesktopPlaylistItem";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../../../../common/components/util/LoadingSpinner";

const PlaylistItems = ({ paramsId }: { paramsId: string }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const {
    data: playItems,
    isLoading: isPlaylistItemsLoading,
    error: platlistItemsErr,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetPlaylistItems({ playlist_id: paramsId, limit: 10 });
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // console.log(playItems?.pages[0].items);
  return (
    <Box
      sx={{
        maxHeight: "600px",
        overflow: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>앨범</TableCell>
            <TableCell>추가된 날짜</TableCell>
            <TableCell>재생 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playItems?.pages.map((page, pageIdx) =>
            page.items.map((item, itemIdx) => (
              <DesktopPlaylistItem
                item={item}
                key={pageIdx * 10 + itemIdx + 1}
                index={pageIdx * 10 + itemIdx + 1}
              />
            ))
          )}
          {hasNextPage && (
            <TableRow ref={ref}>
              <TableCell colSpan={5} align="center">
                {isFetchingNextPage && <LoadingSpinner />}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PlaylistItems;
