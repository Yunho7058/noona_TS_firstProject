import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../apis/categoriApi";
import { useClientCredentialToken } from "./useClientCredentialToken";

const useGetCategory = () => {
  const clientCredentialToken = useClientCredentialToken();
  const isEnabled = !!clientCredentialToken;
  return useQuery({
    queryKey: ["categori-get"],
    queryFn: () => {
      if (!clientCredentialToken) throw new Error("토큰 발급 실패");
      return getCategory(clientCredentialToken);
    },
    enabled: isEnabled,
  });
};

export default useGetCategory;
