//토큰 가져오는 api , 나의 아이디와 비밀번호 알려주고, 토큰 받아옴

import axios from "axios";
// import { URLSearchParams } from "url"; Node.js 방식
import { CLIENT_SECRET, CLIENT_ID } from "../configs/authConfig";
import {
  TClientCredentialTokenResponse,
  TExchangTokenResponse,
} from "../model/auth";
import { REDIRECT_URI } from "../configs/commonConfig";
import { ExclamationToken } from "typescript";

const encodeBase64 = (data: string): string => {
  if (typeof window !== "undefined") {
    //브라우저 환경
    return btoa(data);
  } else {
    return Buffer.from(data).toString("base64");
  }
};

export const getClientCredentialToken =
  async (): Promise<TClientCredentialTokenResponse> => {
    try {
      // URLSearchParams는 브라우저에서 기본으로 제공하는 전역 객체
      const body = new URLSearchParams({
        grant_type: "client_credentials",
      });
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        body,
        {
          headers: {
            Authorization: `Basic ${encodeBase64(
              CLIENT_ID + ":" + CLIENT_SECRET
            )}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error("Fail to fetch client credential token");
    }
  };

export const exchangeToken = async (
  code: string,
  codeVerifier: string
): Promise<TExchangTokenResponse> => {
  try {
    const url = "https://accounts.spotify.com/api/token";
    if (!CLIENT_ID || !REDIRECT_URI) {
      throw new Error("Missing required parameters");
    }
    const body = new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    });
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("fail to fetch token");
  }
};
