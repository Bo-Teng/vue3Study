// type User = {
//   id: number
//   kind: string
// }
// type ReturnMake<T extends User, U> = {
//   // [K in keyof U as K extends keyof T ? K : never]: U[K];
//   // [k in keyof U extends keyof T ? k : never]: U[]
// }
// function makeCustomer<T extends User> (u: T): ReturnMake<T, User> {
//   return {
//     id: u.id,
//     kind: 'customer'
//   }
// }
import { a } from './src/dom2'
console.log(a)
