'use strict';
import axios from 'axios';
export const limit = 15


export async function fetchIcon(query, page) {
  const params = new URLSearchParams({
      key: '42773289-557706e6fefb377aba1f00ed4',
      q: query,
      per_page: limit,
      page: page
  });

  const BASE_URL = 'https://pixabay.com/api/';
  const response = await axios.get(`${BASE_URL}?${params}`);

  return {
      hits: response.data.hits,
      totalHits: response.data.totalHits
  };
}