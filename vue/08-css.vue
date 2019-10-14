<template>
  <p>
    <span class="reverse">{{ original }}</span>
  </p>
</template>

<script>
  export default {
    props: ['original']
  }
</script>

<style scoped>
  .reverse {
    display: inline-block;
    transform: scale(-1, 1);
  }
</style>
