<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const open = ref<boolean>(false);

const Button = defineAsyncComponent(() => import("ui/Button"));

const handleClick = () => {
  open.value = !open.value;
};
</script>

<template>
  <div>
    <h1>Media Inquiries app</h1>
  </div>
  <Button text="Toggle text" :handleClick="handleClick" />
  <div v-if="open">
    <p>Open MI component using the button from the ui app</p>
  </div>
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
