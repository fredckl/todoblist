<template>
  <form class="my-4" @submit.prevent="handleSubmit" :class="[mode === 'full' ? '' : 'flex']">
    <input v-model="todoData.label" class="form-input mr-2" placeholder="ajouter une nouvelle tâche"/>
    <textarea v-model="todoData.description" class="form-input" v-if="mode === 'full'"></textarea>
    <f-button>Enregistrer</f-button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import {isNil, mergeLeft, path, when} from 'rambda';
import { mapActions } from 'vuex';
import { DateTime } from 'luxon';
import FButton from './FButton';

const defaultValues = {
  id: null,
  label: null,
  description: null,
  createdAt: null
}

const fnData = idx => (key, data) => path([idx, key], data);
const getData = fnData('todoData');
const getProp = fnData('todo');

export default {
  name: "todo-quick-edit",
  components: {
    FButton
  },
  props: {
    mode: {
      type: String,
      default: 'full'
    },
    todo: {
      id: String,
      label: String,
      createdAt: String,
      description: String
    }
  },
  data() {
    return {
      todoData: {
        id: getProp('id', this),
        label: getProp('label', this),
        createdAt: getProp('createdAt', this),
        description: getProp('description', this)
      }
    }
  },

  methods: {
    ...mapActions([
      'addTodo',
      'updateTodo',
    ]),
    getData () {
      return
    },
    setUuid () {
      return when(
        isNil,
        uuidv4
      )(getData('id', this));
    },
    setCreatedAt () {
      return when(
        isNil,
        () => DateTime.now().toString()
      )(getData('createdAt', this));
    },
    handleSubmit () {
      const newData = {
        id: getData('id', this),
        label: getData('label', this),
        description: getData('description', this)
      }
      if (getData('id', this)) {
        this.updateTodo(newData)
      } else {
        this.addTodo(mergeLeft({
          id: this.setUuid(),
          createdAt: this.setCreatedAt(),
        }, newData));
        this.$set(this, 'todoData', {...defaultValues})
      }

      this.$emit('onSubmitted');
    }
  }
}
</script>
