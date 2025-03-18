import { queryOptions } from '@tanstack/react-query';
import { getBooks } from './getBook';
import { SearchBookQueryParams } from '../model/book';

export const bookQueries = {
  all: () => ['books'],

  search: ({ query, fields, sort, limit = 10, offset, page, lang }: SearchBookQueryParams) =>
    queryOptions({
      queryKey: [...bookQueries.all(), 'search', query, fields, sort, limit, offset, page, lang],
      queryFn: () => getBooks({ query, fields, sort, limit, offset, page, lang }),
    }),
};
