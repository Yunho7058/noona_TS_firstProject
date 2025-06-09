import { TApitResponse } from "./apiResponse";
import { TExternalUrls, TImage, TOwner } from "./commonType";

export interface TGetCurrentUserPlaylistRequest {
  limit?: number;
  offset?: number;
}

export type TGetCurrentUserPlaylistResponse =
  TApitResponse<TSimplifiedPlaylist>;

export interface TSimplifiedPlaylist {
  collaborative?: boolean;
  description?: string;
  external_urls?: TExternalUrls;
  href?: string;
  id?: string;
  images?: TImage[];
  name?: string;
  owner: TOwner;
  public?: boolean;
  snapshot_id?: string;
  tracks?: {
    href?: string;
    total?: number;
  };
  type?: string;
  uri?: string;
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
