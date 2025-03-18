import { queryOptions } from '@tanstack/react-query';
import { getBooks } from './getBook';

export const bookQueries = {
  all: () => ['books'],

  search: ({
    query,
    fields,
    sort,
    limit = 10,
    offset,
    page,
    lang,
  }: {
    query?: string;
    fields?: Record<string, string>;
    sort?: string;
    limit?: number;
    offset?: number;
    page?: number;
    lang?: string;
  }) =>
    queryOptions({
      queryKey: [...bookQueries.all(), 'search', query, fields, sort, limit, offset, page, lang],
      queryFn: () => getBooks(query, fields, sort, limit, offset, page, lang),
    }),
};
