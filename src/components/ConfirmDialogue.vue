<template>
  <popup-modal ref="popup">
    <header>
      <h1 v-if="title && title.length">{{title}}</h1>
    </header>
    <p>{{message}}</p>
    <footer>
      <button @click="cancel">{{cancelText}}</button>
      <button @click="confirm">{{confirmText}}</button>
    </footer>
  </popup-modal>
</template>

<script>
import PopupModal from './PopupModal';
export default {
  name: 'confirm-dialogue',
  components: {
    PopupModal
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

</style>