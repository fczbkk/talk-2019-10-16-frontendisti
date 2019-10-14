<template>
  <p>{{ reverse(original) }}</p>
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
    props: ['original'],
    methods: {
      reverse
    }
  }
</script>

<style scoped>

</style>
