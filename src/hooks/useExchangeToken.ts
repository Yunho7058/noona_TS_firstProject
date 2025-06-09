import { useMutation, useQueryClient } from "@tanstack/react-query";
import { exchangeToken } from "../apis/authApi";
import { TExchangTokenResponse } from "../model/auth";

const useExchangeToken = () => {
  const queryClient = useQueryClient();
  return useMutation<
    TExchangTokenResponse,
    Error,
    { code: string; codeVerifier: string }
  >({
    //응답값 타입,에러,함수 파라미터값 , useMutation 쓰기전 제네릭으로 미리 타입 지정 필요
    mutationFn: ({ code, codeVerifier }) => exchangeToken(code, codeVerifier),
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      queryClient.invalidateQueries({
        queryKey: ["current-user-profile"],
      });
    },
  });
};
export default useExchangeToken;
