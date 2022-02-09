<template>
  <div>
    <div class="box">
      <canvas class="zdog-canvas"></canvas>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import '../../public/zdog.dist.js'

export default defineComponent({
  name: 'animataion',
  setup () {
    onMounted(() => {
      const ctx = document.querySelector('.zdog-canvas').getContext('2d')
      ctx.fillStyle = 'rgba(255,255,0,1)'
      ctx.fillRect(70, 70, 55, 50)
      ctx.fillStyle = 'rgba(0,180,0,.4)'
      ctx.fillRect(50, 50, 55, 50)
      ctx.fillStyle = 'rgba(0, 0, 200,.7)'
      ctx.fillRect(30, 30, 55, 50)
      ctx.fillStyle = 'rgba(200,0,0,.7)'
      ctx.fillRect(10, 10, 55, 50)
    })
  }
})
</script>
<style lang="scss">
.box {
  width: 400px;
  height: 400px;
  margin: 100px auto;
}
</style>
