<template>
  <VContainer>
    <VAppBar color="primary" app dark>
      <div style="width: 100%" class="d-flex justify-space-between align-center">
        <div class="body-1">Twoja reklama może tu być...</div>
        <div class="d-flex align-center">
          <div class="mr-5 body-1">Hello, {{ user.username }}!</div>
          <VBtn color="white" icon @click="logout">
            <VIcon>mdi-logout</VIcon>
          </VBtn>
        </div>
      </div>
    </VAppBar>
    <VMain>
      <RouterView />
    </VMain>
  </VContainer>
</template>

<script>
import { useStore } from '../uses/useStore';
import { authStore } from '../store/user';

export default {
  setup() {
    const user = useStore(authStore.$user);

    const logout = () => {
      authStore.logout();
    };

    return {
      user,
      logout,
    };
  },
};
</script>
