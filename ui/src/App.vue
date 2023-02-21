<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Link from "./components/Link.vue";
import Button from "./components/Button.vue";
</script>

<template>
  <div class="container">
    <Navbar>
      <Link to="/home" text="Home" />
      <Link to="/about" text="About" />
      <Link to="/contact" text="Contact" />
    </Navbar>
  </div>
  <Button />
  <Link to="/" text="hello" color="black" />
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
</style>
