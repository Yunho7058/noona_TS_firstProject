import React, { useState } from "react";
import { TTrack } from "../../../../model/track";
import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import useAddPlaylistItem from "../../../../hooks/useAddPlaylistItem";
import { useParams } from "react-router";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderRadius: "100px",
    cursor: "pointer",
  },
  "& .MuiTableCell-root": {
    borderBottom: "none",
  },
}));
const AlbumImage = styled("img")({
  borderRadius: "4px",
  marginRight: "12px",
});

export const SearchResultList = ({ list }: { list: TTrack[] }) => {
  // const [playlistId, setPlaylistId] = useState(list[0].id);
  const { id: playlistId } = useParams<{ id: string }>();

  const { mutate: addPlaylistItem } = useAddPlaylistItem(playlistId);
  const handleTrackAdd = (track: TTrack) => {
    // 예: props로 받은 값
    if (!playlistId || !track.uri) return;
    //console.log("playlistId", list[0].id, "uris", [track.uri]);
    addPlaylistItem({
      playlistId,
      uris: [track.uri],
    });
  };
  return (
    <Table
      sx={{
        maxHeight: "600px",
        overflow: "hidden",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <TableBody sx={{ borderRadius: "50px" }}>
        {list.map((track) => (
          <StyledTableRow key={track.id}>
            <TableCell>
              <Box display="flex" alignItems="center">
                <Box>
                  <AlbumImage src={track.album?.images[0].url} width="40px" />
                </Box>
                <Box>
                  <Typography fontWeight={700}>{track.name}</Typography>
                  <Typography color="text.secondary">
                    {track.artists ? track.artists[0].name : "Unknown Artist"}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>{track.album?.name}</TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  handleTrackAdd(track);
                }}
              >
                추가하기
              </Button>
            </TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};
