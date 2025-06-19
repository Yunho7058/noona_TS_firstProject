import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import {
  TGetAlbumsResponse,
  TGetNewReleasesResponse,
  TSimplifiedAlbum,
} from "../model/album";
import { data } from "react-router";
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

export const getAlbums = async (
  clientCredentialToken: string,
  ids: string[]
): Promise<TGetAlbumsResponse> => {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/albums`, {
      params: {
        ids: ids.join(","),
      },
      headers: { Authorization: `Bearer ${clientCredentialToken}` },
    });
    return response.data;
  } catch (err) {
    throw new Error("전체 앨범 불러오기 실패");
  }
};

export const getTracks = async (clientCredentialToken: string) => {
  try {
  } catch (err) {
    throw new Error("전체 트랙 불러오기 실패");
  }
};
