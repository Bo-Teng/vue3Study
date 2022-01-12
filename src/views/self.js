export default void async function fn() {
  await new Promise(res=>{
    res(1)
  }).then(res)
}()