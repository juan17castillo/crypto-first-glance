import { createApi, fetchBaseQuery } from '@reduxjs/toolkit';

const cryptoAPIHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '9d0d28e885msh976a6a4ed57ba98p15965fjsn9393394d740b',
};

const baseURL = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({
  url,
  headers: cryptoAPIHeaders,
});
export const cryptoAPI = createApi({
  reducerPath: 'cryptoAPI',
  baseQuery: fetchBaseQuery({ baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});
