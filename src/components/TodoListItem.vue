<template>
  <li>
    <div class="todo-content">
      <header class="flex justify-between border-b border-green-200 mb-2 pb-2 bg-gray-100 px-1 py-2">
        <p class="text-grey-800 text-base uppercase">{{label}}</p>
        <span class="text-gray-600 text-xs bg-white self-start rounded p-1">créé le {{addedAt}}</span>
      </header>
      <div class="px-2 pb-2 overflow-x-hidden">
        <div v-if="!showEdit" class="flex justify-between items-center show-content">
          <p v-if="description">{{description}}</p>
          <p v-else class="text-gray-400">aucune description</p>

          <div class="actions">
            <f-button v-if="archived === true" @click="handleUnarchive" btnType="button" btnClass="secondary">
              <icon name="archive" size="1rem"/>
            </f-button>
            <f-button v-if="archived !== true" @click="handleArchive" btnType="button" btnClass="warning">
              <icon name="archive" size="1rem"/>
            </f-button>
            <f-button @click="showEdit = true" btnType="button">
              <icon name="pencil-alt" size="1rem"/>
            </f-button>
            <f-button @click="handleRemove" btnType="button" btnClass="danger">
              <icon name="trash" size="1rem"/>
            </f-button>
          </div>
        </div>
        <div v-if="showEdit" class="todo-edit flex justify-between">
          <todo-quick-edit :todo="{id, label, createdAt, description}" @onSubmitted="cancel" />
          <f-button @click="cancel" btnType="button" btnClass="secondary">annuler</f-button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import {DateTime} from 'luxon';
import TodoQuickEdit from './TodoQuickEdit';
import FButton from './FButton.vue';
import { mapActions } from 'vuex';

export default {
  name: 'todo-list-item',
  components: {
    TodoQuickEdit,
    FButton
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
    createdAt: {
      type: String
    },
    description: {
      type: String
    },
    archived: {
      type: Boolean
    }
  },
  data () {
    return {
      showEdit: false
    }
  },
  computed: {
    addedAt () {
      return DateTime.fromISO(this.createdAt).toFormat('dd/MM/yyyy')
    }
  },

  methods: {
    ...mapActions([
      'archiveTodo',
      'unarchiveTodo'
    ]),
    cancel () {
      this.showEdit = false;
    },
    handleRemove () {
      this.$emit('onRemove', this.id)
    },
    handleArchive () {
      this.archiveTodo(this.id);
    },
    handleUnarchive () {
      this.unarchiveTodo(this.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  opacity: 0;
  transition: all .3s;
  button {
    margin-left: .3rem;
  }
}
.show-content:hover {
  .actions {
    opacity: 1
  }
}
</style>
