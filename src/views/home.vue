<script lang="ts">
import { h, defineComponent } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
  render () {
    return h(
      ElButton,
      {
        onClick: this.btn
      },
      this.Bext
    )
  },
  methods: {
    btn () {
      let time: undefined | number = undefined
      return () => {
        clearTimeout(time)
        time = setTimeout(() => {
          this.text += 'tb'
        }, 500)
      }
    }
  },
  data () {
    return {
      text: 'xxx'
    }
  },
  inject: ['Bext']
})
</script>
<style lang=""></style>
