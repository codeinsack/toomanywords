<template>
  <VApp>
    <RouterView />
  </VApp>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import { authStore } from './store/user';

export default {
  setup() {
    onMounted(() => authStore.initCurrentUser());
  },
};
</script>
