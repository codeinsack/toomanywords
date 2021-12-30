import axios from 'axios';

const baseUrl = `/api/v1/words`;

const fetchWords = async () => {
  const url = `${baseUrl}`;
  return await axios.get(url);
};

const createWord = async (body) => {
  const url = `${baseUrl}`;
  return await axios.post(url, body);
};

export const wordsApi = { fetchWords, createWord };
