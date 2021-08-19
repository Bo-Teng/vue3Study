<template lang="">
  <div></div>
</template>
<script lang="ts">
import { h } from 'vue'
export default {
  render (this: any) {
    return h(
      'el-button',
      {
        onClick: this.btn()
      },
      'homebtn'
    )
  },
  methods: {
    btn (this: any) {
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
  }
}
</script>
<style lang=""></style>
