import {
  TGetplaylistItemsResponce,
  TPlaylistTrack,
} from "../../../../model/playlist";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { TEpisode, TTrack } from "../../../../model/track";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
const MobilePlaylistItem = ({
  playlistItem,
}: {
  playlistItem: TGetplaylistItemsResponce;
}) => {
  const isEpisode = (track: TTrack | TEpisode): track is TEpisode => {
    return "description" in track;
  };
  console.log(playlistItem.items[0].track);
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 400,
        borderRadius: "16px",
        backgroundColor: "#111",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <List>
        {playlistItem.items.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                src={
                  isEpisode(item.track) ? "" : item.track.album?.images[0].url
                }
                alt={item.track.name}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography fontWeight={600} color="#B3F786">
                  {item.track.name || "이름 없음"}
                </Typography>
              }
              secondary={
                <Typography color="gray" variant="body2">
                  {isEpisode(item.track) ? "N/A" : item.track.album?.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default MobilePlaylistItem;
