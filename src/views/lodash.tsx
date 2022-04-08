import { defineComponent, ref, Ref, reactive } from 'vue'
export default defineComponent({
  name: 'lodashs',
  setup () {
    let ruselt: Ref = ref(0),
      callback: any = reactive({})
    interface g {
      [key: string]: number
    }

    const c: Promise<number> = new Promise(res => {
      setTimeout(() => {
        res(Math.random() * 10)
      })
    })
    function * g (): Generator<Promise<number> | any> {
      let a
      a = yield c
      yield a
      return a
    }
    callback = g()
    function count () {
      const result = callback.next(10)
      console.log(result)
      if (result.done) ruselt.value = result.value
      else count()
    }
    function * one () {
      yield 1
      yield 2
      yield 3
      yield 4
    }
    function * two () {
      let a = yield * [1, 2, 3, 4, 5]
      console.log(a)
      return a
    }
    let o = two()

    function ap (f: any) {
      return function (this: any) {
        return f.apply(this, arguments)
      }
    }
    let f: (...a: number[]) => void = ap((...a: number[]): number => {
      console.log(a)
      return 1
    })
    f(1, 2, 3, 4, 5, 6, 7)

    return () => (
      <>
        <button onClick={count}>+&+</button>
        <div>result:{ruselt.value}</div>
      </>
    )
  },
})
