import { openLibraryApi } from '@/shared/api';

export const getBooks = async (
  query?: string,
  fields?: Record<string, string>,
  sort?: string,
  limit?: number,
  offset?: number,
  page?: number,
  lang?: string,
) => {
  const params = new URLSearchParams();

  if (query) params.set('q', query);
  if (lang) params.set('lang', lang);
  if (sort) params.set('sort', sort);
  if (page) params.set('page', String(page));
  if (offset) params.set('offset', String(offset));
  if (limit) params.set('limit', String(limit));

  Object.entries(fields || {}).forEach(([key, value]) => {
    params.set(key, value);
  });

  const { data } = await openLibraryApi.get(`/search.json?${params.toString()}`);
  return data;
};
