import { createEffect, createStore } from 'effector';
import { authApi } from '../api/auth';

const register = createEffect(async (user) => {
  const { data } = await authApi.register(user);
  return data;
});

const login = createEffect(async (user) => {
  const { data } = await authApi.login(user);
  return data;
});

const $user = createStore(null)
  .on(register, (_, user) => {
    console.log('_', _);
    console.log('user', user);
  })
  .on(login, (_, user, c) => {
    console.log('_', _);
    console.log('user', user);
    console.log('c', c);
  });

export const authStore = {
  $user,
  register,
  login,
};
