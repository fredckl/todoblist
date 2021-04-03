<template>
  <div id="app">
      <h1>ToDo list</h1>
      <add-todo @onAddTodo="handlAddTodo"/>
      <list-todo :todos="todos"/>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo.vue';

export default {
  name: 'App',
  components: {
    AddTodo,
    ListTodo
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    handlAddTodo (todo) {
      this.$set(this, 'todos', [...this.todos, todo])
    }
  }
}
</script>

<style>

</style>
