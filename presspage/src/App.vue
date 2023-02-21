<script setup lang="ts">
import CrmApp from "crm/App";
import MiApp from "mi/App";
import { defineAsyncComponent } from "vue";

const Navbar = defineAsyncComponent(() => import("ui/Navbar"));
const Link = defineAsyncComponent(() => import("ui/Link"));
</script>

<template>
  <div>
    <div class="navigation-bar-container">
      <Navbar>
        <Link to="/mi" text="Inquiries" />
        <Link to="/crm" text="CRM" />
      </Navbar>
    </div>
    <h1>Main application</h1>
    <CrmApp />
    <MiApp />
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
