<template>
  <p>{{ reversed }}</p>
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
    props: ['original'],
    computed: {
      reversed () {
        return reverse(this.original)
      }
    }
  }
</script>

<style scoped>

</style>
