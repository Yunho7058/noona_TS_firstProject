import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPlaylistItem } from "../apis/playlistApi";

/*

      addPlaylistItem({
        playlistId: list[0].id,
        uris: [track.uri],
     
*/

const useAddPlaylistItem = (playlist_id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPlaylistItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["playlist-items", { playlist_id }],
      });
      //["playlist-items", params] ,{playlist_id}
    },
  });
};

export default useAddPlaylistItem;
