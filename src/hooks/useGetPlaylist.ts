import { useQuery } from "@tanstack/react-query";
import { TGetPlaylistRequest, TPlaylistResponse } from "../model/playlist";
import { getPlaylist } from "../apis/playlistApi";
import { AxiosError } from "axios";

export const useGetPlaylist = (params: TGetPlaylistRequest) => {
  return useQuery<TPlaylistResponse, AxiosError>({
    queryKey: ["playlist-detail", params.playlist_id],
    queryFn: () => {
      return getPlaylist(params);
    },
    enabled: !!params.playlist_id,
  });
};
