<template>
  <p>{{ original }}</p>
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
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
