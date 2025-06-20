import { useQuery } from "@tanstack/react-query";
import { useClientCredentialToken } from "./useClientCredentialToken";
import { getAlbums } from "../apis/albumApi";

export const useGetAlbums = (id: string) => {
  const clientCredentialToken = useClientCredentialToken();
  return useQuery({
    queryKey: ["all-albums", id],
    queryFn: async () => {
      if (!clientCredentialToken) {
        throw new Error("No token available");
      }
      return getAlbums(clientCredentialToken, id);
    },
  });
};
