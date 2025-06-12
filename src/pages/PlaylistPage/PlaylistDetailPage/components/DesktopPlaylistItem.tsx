import React from "react";
import { TPlaylistTrack } from "../../../../model/playlist";
import { Box, TableCell, TableRow } from "@mui/material";
import { TEpisode, TTrack } from "../../../../model/track";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";

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

  dayjs.extend(utc);
  dayjs.extend(timezone);
  const formatDuration = (ms: number | undefined) => {
    if (typeof ms === "number") {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
    return false;
  };

  return (
    <TableRow
      sx={{
        "& td": { border: 0 },
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
      <TableCell>
        {dayjs
          .utc(item.added_at)
          .tz("Asia/Seoul")
          .format("YYYY년 MM월 DD일 HH:mm") || "알수 없음"}
      </TableCell>
      <TableCell>
        {formatDuration(item.track.duration_ms) || "알수 없음"}
      </TableCell>
    </TableRow>
  );
};

export default DesktopPlaylistItem;
