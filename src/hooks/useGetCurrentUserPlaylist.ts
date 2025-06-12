import { useInfiniteQuery } from "@tanstack/react-query";
import { getCurrenUserPlaylists } from "../apis/playlistApi";

const LIMIT = 10;
const useGetCurrentUserPlaylist = () => {
  const accessToken = localStorage.getItem("access_token");

  return useInfiniteQuery({
    queryKey: ["current-user-playlist"],
    queryFn: ({ pageParam = 0 }) =>
      getCurrenUserPlaylists({ limit: LIMIT, offset: pageParam }),

    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.next) return undefined;
      const url = new URL(lastPage.next);
      const nextOffset = url.searchParams.get("offset");
      return nextOffset ? parseInt(nextOffset, 10) : undefined;
    },
    retry: false,
    enabled: !!accessToken,
  });
};

export default useGetCurrentUserPlaylist;
