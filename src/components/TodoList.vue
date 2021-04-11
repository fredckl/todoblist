<template>
  <div class="list-todo">
    <todos-count :todos="todos"/>
    <todo-filter
      @showOpen="filterMode = 'showOpen'"
      @showClosed="filterMode = 'showClosed'"
      @showAll="filterMode = 'showAll'"/>
    <todo-search @onSubmit="onSearch"/>
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
import TodoSearch from './TodoSearch.vue';
import { compose, prop, filter, includes, ifElse, toLower, values, map, pick, join } from 'rambda';
import { isNilOrIsEmpty } from '../helpers/rambda-adjunct';

const searchTodo = (q, fields = ['label', 'description']) => filter(
  compose(
    includes(toLower(q || '')),
    join(' '),
    map(toLower),
    values,
    pick(fields)
  )
)

export default {
  name: 'TodList',
  components: {
    TodoListItem,
    ConfirmDialogue,
    TodosCount,
    TodoFilter,
    TodoSearch
  },
  data () {
    return {
      filterMode: 'showOpen',
      searchData: null
    }
  },
  computed: {
    ...mapGetters(['openTodos', 'allTodos', 'closedTodos']),
    todos () {
      let todos = [];
      switch (this.filterMode) {
        case 'showAll':
          todos = this.allTodos;
          break;
        case 'showClosed':
          todos = this.closedTodos;
          break;
        default:
          todos = this.openTodos;
      }
      return ifElse(
        compose(isNilOrIsEmpty, prop('searchData')),
        prop('todos'),
        compose(searchTodo(this.searchData), prop('todos')),
      )({searchData: this.searchData, todos})
    }
  },
  methods: {
    ...mapActions([
      'removeTodo'
    ]),
    onSearch (q) {
      this.searchData = q;
    },
    async handleRemoveItem (id) {
      const ok = await this.$refs.confirmDialogue.show();
      if (ok) {
        this.removeTodo(id);
      }
    }
  }
}
</script>