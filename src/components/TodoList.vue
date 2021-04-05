<template>
  <div class="list-todo">
    <todos-count/>
    <ul>
      <todo-list-item
      v-for="({id, label, when}) in reorderTodos"
      :key="id"
      :label="label"
      :id="id"
      :when="when"
      @onRemove="handleRemoveItem"
    />
    </ul>
    <confirm-dialogue
      ref="confirmDialogue"
      title="Confirmation d'action"
      message="êtes-vous certain de vouloir supprimer cette élément ?"
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
  props: {
    todos: {
      type: Array,
      default: () => ([])
    }
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