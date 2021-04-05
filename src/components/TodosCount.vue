<template>
  <p class="todos-count font-handwriting text-2xl">Nombre de tâches à réaliser : {{todosCount}}</p>
</template>

<script>
import { compose, length, pathOr } from 'rambda'

export default {
  name: "todos-count",
  computed: {
    todosCount () {
      return compose(
        length,
        pathOr([], ['state', 'todos', 'todos'])
      )(this.$store)
    }
  }
}
</script>

<style>

</style>