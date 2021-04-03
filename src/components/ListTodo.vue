<template>
  <div class="list-todo">
    <ul>
      <li v-for="({label, id}) in reorderTodos" :key="id">{{label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list-todo',
  props: {
    todos: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    reorderTodos () {
      return [...this.todos].reverse();
    }
  }
}
</script>

<style>

</style>