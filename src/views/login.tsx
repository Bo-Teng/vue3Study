import { defineComponent } from 'vue'
import son from '@/components/btn.vue'
export default defineComponent({
  setup () {
    function customEvent (...a: any[]) {
      console.log(a)
    }
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
  components: {
    son
  }
})
