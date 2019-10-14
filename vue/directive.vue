<template>
  <p v-reversed="original" />
</template>

<script>
  import reverse from './reverse-function.js'

  export default {
    name: 'ReverseDirective',
    props: ['original'],
    directives: {
      reversed (element, {value}) {
        element.innerHTML = reverse(value)
      }
    }
  }
</script>

<style scoped>

</style>
