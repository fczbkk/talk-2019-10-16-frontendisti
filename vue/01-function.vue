<template>
  <p>{{ reversed }}</p>
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
    props: ['original'],
    data () {
      return {
        reversed: reverse(this.original)
      }
    }
  }
</script>

<style scoped>

</style>
