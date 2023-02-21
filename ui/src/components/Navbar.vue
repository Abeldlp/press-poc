<script setup lang="ts">
import { ref } from "vue";

const logo = ref("logo");
</script>

<template>
  <nav class="navigation-bar">
    <span>{{ logo }}</span>
    <div class="link-container">
      <slot></slot>
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  background-color: dodgerblue;
  color: #fff;
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
