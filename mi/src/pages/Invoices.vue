<script setup lang="ts">
import { ref } from "vue";

const invoices = ref<string[]>(["invoice1", "invoice2", "invoice3"]);
</script>

<template>
  <p v-for="(invoice, i) in invoices" :key="i">{{ invoice }}</p>
</template>
