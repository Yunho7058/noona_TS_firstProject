import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { TUser } from "../model/user";
import api from "../utils/api";

export const getCurrentUserProfile = async (): Promise<TUser> => {
  try {
    const response = await api.get(`${SPOTIFY_BASE_URL}/me`);
    return response.data;
  } catch (error) {
    throw new Error("fail to fetch user profile");
  }
};
/*
import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { TUser } from "../model/user";
import api from "../utils/api";

export const getCurrentUserProfile = async (): Promise<TUser> => {
  try {
    const response = await api.get(`/me`);
    return response.data;
  } catch (error) {
    throw new Error("fail to fetch user profile");
  }
};
*/
