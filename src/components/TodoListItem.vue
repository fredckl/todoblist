<template>
  <li>
    <div v-if="!showEdit">
      {{label}}
      ajouté le {{addedAt}}
      <button @click="handleRemove">Remove</button>
      <button @click="showEdit = true">Editer</button>
    </div>
    <div v-if="showEdit">
      <todo-edit :id="id" :label="label" :when="when" @onSubmitted="cancel" />
      <button @click="cancel">annuler</button>
    </div>
  </li>
</template>

<script>
import {DateTime} from 'luxon';
import TodoEdit from './TodoEdit';

export default {
  name: 'todo-list-item',
  components: {
    TodoEdit
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true
    },
    when: {
      type: String
    }
  },
  data () {
    return {
      showEdit: false
    }
  },
  computed: {
    addedAt () {
      return DateTime.fromISO(this.when).toFormat('dd/MM/yyyy')
    }
  },

  methods: {
    cancel () {
      this.showEdit = false;
    },
    handleRemove () {
      this.$emit('onRemove', this.id)
    },
    handleEdit () {
      console.log('edit', this.id);
    }
  }
}
</script>

