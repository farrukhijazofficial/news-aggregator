import axios from 'axios';
import type { NewsFeedApiResponse } from '@/types/common.ts';

const fetchArticles = async (filters: any, searchTerm: string) => {
  let apiUrl = `https://newsapi.org/v2/everything?apiKey=${import.meta.env.VITE_NEWS_API_KEY}&sortBy=publishedAt`;

  if (searchTerm) {
    apiUrl += `&q=${searchTerm}`;
  }

  if (filters.category) {
    apiUrl = apiUrl?.replace('/everything', '/top-headlines');
    apiUrl += `&category=${filters.category}`;
  }

  if (filters.from) {
    apiUrl += `&from=${filters.from}`;
  }

  if (filters.to) {
    apiUrl += `&to=${filters.to}`;
  }

  if (filters.source) {
    apiUrl += `&domains=${filters.source}`;
  }

  return axios.get<NewsFeedApiResponse>(apiUrl);
};

export default fetchArticles;