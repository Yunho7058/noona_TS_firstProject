import { useQuery } from "@tanstack/react-query";

const useGetNewReleases = () => {
  return useQuery({
    queryKey: ["new-releases"], // 고유한 아이디
    queryFn: async () => {
      //   return getNewReleases();
    },
  });
};
