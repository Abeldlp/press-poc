<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    to: string;
    text: string;
    color?: string;
  }>(),
  {
    color: "white",
  }
);

const cssVars = computed(() => {
  return {
    "--text-color": props.color,
  };
});
</script>

<template>
  <span class="link-container" :style="cssVars">
    <router-link :to="to">{{ text }}</router-link>
  </span>
</template>

<style scoped>
.link-container a {
  color: var(--text-color);
  text-decoration: none;
  margin: 0 1rem;
}

.link-container a:hover {
  text-decoration: underline;
}
</style>
