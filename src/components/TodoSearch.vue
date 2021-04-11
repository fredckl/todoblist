<template>
  <form class="search-todo flex" @submit.prevent="$emit('onSubmit', search)">
    <input
      type="text"
      class="form-input mr-2"
      v-model="search"
      placeholder="Recherche..."

    />
    <f-button>GO</f-button>
  </form>
</template>

<script>
import FButton from './FButton';
import { debounce } from '../helpers/debounce';

export default {
  name: 'todo-search',
  components: {
    FButton
  },
  data () {
    return {
      search: null
    }
  },
  methods: {
    onSubmit () {
      this.$emit('onSubmit', this.search)
    }
  },
  created () {
    this.debounceSearch = debounce(this.onSubmit, 500)
  },
  watch: {
    search () {
      this.debounceSearch();
    }
  }
}
</script>

<style>

</style>