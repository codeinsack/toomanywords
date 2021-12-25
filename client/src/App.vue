<template>
  <VApp>
    <VAppBar app color="primary" dark>
      <p class="body-1">Twoja reklama może tu być...</p>
    </VAppBar>
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script>
import { todoStore } from './store/todo';
import { counterStore } from './store/increment';
import { useStore } from './uses/useStore';

export default {
  setup() {
    const todos = useStore(todoStore.$todos);
    const counter = useStore(counterStore.$counter);

    return {
      todos,
      counter,
    };
  },
};
</script>
