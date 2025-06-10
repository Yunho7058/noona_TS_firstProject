import {
  TGetCurrentUserPlaylistRequest,
  TGetCurrentUserPlaylistResponse,
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

// export const getPlaylistItems = async () => {
//   try {
//     // /playlists/{playlist_id}/tracks
//     const response = await api.get(`/playlists/${playlist_id}/tracks`);
//   } catch (error) {
//     throw new Error("fail to fetch playlist item");
//   }
// };
