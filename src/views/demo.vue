<template>
  <div>
    <input type="text" v-model="computeds" />
    {{ computeds }}
    <br />
    {{ val }}
  </div>
</template>

<script lang="ts">
interface obj {
  [a: string]: number
}
function fn<T extends obj, U extends keyof T> (obj: T, key: U): T[U][] {
  let arr = []
  arr.push(obj[key])
  return arr
}

let obj: obj = {
  a: 1,
  b: 2,
  c: 3
}
for (const key in obj) {
  console.log(fn(obj, key))
}

import {
  defineComponent,
  ref,
  computed,
  reactive,
  toRefs,
  toRef,
  onMounted,
  watch
} from 'vue'
let com = function () {
  const val = ref(1)
  let computeds = computed({
    get () {
      return val.value
    },
    set (i: any) {
      val.value = i
    }
  })
  return { computeds, val }
}

export default defineComponent({
  model: {
    prop: 'value',
    event: 'change'
  },
  setup (prop, context) {
    const { computeds, val } = com()
    return { computeds, val }
  },
  props: ['data']
})
</script>

<style></style>
