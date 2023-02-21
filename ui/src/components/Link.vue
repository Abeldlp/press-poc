<script setup lang="ts">
defineProps<{
  to: string;
  text: string;
}>();
</script>

<template>
  <a :href="to">{{ text }}</a>
</template>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
}

a:hover {
  text-decoration: underline;
}
</style>
