<template >
  <div>
    <router-view />
    <!-- <div>F:{{ childData }}</div>
    <div class="box">2</div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef } from 'vue'
export default defineComponent({
  setup() {
    let childData = ref('xxx')
    const update = function () {
      childData.value += 's'
    }
    return {
      childData,
      update,
    }
  },
  provide() {
    return {
      Bext: 'bibibibi',
    }
  },
})
</script>
