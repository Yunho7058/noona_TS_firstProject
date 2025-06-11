import {
  TGetCurrentUserPlaylistRequest,
  TGetCurrentUserPlaylistResponse,
  TGetPlaylistItemsRequst,
  TGetplaylistItemsResponce,
  TGetPlaylistRequest,
  TPlaylistResponse,
} from "../model/playlist";
import api from "../utils/api";

export const getCurrenUserPlaylists = async ({
  limit,
  offset,
}: TGetCurrentUserPlaylistRequest): Promise<TGetCurrentUserPlaylistResponse> => {
  try {
    const response = await api.get(`/me/playlists`, {
      params: { offset, limit },
    });
    return response.data;
  } catch (error) {
    throw new Error("fail to fetch current user playlists");
  }
};

export const getPlaylist = async (
  params: TGetPlaylistRequest
): Promise<TPlaylistResponse> => {
  try {
    const response = await api.get(`/playlists/${params.playlist_id}`, {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error("fali to fetch playlist detail ");
  }
};

export const getPlaylistItems = async (
  params: TGetPlaylistItemsRequst
): Promise<TGetplaylistItemsResponce> => {
  try {
    const { offset = 0, limit = 10 } = params;
    const response = await api.get(
      `/playlists/${params.playlist_id}/tracks?offset=${offset}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error("디테일 플레이 리스트 아이템 페일");
  }
};
