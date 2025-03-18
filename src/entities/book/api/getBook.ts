import { openLibraryApi } from '@/shared/api';
import { SearchBookQueryParams, SearchBook } from '../model/book';

export const getBooks = async ({
  query,
  fields,
  sort,
  limit,
  offset,
  page,
  lang,
}: SearchBookQueryParams): Promise<SearchBook> => {
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
