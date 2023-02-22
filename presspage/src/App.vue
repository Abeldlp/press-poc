<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Navbar = defineAsyncComponent(() => import("ui/Navbar"));
const Link = defineAsyncComponent(() => import("ui/Link"));
</script>

<template>
  <div>
    <div class="navigation-bar-container">
      <Navbar>
        <Link to="/mi/clients" text="Inquiries" color="white" />
        <Link to="/crm" text="CRM" color="white" />
      </Navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.navigation-bar-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
