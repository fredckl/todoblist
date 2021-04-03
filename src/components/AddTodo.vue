<template>
  <form class="add-todo" @submit.prevent="handleSubmit">
    <input v-model="label"/>
    <button type="submit">Enregistrer</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import {isNil, when} from 'rambda';
export default {
  name: "add-todo",
  data() {
    return {
      id: null,
      label: null
    }
  },

  methods: {
    setUuid () {
      return when(
        isNil,
        uuidv4
      )(this.id);
    },
    handleSubmit () {
      this.$emit('onAddTodo', {label: this.label, id: this.setUuid()});
      this.$set(this, 'label', null);
      this.$set(this, 'id', null);
    }
  }
}
</script>

<style>

</style>