import { defineComponent, ref, h } from 'vue'
import '@/dom2'
import '@/style/login.scss'
export default defineComponent({
  setup () {
    class a {
      static [Symbol.hasInstance] () {
        return true
      }
      say () {
        console.log('xxxx')
      }
    }
    let obj = {
      __proto__: a.prototype,
      [Symbol.hasInstance] () {
        return true
      },
      log () {
        super.say()
      }
    }

    // console.log(Array instanceof (obj as any))
    console.dir(obj)
    obj.log()
  }
})
