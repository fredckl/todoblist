<template>
  <div id="app">
      <h1>ToDo list</h1>
      <todo-edit/>
      <todo-list/>
  </div>
</template>

<script>
import TodoEdit from './components/TodoEdit';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoEdit,
    TodoList
  }
}
</script>

<style>

</style>
