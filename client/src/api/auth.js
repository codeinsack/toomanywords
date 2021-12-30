import axios from 'axios';

const baseUrl = `/api/v1/auth`;

const login = async ({ email, password }) => {
  const url = `${baseUrl}/login`;
  try {
    return await axios.post(url, {
      email,
      password,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

const register = async ({ username, email, password }) => {
  const url = `${baseUrl}/register`;
  try {
    return await axios.post(url, {
      username,
      email,
      password,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

const fetchCurrentUser = async () => {
  const url = `${baseUrl}/me`;
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const authApi = { login, register, fetchCurrentUser };
