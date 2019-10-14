<template>
  <div>

    <h1>Reverse text</h1>
    <p><input v-model="original" /></p>

    <h2>{{ selected.label }}</h2>
    <component :is="selected.component" :original="original" />

    <div v-for="(val, index) of componentsList" :key="index">
      <label>
        <input type="radio" :value="val" v-model="selected" />
        {{ val.label }}
      </label>
    </div>

  </div>
</template>

<script>
  import ReverseFunction from './vue/01-function.vue'
  import ReverseLifecycle from './vue/02-lifecycle.vue'
  import ReverseMethod from './vue/03-method.vue'
  import ReverseComputed from './vue/04-computed.vue'
  import ReverseFilter from './vue/05-filter.vue'
  import ReverseMixin from './vue/06-mixin.vue'
  import ReverseDirective from './vue/07-directive.vue'
  import ReverseCss from './vue/08-css.vue'

  const componentsList = [
    { label: 'function', component: ReverseFunction },
    { label: 'lifecycle', component: ReverseLifecycle },
    { label: 'method', component: ReverseMethod },
    { label: 'computed', component: ReverseComputed },
    { label: 'filter', component: ReverseFilter },
    { label: 'mixin', component: ReverseMixin },
    { label: 'directive', component: ReverseDirective },
    { label: 'css', component: ReverseCss },
  ]

  export default {
    data () {
      return {
        original: 'Riki Fridrich',
        selected: componentsList[0],
        componentsList
      }
    }
  }
</script>

<style scoped>

</style>
