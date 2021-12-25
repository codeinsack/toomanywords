<template>
  <VContainer>
    <h1>Agniezka to nasza nowa strona!!! :D</h1>
  </VContainer>
</template>

<script>
import { todoStore } from '../store/todo';
import { onMounted, ref } from '@vue/composition-api';
import { counterStore } from '../store/increment';
import { wordsApi } from '../api/words';

export default {
  setup() {
    const todoText = ref('');
    const newWord = ref('');
    const words = ref([]);

    onMounted(async () => {
      const { data } = await wordsApi.fetchWords();
      words.value = data;
    });

    const onNewTodoAdd = () => {
      todoStore.addTodo(todoText.value);
    };

    const onIncrement = () => {
      counterStore.increment();
    };

    const onDecrement = () => {
      counterStore.decrement();
    };

    const onNewWordAdd = async () => {
      await wordsApi.createWord({ name: newWord.value });
      newWord.value = '';
    };

    return {
      todoText,
      onNewTodoAdd,
      onIncrement,
      onDecrement,
      onNewWordAdd,
      newWord,
      words,
    };
  },
};
</script>
