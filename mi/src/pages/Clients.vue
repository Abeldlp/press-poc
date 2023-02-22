<script setup lang="ts">
import { ref } from "vue";

const clients = ref<string[]>(["client1", "client2", "client3"]);
</script>

<template>
  <p v-for="(client, i) in clients" :key="i">{{ client }}</p>
</template>
