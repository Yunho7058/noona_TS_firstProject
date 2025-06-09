import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCurrenUserPlaylists } from "../apis/playlistApi";
import { TGetCurrentUserPlaylistRequest } from "../model/playlist";

const useGetCurrentUserPlaylist = ({
  limit,
  offset,
}: TGetCurrentUserPlaylistRequest) => {
  return useInfiniteQuery({
    queryKey: ["current-uesr-playlist"],
    queryFn: ({ pageParam = 0 }) => {
      return getCurrenUserPlaylists({ limit, offset: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      // 이값에 리턴값이 pageParam
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const nextOffset = url.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
      return undefined;
    },
  });
};

export default useGetCurrentUserPlaylist;
