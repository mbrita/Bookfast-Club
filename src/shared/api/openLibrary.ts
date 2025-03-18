import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

export const openLibraryApi = axios.create({
  baseURL: BASE_URL,
});
