import { defineComponent } from 'vue'
import son from '@/components/btn.vue'
export default defineComponent({
  setup () {
    let promise: () => Promise<void> = () =>
      new Promise<void>(res => {
        setTimeout(res, 1000)
      })
    let promise_2: Promise<void> = new Promise<void>(res => {
      // setTimeout(res, 1000)
      res()
    })

    let iterable = {
      [Symbol.asyncIterator] () {
        return {
          flag: 0,
          async next () {
            await promise()
            await promise_2
            return {
              value: this.flag++,
              done: this.flag > 5,
            }
          },
        }
      },
    }
    ;(async () => {
      for await (let key of iterable) {
        console.log(key)
      }
    })()
    return () => {
      return (
        <>
          <div>
            
            <son onClick={customEvent} />
          </div>
        </>
      )
    }
  },
<<<<<<< HEAD
  components: {
    son
  }
=======
>>>>>>> af18eba912739fd0c57bec9f054e7c94851a5aa6
})
