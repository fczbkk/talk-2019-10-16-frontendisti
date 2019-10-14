<template>
  <p>{{ original | reverse }}</p>
</template>

<script>
  import reverseMixin from './reverse-mixin.js'

  export default {
    mixins: [reverseMixin]
  }
</script>

<style scoped>

</style>
