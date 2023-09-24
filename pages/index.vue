<template>
  <main-section title="Home" :loading="loading">
    main
  </main-section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  
  const loading = ref(false)
</script>