import { createEffect, createStore } from 'effector';
import { authApi } from '../api/auth';
import router from '../router';

const register = createEffect(async (user) => {
  const { data } = await authApi.register(user);
  return data;
});

const login = createEffect(async (user) => {
  const { data } = await authApi.login(user);
  return data;
});

const $user = createStore(null)
  .on(register.doneData, (_, user) => {
    console.log('user', user);
  })
  .on(login.doneData, async (_, user) => {
    if (!user?.token) return;
    localStorage.setItem('token', JSON.stringify(user.token));

    const { data } = await authApi.fetchCurrentUser(user);
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
      await router.push('/');
      return { ...data, user };
    }
  });

export const authStore = {
  $user,
  register,
  login,
};
