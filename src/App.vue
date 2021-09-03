<template lang="">
  <div>
    <router-view :data="childData" @update="update" />
    <div>F:{{ childData }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'

export default defineComponent({
  setup () {
    let childData = ref('xxx')
    const update = function () {
      childData.value += 's'
    }
    return {
      childData,
      update
    }
  },
  provide () {
    return {
      Bext: 'bibibibi'
    }
  }
})
</script>
