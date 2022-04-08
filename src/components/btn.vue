<template>
  <div class="box">
    <div>
      <div class="tip_top">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
      <img src="../assets/logo.png" alt="" />
      <div class="tip_bto">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
    </div>
    <div>
      <div class="tip_top">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
      <img src="../assets/logo.png" alt="" />
      <div class="tip_bto">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
    </div>
    <div>
      <div class="tip_top">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
      <img src="../assets/logo.png" alt="" />
      <div class="tip_bto">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
    </div>
    <div>
      <div class="tip_top">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
      <img src="../assets/logo.png" alt="" />
      <div class="tip_bto">
        dsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdldsjflsajlfjasdlfjalsjfdl
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, context) {
    function tobtn () {
      context.emit('click', '1111')
    }
    return { tobtn }
  },
  emits: {
    customEvent: params => {
      return false
    },
    click: null
  }
})
</script>

<style lang="scss" scoped>
img {
  width: 100px;
}
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  div {
    width: 200px;
    word-break: break-all;
    margin: auto 0;
  }
  img {
  
  }
  // .tip_top {
  //   transform: translateY(-50px);
  // }
  // .tip_bto {
  //   transform: translateY(50px);
  // }
}
</style>
<style>
body {
  margin: 0;
}
</style>
