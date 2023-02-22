<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const open = ref<boolean>(false);

const Button = defineAsyncComponent(() => import("ui/Button"));
const Card = defineAsyncComponent(() => import("ui/Card"));
const Link = defineAsyncComponent(() => import("ui/Link"));

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
    <Card>
      <p>Open MI component using the button from the ui app</p>
    </Card>
  </div>
  <div>
    <Link to="/mi/clients" text="Clients" color="black" />
    <Link to="/mi/invoices" text="Invoices" color="black" />
  </div>
  <router-view></router-view>
</template>
