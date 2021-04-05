<template>
  <div id="app" class="w-full md:w-3/5 m-auto mt-3 rounded page text-gray-700">
    <h1 class="text-center text-4xl font-handwriting">Todoblist</h1>
    <todo-quick-edit mode="quick"/>
    <todo-list/>
  </div>
</template>

<script>
import TodoQuickEdit from './components/TodoQuickEdit';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoQuickEdit,
    TodoList
  }
}
</script>

<style>

</style>
