import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import lodash from '../../public/lodash.js'
export default defineComponent({
  setup() {
    lodash.call(window)
    const fn = _.ary((...a) => {
      console.log(a)
    }, 2)
    fn(1, 2, 3, 4, 5, 6, 7, 8, 9)
  }
})
