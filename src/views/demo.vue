<template>
  <div>
    <div class="box">box1</div>
    <div class="box extend">box2</div>
    <div class="box a">box3</div>
  </div>
</template>

<script lang="ts">
let name = 'global'
import {
  defineComponent,
  ref,
  computed,
  reactive,
  toRefs,
  toRef,
  onMounted,
  watch,
} from 'vue'
import * as t from '../export2'
export default defineComponent({
  model: {
    prop: 'value',
    event: 'change',
  },
  setup(prop, context) {
    let x = 1
    function fn() {
    }
    fn()
  },
  props: ['data'],
})
</script>

<style lang="scss">
$red: red;
$green: green;
@use '../style/login';
@mixin mixin($color: $red) {
  background: $color;
}
.box {
  @include mixin($red);
}
.extend {
  @include mixin($green);
}
.a {
  @extend .extend;
}
</style>
