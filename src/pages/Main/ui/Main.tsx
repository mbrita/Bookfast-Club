import { bookQueries } from '@/entities/book';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export const Main = () => {
  const { data: books } = useQuery(
    bookQueries.search({
      query: 'Harry Potter',
      fields: { author: 'J.K. Rowling' },
      sort: 'rating desc',
      limit: 10,
      offset: 0,
      page: 1,
      lang: 'en',
    }),
  );

  return (
    <>
      <h1>Welcome home!</h1>
      <Typography>{books && books.docs[0].title}</Typography>
    </>
  );
};
