<script>
export default {
  name: "f-button",
  props: {
    btnClass: {
      type: String,
      default: 'primary'
    },
    btnType: {
      type: String,
      default: 'submit'
    }
  },

  render (h) {
    return h('button', {
      staticClass: 'btn',
      class: `btn--${this.btnClass}`,
      props: {
        type: this.btnType
      },

      on: {
        click: e => this.$emit('click', e)
      }
    }, this.$slots.default)
  }

}
</script>