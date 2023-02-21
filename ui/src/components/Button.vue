<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    handleClick?: () => void;
  }>(),
  {
    text: "Button",
  }
);
</script>

<template>
  <button @click="handleClick">{{ text }}</button>
</template>
