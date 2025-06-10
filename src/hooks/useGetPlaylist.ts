import { useQuery } from "@tanstack/react-query";
import { TGetPlaylistRequest } from "../model/playlist";
import { getPlaylist } from "../apis/playlistApi";

export const useGetPlaylist = (params: TGetPlaylistRequest) => {
  return useQuery({
    queryKey: ["playlist-detail", params.playlist_id],
    queryFn: () => {
      return getPlaylist(params);
    },
    enabled: !!params.playlist_id,
  });
};
