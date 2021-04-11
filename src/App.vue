<template>
  <div id="app" class="h-screen">
    <div class="page fixed w-full md:w-3/5 m-auto left-0 right-0 border-t-8 border-gray-100">
      <h1 class="text-center text-4xl font-handwriting">Todoblist</h1>
      <todo-quick-edit mode="quick"/>
    </div>
    <div class="h-full w-full md:w-3/5 m-auto rounded page pt-40 text-gray-700 overflow-auto border-b-8 border-gray-100 scrollbar-hidden">
      <todo-list/>
    </div>
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
