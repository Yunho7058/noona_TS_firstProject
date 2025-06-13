import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { TSearchReqParams, TSearchResponse } from "../model/search";

export const searchItemsByKeyword = async (
  token: string,
  params: TSearchReqParams
): Promise<TSearchResponse> => {
  try {
    const searchParams = new URLSearchParams();
    //받아온 파람스 분리해서 서버로 보내주기
    searchParams.append("q", params.q);
    searchParams.append("type", params.type.join(","));
    if (params.limit) searchParams.append("limit", params.limit.toString());
    if (params.offset) searchParams.append("limit", params.offset.toString());
    if (params.market) searchParams.append("limit", params.market);
    if (params.include_external)
      searchParams.append("include_external", params.include_external);
    const response = await axios.get(
      `${SPOTIFY_BASE_URL}/search?${searchParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("플레이 리스트 상세 페이지 노래 검색 오류");
  }
};
