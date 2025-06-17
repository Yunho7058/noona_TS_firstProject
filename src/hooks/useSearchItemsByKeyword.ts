import { useInfiniteQuery } from "@tanstack/react-query";
import { searchItemsByKeyword } from "../apis/searchApi";
import { TSearchReqParams } from "../model/search";
import { useClientCredentialToken } from "./useClientCredentialToken";

const useSearchItemsByKeyword = (params: TSearchReqParams) => {
  const clientCredentialToken = useClientCredentialToken();
  return useInfiniteQuery({
    queryKey: ["search", params],
    queryFn: ({ pageParam = 0 }) => {
      if (!clientCredentialToken)
        throw new Error("검색에 필요한 토큰 확인해주세요");
      return searchItemsByKeyword(clientCredentialToken, {
        ...params,
        offset: pageParam,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPageUrl =
        lastPage.tracks?.next ||
        lastPage.artists?.next ||
        lastPage.albums?.next ||
        lastPage.playlists?.next ||
        lastPage.shows?.next ||
        lastPage.episodes?.next ||
        lastPage.audiobooks?.next;

      if (nextPageUrl) {
        const nextOffset = new URL(nextPageUrl).searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }

      return undefined;
    },
    enabled: !!params.q,
  });
};

export default useSearchItemsByKeyword;
