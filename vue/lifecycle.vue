<template>
  <p></p>
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
    name: 'ReverseLifecycle',
    props: ['original'],
    mounted () {
      this.$el.innerHTML = reverse(this.original)
    },
    updated () {
      this.$el.innerHTML = reverse(this.original)
    }
  }
</script>

<style scoped>

</style>
