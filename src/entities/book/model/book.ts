interface Doc {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  cover_i: number;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  ia: string[];
  ia_collection_s: string;
  key: string;
  language: string[];
  lending_edition_s: string;
  lending_identifier_s: string;
  public_scan_b: boolean;
  title: string;
}

export interface SearchBook {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: number | null;
  docs: Doc[];
}

type SearchBookFields =
  | 'author'
  | 'authors'
  | 'by'
  | 'number_of_pages'
  | 'publishers'
  | 'subtitle'
  | 'title'
  | 'work_subtitle'
  | 'work_title';

export interface SearchBookQueryParams {
  query?: string;
  fields?: Partial<Record<SearchBookFields, string>>;
  sort?: string;
  limit?: number;
  offset?: number;
  page?: number;
  lang?: string;
}
