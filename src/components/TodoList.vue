<template>
  <div class="list-todo">
    <todos-count/>
    <ul v-if="reorderTodos.length">
      <todo-list-item
      v-for="({id, label, when, description}) in reorderTodos"
      :key="id"
      :label="label"
      :id="id"
      :when="when"
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
import { mapActions } from 'vuex';
import TodoListItem from './TodoListItem';
import ConfirmDialogue from './ConfirmDialogue';
import TodosCount from './TodosCount';
export default {
  name: 'todo-list',
  components: {
    TodoListItem,
    ConfirmDialogue,
    TodosCount
  },
  computed: {
    reorderTodos () {
      return [...this.$store.state.todos.todos].reverse();
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