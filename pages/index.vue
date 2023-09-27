<template>
  <main-section title="Home" :loading="loading">
    main
  </main-section>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';
import { ref, onMounted } from 'vue'

const loading = ref(false)

onMounted(() => {
  useFetch('/api/auth/register', {
    method: 'POST',
    body: {
      username: 'username',
      email: 'x',
      password: 'x',
      name: 'x',
      repeatPassword: 'x'
    }
  })
})
</script>