<template>
  <form class="add-todo" @submit.prevent="handleSubmit">
    <input v-model="todoData.label"/>
    <button type="submit">Enregistrer</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import {isNil, path, when} from 'rambda';
import { mapActions } from 'vuex';
import { DateTime } from 'luxon';

const defaultValues = {
  id: null,
  label: null,
  when: null
}

const getData = (key, data) => path(['todoData', key], data);

export default {
  name: "todo-edit",
  props: {
    id: String,
    label: String,
    when: String
  },
  data() {
    return {
      todoData: {
        id: this.id,
        label: this.label,
        when: this.when
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
    setWhen () {
      return when(
        isNil,
        () => DateTime.now().toString()
      )(getData('when', this));
    },
    handleSubmit () {
      if (this.todoData.id) {
        this.updateTodo({
          id: this.todoData.id,
          label: getData('label', this)
        })
      } else {
        this.addTodo({
          label: getData('label', this),
          id: this.setUuid(),
          when: this.setWhen()
        })
        this.$set(this, 'todoData', defaultValues)
      }

      this.$emit('onSubmitted');
    }
  }
}
</script>