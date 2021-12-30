<template>
  <VContainer>
    <h1>Agniezka to nasza nowa strona!!! :D</h1>
  </VContainer>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import { wordsApi } from '../api/words';

export default {
  setup() {
    onMounted(async () => {
      await wordsApi.fetchWords();
    });
  },
};
</script>
