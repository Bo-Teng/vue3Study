import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const text = ref('tb')
    const router = useRouter()
    const btnClick: () => object = (): object => {
      let time: number | undefined
      return () => {
        clearTimeout(time)
        time = setTimeout(() => {
          text.value += '靓仔'
          router.push('/home')
        }, 500)
      }
    }
    return { text, btnClick }
  },
  render() {
    const { text, btnClick } = this
    return (
      <>
        <div><el-button onClick={this.btnClick()} type="primary">el-btn</el-button><span>{this.text}</span></div>
        <div>{this.text}</div>
      </>
    )
  }
})