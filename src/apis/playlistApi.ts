import {
  TAddPlaylistTrackRes,
  TCreatePlaylistRequest,
  TGetCurrentUserPlaylistRequest,
  TGetCurrentUserPlaylistResponse,
  TGetPlaylistItemsRequst,
  TGetplaylistItemsResponce,
  TGetPlaylistRequest,
  TPlaylistResponse,
  TPlaylistTrack,
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

export const createPlaylist = async (
  user_id: string,
  params: TCreatePlaylistRequest
): Promise<TPlaylistResponse> => {
  try {
    const { name, playlisyPublic, collaborative, description } = params;
    const response = await api.post(`/users/${user_id}/playlists`, {
      name,
      public: playlisyPublic,
      collaborative,
      description,
    });
    return response.data;
  } catch (error) {
    throw new Error("플레이 리스트 생성 페일");
  }
};

export const addPlaylistItem = async ({
  playlistId,
  uris,
  position,
}: {
  playlistId: string;
  uris: string[];
  position?: number;
}): Promise<TAddPlaylistTrackRes> => {
  const body = { uris, ...(position !== undefined && { position }) };
  try {
    //console.log(playlistId, uris, body);
    //앞뒤 추가되는 위치 지정
    const response = await api.post(`/playlists/${playlistId}/tracks`, body);
    return response.data;
  } catch {
    throw new Error("플레이리스트 트랙 추가 페일");
  }
};
