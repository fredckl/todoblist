<template>
  <div class="list-todo">
    <todos-count/>
    <todo-filter
      @showOpen="filterMode = 'showOpen'"
      @showClosed="filterMode = 'showClosed'"
      @showAll="filterMode = 'showAll'"/>
    <ul v-if="todos.length">
      <todo-list-item
      v-for="({id, label, createdAt, description , archived}) in todos"
      :key="id"
      :label="label"
      :id="id"
      :createdAt="createdAt"
      :archived='archived'
      :description="description"
      @onRemove="handleRemoveItem"
    />
    </ul>
    <confirm-dialogue
      ref="confirmDialogue"
      title="Confirmez votre action"
      message="êtes-vous certain-e de vouloir supprimer cette tâche ?"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoListItem from './TodoListItem';
import ConfirmDialogue from './ConfirmDialogue';
import TodosCount from './TodosCount';
import TodoFilter from './TodoFilter.vue';

export default {
  name: 'todo-list',
  components: {
    TodoListItem,
    ConfirmDialogue,
    TodosCount,
    TodoFilter
  },
  data () {
    return {
      filterMode: 'showOpen'
    }
  },
  computed: {
    ...mapGetters(['openTodos', 'allTodos', 'closedTodos']),
    todos () {
      switch (this.filterMode) {
        case 'showAll':
          return this.allTodos;
        case 'showClosed':
          return this.closedTodos;
        default:
          return this.openTodos;
      }
    }
  },
  methods: {
    ...mapActions([
      'removeTodo'
    ]),
    async handleRemoveItem (id) {
      const ok = await this.$refs.confirmDialogue.show();
      if (ok) {
        this.removeTodo(id);
      }
    }
  }
}
</script>

<style>

</style>