<template>
  <p class="todos-count font-handwriting text-2xl">Nombre de tâches à réaliser : {{openTodos.length}}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "todos-count",
  computed: {
    ...mapGetters(['openTodos'])
  }
}
</script>

<style>

</style>