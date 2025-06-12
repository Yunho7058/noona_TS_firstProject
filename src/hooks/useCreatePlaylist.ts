import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createPlaylist } from "../apis/playlistApi";
import useGetUserProfile from "./useGetUserProfile";
import { TCreatePlaylistRequest } from "../model/playlist";

const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  const { data: user } = useGetUserProfile();
  return useMutation({
    mutationFn: (params: TCreatePlaylistRequest) => {
      if (user?.id) {
        return createPlaylist(user.id, params);
      }
      return Promise.reject(new Error("uesr is not defind "));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user-playlist"] });
    },
  });
};

export default useCreatePlaylist;
