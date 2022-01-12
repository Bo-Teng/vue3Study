<template>
  <div class="home"></div>
</template>
<script lang="ts">
import { h, defineComponent, onMounted, nextTick, ref } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
  setup (context, prop) {
 
  },
  render () {
    return h(
      ElButton,
      {
        onClick: this.btn()
      },
      this.text
    )
  },
  methods: {
    btn () {
      let time: undefined | number = undefined
      window.localStorage.setItem('a', 'x1121')
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
<style lang="scss">
.div {
  height: 1000px;
}
.box {
  margin-top: 200px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
