<template>
  <p class="font-handwriting text-2xl flex flex-wrap items-center justify-center">
    Nombre de tâches :
    <span class="ml-5 h-5 text-sm w-5 text-white font-sans flex items-center justify-center rounded-full bg-purple-500">{{countTodos}}</span>
  </p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "TodosCount",
  props: {
    todos: Array
  },
  computed: {
    ...mapGetters(['openTodos']),
    countTodos () {
      if (this.todos) return this.todos.length;
      return this.openTodos.length
    }
  }
}
</script>