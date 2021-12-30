import { createEffect, createStore, createEvent } from 'effector';
import { authApi } from '../api/auth';
import router from '../router';

const register = createEffect(async (user) => {
  const { data: loginData } = await authApi.register(user);
  if (!loginData?.token) return;
  localStorage.setItem('token', JSON.stringify(loginData.token));

  const { data: userData } = await authApi.fetchCurrentUser();
  if (userData) {
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  }
});

const login = createEffect(async (user) => {
  const { data: loginData } = await authApi.login(user);
  if (!loginData?.token) return;
  localStorage.setItem('token', JSON.stringify(loginData.token));

  const { data: userData } = await authApi.fetchCurrentUser();
  if (userData) {
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  }
});

const logout = createEvent();
const initCurrentUser = createEvent();

const $user = createStore({})
  .on(register.doneData, (_, user) => {
    router.push('/');
    return user;
  })
  .on(login.doneData, (_, user) => {
    router.push('/');
    return user;
  })
  .on(initCurrentUser, () => {
    return JSON.parse(localStorage.getItem('user'));
  })
  .on(logout, async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    await router.push('/sign-in');
  });

export const authStore = {
  $user,
  register,
  login,
  logout,
  initCurrentUser,
};
