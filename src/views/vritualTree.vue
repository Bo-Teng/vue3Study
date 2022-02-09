<template>
  <div
    class="box"
    @mousemove="mousemove"
    @mouseup="mouseup"
    @selectstart="selectstart"
  >
    <ul>
      <li class="node" v-for="item in dataList" :key="item">
        {{ item }}
      </li>
      <li class="scroll-bar">
        <div
          class="sild-block"
          :style="{ top: slidBlockTop + 'px' }"
          @mousedown="mousedown"
        ></div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, computed } from 'vue'

export default defineComponent({
  name: 'animataion',
  setup () {
    const dataList = reactive([])
    const slidBlockTop = ref(0)
    for (let i = 0; i < 10000; ++i) {
      dataList.push(i)
    }
    let flag = false
    function mousedown () {
      flag = true
    }
    function mouseup () {
      flag = false
    }
    function mousemove (e) {
      if (flag) {
        const scrollBar = document.querySelector('.scroll-bar')
        const cursorClientY = e.clientY
        const scrollBarClientY = scrollBar.clientHeight
        let top = cursorClientY - scrollBarClientY
        top = top < 0 ? 0 : top > 200 ? 200 : top
        slidBlockTop.value = top
      }
    }
    function selectstart (e) {
      e.preventDefault()
    }
    const getData = computed(() => {
      return dataList.slice(0, 12)
    })
    return {
      getData,
      dataList,
      mousedown,
      mouseup,
      mousemove,
      selectstart,
      slidBlockTop
    }
  }
})
</script>
<style lang="scss">
body {
  margin: 0;
}
.box {
  padding: 200px;
}
ul {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
  .scroll-bar {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 20px;
    background-color: #ccc;
  }
  .sild-block {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 20px;
    background-color: red;
    transition: all 0.5s linear;
  }
}
</style>
