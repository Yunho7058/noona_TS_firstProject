import {
  TExplicitContent,
  TExternalUrls,
  TFollowers,
  TImage,
} from "./commonType";

export interface TUser {
  country?: string;
  display_name?: string;
  email?: string;
  explicit_content: TExplicitContent;
  external_urls: TExternalUrls;
  followers: TFollowers;
  href?: string;
  id?: string;
  images: TImage[];
  product?: string;
  type?: string;
  uri?: string;
}
