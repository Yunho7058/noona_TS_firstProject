import { TApitResponse } from "./apiResponse";
import { TExternalUrls, TFollowers, TImage, TOwner } from "./commonType";
import { TEpisode, TTrack } from "./track";

export interface TGetCurrentUserPlaylistRequest {
  limit?: number;
  offset?: number;
}

export type TGetCurrentUserPlaylistResponse =
  TApitResponse<TSimplifiedPlaylist>;

export interface TBasePlaylist {
  collaborative: boolean;
  description: string | null;
  external_urls?: TExternalUrls;
  href: string;
  id: string;
  images?: TImage[];
  name: string;
  owner: TOwner;
  public: boolean | null;
  snapshot_id: string;
  type: "playlist";
  uri: string;
}

export interface TSimplifiedPlaylist extends TBasePlaylist {
  tracks?: {
    href?: string;
    total?: number;
  };
}

export interface TPlaylistResponse extends TBasePlaylist {
  tracks: TApitResponse<TPlaylistTrackObject>;
  folowers: TFollowers;
}

export interface TPlaylistTrackObject {
  added_at: string | null;
  added_by: TUserObject | null;
  is_local: boolean;
  track: null;
}

export interface TUserObject {
  external_urls: TExternalUrls;
  href: string;
  id: string;
  type: "user";
  uri: string;
  display_name: string | null;
}
export interface TGetPlaylistRequest {
  playlist_id: string;
  market?: string;
  fields?: string;
  additional_types?: string;
}

export interface TGetPlaylistItemsRequst extends TGetPlaylistRequest {
  offset?: number;
  limit?: number;
}
export type TGetplaylistItemsResponce = TApitResponse<TPlaylistTrack>;

export interface TPlaylistTrack {
  added_at?: string | null;
  added_by?: {
    id?: string;
    followers?: TFollowers;
    type?: string;
    uri?: string;
    external_urls?: TExternalUrls;
    href?: string;
  } | null;
  is_local?: boolean;
  track: TTrack | TEpisode;
}

export interface TCreatePlaylistRequest {
  name: string;
  playlisyPublic?: string;
  collaborative?: boolean;
  description?: string;
}

/*
export interface SpotifyPlaylistTracksResponse {
  href: string;
  items: PlaylistTrackItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PlaylistTrackItem {
  added_at: string;
  added_by: {
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  track: Track;
}

export interface Track {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  id: string;
  name: string;
  preview_url: string | null;
  uri: string;
}


*/
