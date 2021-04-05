<template>
  <transition name="fade">
    <div class="modal" v-if="isVisible">
      <div class="overlay" @click="isVisible = false"></div>
      <section class="box">
        <slot></slot>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup-modal',
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    open () {
      this.$set(this, 'isVisible', true);
    },
    close () {
      this.$set(this, 'isVisible', false);
    }
  }
}
</script>

<style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
      opacity: 0;
  }
  .modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .overlay {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.8);
    }

    .box {
      width: 500px;
      min-height: 200px;
      background-color: #fff;
      margin-top: -100px;
      position: relative;
      border-radius: 5px;
      padding: 1rem;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
</style>