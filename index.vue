<template>
  <div>

    <h1>Reverse text</h1>
    <p><input v-model="original" /></p>

    <h2>function</h2>
    <reverse-function :original="original" />

    <h2>lifecycle</h2>
    <reverse-lifecycle :original="original" />

    <h2>method</h2>
    <reverse-method :original="original" />

    <h2>computed</h2>
    <reverse-computed :original="original" />

    <h2>filter</h2>
    <reverse-filter :original="original" />

    <h2>mixin</h2>
    <reverse-mixin :original="original" />

    <h2>directive</h2>
    <reverse-directive :original="original" />

    <h2>css</h2>
    <reverse-css :original="original" />

  </div>
</template>

<script>
  import ReverseFunction from './vue/function.vue'
  import ReverseMethod from './vue/method.vue'
  import ReverseComputed from './vue/computed.vue'
  import ReverseFilter from './vue/filter.vue'
  import ReverseMixin from './vue/mixin.vue'
  import ReverseLifecycle from './vue/lifecycle'
  import ReverseDirective from './vue/directive'
  import ReverseCss from './vue/css'

  export default {
    components: {
      ReverseCss,
      ReverseDirective,
      ReverseLifecycle,
      ReverseMixin,
      ReverseFilter,
      ReverseComputed,
      ReverseMethod,
      ReverseFunction
    },
    data () {
      return {
        original: 'Riki Fridrich'
      }
    }
  }
</script>

<style scoped>

</style>
