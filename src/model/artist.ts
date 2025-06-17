import { TExternalUrls, TImage } from "./commonType";

export interface TArtist {
  external_urls?: TExternalUrls;
  href?: string;
  id?: string;
  name?: string;
  tpye?: string;
  uri?: string;
  image?: TImage[];
}
