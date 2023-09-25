<template>
  <main-section title="Home" :loading="loading">
    main
  </main-section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(false)
</script>