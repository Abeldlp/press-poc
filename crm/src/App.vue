<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const open = ref<boolean>(false);
const Button = defineAsyncComponent(() => import("ui/Button"));

const handleClick = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="main-crm-container">
    <div>
      <h1>CRM app</h1>
    </div>
    <Button text="Toggle text" :handleClick="handleClick" />
    <div v-if="open">
      <p>Open CRM component using the button from the ui app</p>
    </div>
  </div>
</template>

<style scoped></style>
