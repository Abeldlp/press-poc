<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
