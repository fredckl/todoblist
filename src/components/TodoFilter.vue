<template>
  <div class="todo-filters my-3">
    <f-button
      @click="$emit('showOpen'); active = 'showOpen'"
      :btnClass="active === 'showOpen' ? 'outline--primary' : 'primary'"
    >A faire</f-button>
    <f-button
      @click="$emit('showClosed'); active = 'showClosed'"
      :btnClass="active === 'showClosed' ? 'outline--primary' : 'primary'"
    >Archivé-s</f-button>
    <f-button
      @click="$emit('showAll'); active = 'showAll'"
     :btnClass="active === 'showAll' ? 'outline--primary' : 'primary'"
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