import { TSimplifiedAlbum } from "./album";
import { TApitResponse } from "./apiResponse";
import { TArtist } from "./artist";
import { TPlaylistResponse } from "./playlist";
import {
  TEpisode,
  TShow,
  TSimplifiedAudioBook,
  TSimplifiedEposode,
  TTrack,
} from "./track";

export const enum SEARCH_TYPE {
  Album = "album",
  Artist = "artist",
  Platlist = "playlist",
  Track = "track",
  Show = "show",
  Episode = "episode",
  Audiobook = "audiobook",
}

export interface TSearchReqParams {
  q: string;
  type: SEARCH_TYPE[];
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: string;
}

export interface TSearchResponse {
  artists?: TApitResponse<TArtist>;
  albums?: TApitResponse<TSimplifiedAlbum>;
  tracks?: TApitResponse<TTrack>;
  playlists?: TApitResponse<TPlaylistResponse>;
  shows?: TApitResponse<TShow>;
  episodes?: TApitResponse<TSimplifiedEposode>;
  audiobooks?: TApitResponse<TSimplifiedAudioBook>;
}
