<template>
  <iframe
    class="filename"
    :src="'https://view.officeapps.live.com/op/view.aspx?src=https://file.zexueyuan.com.cn/f95dd0032d97476aaf62b3d95575d76a.pptx'"
    width="100%"
    height="800"
    frameborder="1"
  ></iframe>
</template>
<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'
import png from '../assets/1.pdf?url'
export default defineComponent({
  name: 'lodash',
  setup(props) {
    return {
      png
    }
  }
}) 
</script>
<style lang="scss"></style>
