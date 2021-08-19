<template lang="">
  <div>
    <button @click="btnClick()">templateBtn</button>
    <h1>{{ text }}</h1>
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      text: 'xxx'
    }
  },
  methods: {
    btnClick (this: any): object {
      console.log(1)
      return (): void => {
        this.text += 'tb'
        
      }
    }
  },
}
</script>
<style lang="" scoped></style>
