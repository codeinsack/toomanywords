<template>
  <VContainer fill-height fluid>
    <div class="sign-in-card-container">
      <VCard class="sign-in-card pa-8 mr-0" width="550" flat>
        <VCardTitle class="text-h5 text-md-h4 font-weight-bold primary--text"> Sign Up </VCardTitle>
        <VCardSubtitle class="body-2 text-md-body-1">
          Here you can create a new account
        </VCardSubtitle>
        <VCardText>
          <VForm @submit.prevent="onFormSubmit">
            <p class="text-h6 text-md-h5 font-weight-bold primary--text">Username</p>
            <VTextField v-model="user.username" class="rounded-0" placeholder="Username" outlined />
            <p class="text-h6 text-md-h5 font-weight-bold primary--text">Email</p>
            <VTextField v-model="user.email" class="rounded-0" placeholder="Email" outlined />
            <p class="text-h6 text-md-h5 font-weight-bold primary--text">Password</p>
            <VTextField
              v-model="user.password"
              class="rounded-0"
              placeholder="Password"
              type="password"
              append-icon="mdi-eye-off"
              outlined
            />
            <VRow>
              <VCol cols="12" md="6">
                <VBtn
                  class="sign-in-card__button rounded-0 text-capitalize white--text"
                  :disabled="loading"
                  :loading="loading"
                  color="primary darken-1"
                  type="submit"
                >
                  Sign Up
                </VBtn>
              </VCol>
              <VCol cols="12" md="6">
                <VBtn
                  class="sign-in-card__button rounded-0 text-capitalize white--text"
                  to="/sign-in"
                  color="primary darken-1"
                  type="submit"
                >
                  Back to Sign In
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </VContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { reactive, ref } from '@vue/composition-api';
import { authStore } from '../store/user';

const initialState = {
  username: '',
  email: '',
  password: '',
};

export default defineComponent({
  setup() {
    let user = reactive({ ...initialState });
    const loading = ref(false);

    const onFormSubmit = async () => {
      await authStore.register(user);
      Object.assign(user, initialState);
    };

    return {
      onFormSubmit,
      user,
      loading,
    };
  },
});
</script>

<style scoped lang="scss">
.sign-in-card-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.sign-in-card {
  &__button {
    width: 100%;
  }
}
</style>
