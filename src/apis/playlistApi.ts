import {
  TGetCurrentUserPlaylistRequest,
  TGetCurrentUserPlaylistResponse,
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

// export const getPlaylistItems = async () => {
//   try {
//     // /playlists/{playlist_id}/tracks
//     const response = await api.get(`/playlists/${playlist_id}/tracks`);
//   } catch (error) {
//     throw new Error("fail to fetch playlist item");
//   }
// };
