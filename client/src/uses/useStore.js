import { ref } from '@vue/composition-api/dist/vue-composition-api';

export const useStore = (store) => {
  const localStore = ref(store);

  store.watch((updatedStore) => {
    localStore.value = updatedStore;
  });

  return localStore;
};
