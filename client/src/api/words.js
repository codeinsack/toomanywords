import axios from 'axios';

const baseUrl = `/api/v1/words`;

const fetchWords = async () => {
  const url = `${baseUrl}`;
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
    return error;
  }
};

const createWord = async (body) => {
  const url = `${baseUrl}`;
  try {
    return await axios.post(url, body);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const wordsApi = { fetchWords, createWord };
