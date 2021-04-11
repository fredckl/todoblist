<template>
  <div class="todo-filters my-3">
    <f-button
      @click="$emit('showOpen'); active = 'showOpen'"
      :btnClass="getActiveClass('showOpen')"
    >A faire</f-button>
    <f-button
      @click="$emit('showClosed'); active = 'showClosed'"
      :btnClass="getActiveClass('showClosed')"
    >Archivé-s</f-button>
    <f-button
      @click="$emit('showAll'); active = 'showAll'"
     :btnClass="getActiveClass('showAll')"
    >Tous</f-button>
  </div>
</template>

<script>
import FButton from './FButton.vue'

export default {
  components: { FButton },
  name: 'todo-filter',
  data () {
    return {
      active: 'showOpen'
    }
  },
  methods: {
    getActiveClass (key) {
      return this.active === key ? 'primary' : 'outline--primary';
    }
  }
}
</script>

<style scoped lang="scss">
.todo-filters {
  button {
    margin-right: .5rem;
  }
}
</style>