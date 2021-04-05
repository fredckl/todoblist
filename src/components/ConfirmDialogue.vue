<template>
  <popup-modal ref="popup">
    <section class="flex flex-col h-full content-between w-full" style="height: 200px;">
      <header class="border-b p-2 mb-auto font-bold text-2xl">
        <h1 v-if="title && title.length">{{title}}</h1>
      </header>
      <p class="p-2 mb-auto">{{message}}</p>
      <footer class="border-t p-2 mt-auto flex justify-end footer-actions">
        <f-button @click="cancel" btnClass="secondary">{{cancelText}}</f-button>
        <f-button @click="confirm">{{confirmText}}</f-button>
      </footer>
      </section>
  </popup-modal>
</template>

<script>
import FButton from './FButton.vue';
import PopupModal from './PopupModal';
export default {
  name: 'confirm-dialogue',
  components: {
    PopupModal,
    FButton
  },
  props: {
    message: String,
    title: String,
    confirmText: {
      type: String,
      default: 'Valider'
    },
    cancelText: {
      type: String,
      default: 'Annuler'
    }
  },
  data () {
    return {
      isVisible: false,
      resolvePromise: undefined,
      rejectPromise: undefined
    }
  },
  methods: {
    confirm () {
      this.$refs.popup.close();
      return this.resolvePromise(true);
    },
    cancel () {
      this.$refs.popup.close();
      return this.resolvePromise(false);
    },
    show () {
      this.$refs.popup.open();
      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.footer-actions {
  button {
    margin-left: 1rem;
  }
}
</style>