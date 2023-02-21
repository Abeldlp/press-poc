<script setup lang="ts">
// import CrmApp from "crm/App";
// import MiApp from "mi/App";
import { defineAsyncComponent } from "vue";

const CrmApp = defineAsyncComponent(() => import("crm/App"));
const MiApp = defineAsyncComponent(() => import("mi/App"));
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
    <div class="media-inquiries-container">
      <MiApp />
    </div>
    <div class="crm-container">
      <CrmApp />
    </div>
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
