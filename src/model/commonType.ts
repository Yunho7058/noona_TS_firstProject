export interface TExternalUrls {
  spotipy: string;
}

export interface TImage {
  url: string;
  height: number | null;
  width: number | null;
}
export interface TRestrictions {
  reason?: string;
}

export interface TFollowers {
  href: string | null;
  total: number;
}
export interface TExplicitContent {
  filter_enabled?: boolean;
  filter_locked?: boolean;
}
