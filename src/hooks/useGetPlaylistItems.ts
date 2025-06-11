import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { TGetPlaylistItemsRequst } from "../model/playlist";
import { TTrack } from "../model/track";
import { getPlaylistItems } from "../apis/playlistApi";

const useGetPlaylistItems = (params: TGetPlaylistItemsRequst) => {
  return useInfiniteQuery({
    queryKey: ["playlist-items", params],
    queryFn: ({ pageParam }) => {
      return getPlaylistItems({ offset: pageParam, ...params });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.next) return undefined;
      const url = new URL(lastPage.next);
      const nextOffset = url.searchParams.get("offset");
      return nextOffset ? parseInt(nextOffset, 10) : undefined;
    },
    retry: false,
  });
};

export default useGetPlaylistItems;
