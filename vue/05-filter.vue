<template>
  <p>{{ original | reverse }}</p>
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
    props: ['original'],
    filters: {
      reverse
    }
  }
</script>

<style scoped>

</style>
