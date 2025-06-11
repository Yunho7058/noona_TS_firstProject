import React from "react";
import { TPlaylistTrack } from "../../../../model/playlist";
import { Box, TableCell, TableRow } from "@mui/material";
import { TEpisode, TTrack } from "../../../../model/track";

const DesktopPlaylistItem = ({
  item,
  index,
}: {
  item: TPlaylistTrack;
  index: number;
}) => {
  const isEpisode = (track: TTrack | TEpisode): track is TEpisode => {
    return "description" in track;
  };
  return (
    <TableRow
      sx={{
        borderBottom: "none",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          cursor: "pointer",
        },
      }}
    >
      <TableCell>{index}</TableCell>
      <TableCell>{item.track.name || "이름 없음"}</TableCell>
      <TableCell>
        {isEpisode(item.track) ? "N/A" : item.track.album?.name}
      </TableCell>
      <TableCell>{item.added_at || "알수 없음"}</TableCell>
      <TableCell>{item.track.duration_ms || "알수 없음"}</TableCell>
    </TableRow>
  );
};

export default DesktopPlaylistItem;
