import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//      --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=ae8fa6e23866cb34a49337b233547834'

const tmdbApiKey = process.env.TMDB_KEY;
const page = 1;

export const tmbdApi = createApi({
  reducerPath: 'tmbdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Movies by [Type]
    getMovies: builder.query({
      query: () => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
} = tmbdApi;
