import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../apis/userApi";
import { TUser } from "../model/user";

const useGetUserProfile = (): UseQueryResult<TUser, Error> => {
  const accseeToken = localStorage.getItem("access_token");
  return useQuery({
    queryKey: ["current-user-profile"],
    queryFn: getCurrentUserProfile,
    enabled: !!accseeToken, // 토큰이 있을때만 이함수 사용
  });
};

export default useGetUserProfile;
