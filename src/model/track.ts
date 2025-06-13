import { TSimplifiedAlbum } from "./album";
import { TArtist } from "./artist";
import { TExternalUrls, TImage, TRestrictions } from "./commonType";

export interface TTrack {
  album?: TSimplifiedAlbum;
  artists?: TArtist[];
  available_markets?: string[]; // 재생 가능한 국가 코드 목록
  disc_number?: number; // 디스크 번호 (2CD 앨범 등)
  duration_ms?: number; // 재생 시간 (밀리초 단위)
  explicit?: boolean; // 노골적인 가사 여부
  external_ids?: {
    isrc: string; // 국제 표준 녹음 코드
    ean: string;
    upc: string;
  };
  external_urls?: TExternalUrls; // 외부 링크 (Spotify URL 등)
  href?: string; // Spotify API 내부 링크
  id?: string;
  is_playable?: boolean;
  linked_from?: TTrack; // 연결된 다른 트랙 정보
  restrictions?: TRestrictions; // 제한 사항

  name?: string; // 트랙 제목
  popularity?: number; // 인기도 (0~100)
  preview_url?: string | null; // 미리듣기 URL (30초)
  track_number?: number; // 앨범 내 트랙 번호
  type?: "track"; // 항상 "track"
  uri?: string; // Spotify URI
  is_local?: boolean;
}

export interface TEpisode {
  description: string;
  html_description: string;

  duration_ms: number;
  explicit: boolean;
  external_urls: TExternalUrls;
  href: string;
  id: string;
  images: TImage[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  type: "episode"; // 고정 리터럴 타입
  uri: string;
  resume_point?: {
    fully_played?: boolean;
    resume_position_ms?: number;
  };
  restrictions?: TRestrictions;
  show: TShow;
}

export interface TShow {
  available_markets: string[];
  copyrights: {
    text?: string;
    type?: string;
  };
  description: string;
  explicit: boolean;
  html_description: string;
  external_urls: TExternalUrls;
  href: string;
  id: string;
  images: TImage[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: "show";
  uri: string;
  total_episodes: number;
}

export type TSimplifiedEposode = Omit<TEpisode, "show">;

export interface TSimplifiedAudioBook {
  authors: { name: string }[];
  available_markets: string[];
  copyrights: CopyrightObject[];
  description: string;
  html_description: string;
  edition?: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: TImage[];
  languages: string[];
  media_type: string;
  name: string;
  narrators: { name: string }[];
  publisher: string;
  type: "audiobook";
  uri: string;
  total_chapters: number;
}
export interface CopyrightObject {
  text: string;
  type: "C" | "P";
}
