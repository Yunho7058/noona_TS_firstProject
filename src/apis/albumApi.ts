import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { TGetNewReleasesResponse } from "../model/album";
// https://api.spotify.com/v1
// 지금 받아오는 데이터 많고, 타입을 지정해줘야함
export const getNewReleases = async (
  clientCredentialToken: string
): Promise<TGetNewReleasesResponse> => {
  try {
    const response = await axios.get(
      `${SPOTIFY_BASE_URL}/browse/new-releases?limit=6`,
      {
        headers: { Authorization: `Bearer ${clientCredentialToken}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("fail to fetch new releases");
  }
};
