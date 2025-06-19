import { useQuery } from "@tanstack/react-query";
import { useClientCredentialToken } from "./useClientCredentialToken";
import { getAlbums } from "../apis/albumApi";

export const useGetAlbums = (ids: string[]) => {
  const clientCredentialToken = useClientCredentialToken();
  return useQuery({
    queryKey: ["all-albums"],
    queryFn: async () => {
      if (!clientCredentialToken) {
        throw new Error("No token available");
      }
      return getAlbums(clientCredentialToken, ids);
    },
  });
};
