import { S } from "react-router/dist/development/register-BkDIKxVz";
import { TExternalUrls, TImage, TRestrictions } from "./commonType";
import { TArtist } from "./artist";

export interface TGetNewReleasesResponse {
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
    items: TSimplifiedAlbum[];
  };
}

export interface TSimplifiedAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: TExternalUrls;
  href: string;
  id: string;
  images: TImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: TRestrictions;
  type: string;
  uri: string;
  artists: TArtist[];
}
