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
  <div>
    <Button text="MI toggle" :handleClick="handleClick" />
  </div>
  <div v-if="open">
    <p>Open MI component using the button from the ui app</p>
  </div>
</template>
