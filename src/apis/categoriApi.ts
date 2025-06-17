import axios from "axios";
import { TGetCategoryApiResponse } from "../model/category";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";

export const getCategory = async (
  clientCredentialToken: string
): Promise<TGetCategoryApiResponse> => {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/browse/categories`, {
      headers: {
        Authorization: `Bearer ${clientCredentialToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("카테고리 불러오기 실패");
  }
};
