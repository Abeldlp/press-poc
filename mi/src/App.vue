<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const Button = defineAsyncComponent(() => import("crm/Button"));
</script>

<template>
  <div>
    <h1>Media Inquiries app</h1>
  </div>
  <Button />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
