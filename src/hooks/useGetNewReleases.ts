import { useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../apis/albumApi";
import { useClientCredentialToken } from "./useClientCredentialToken";

export const useGetNewReleases = () => {
  const clientCredentialToken = useClientCredentialToken();
  return useQuery({
    queryKey: ["new-releases"], // 고유한 아이디
    queryFn: async () => {
      if (!clientCredentialToken) {
        throw new Error("No token available 여기");
      }
      return getNewReleases(clientCredentialToken);
    },
    //enabled: !!clientCredentialToken, // 토큰이 있어야만 요청 실행
  });
};
