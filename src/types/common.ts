type Source = {
  id?: string | null;
  name: string;
};

export type Article = {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: Source;
};

export type NewsFeedApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};