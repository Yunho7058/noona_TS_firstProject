export interface TGetCategoryRequest {
  locale?: string;
  limit?: number;
  offset?: number;
}

export interface TGetCategoryApiResponse {
  categories: TGetCategoryResponse;
}

export interface TGetCategoryResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: TCategory[];
}

export interface TCategory {
  href: string;
  icons: {
    url: string;
    height: number | null;
    width: number | null;
  }[];
  id: string;
  name: string;
}
