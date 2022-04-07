import { defineComponent, ref, h } from 'vue'
import { useRouter } from 'vue-router'
import lodash from '../../public/lodash.js'
import '@/style/login.scss'
export default defineComponent({
  setup() {
    lodash.call(window)
    function Promise(executor) {
      //添加属性，一开始的状态为pending
      this.PromiseState = 'pending';
      this.PromiseResult = null;
      // 声明属性
      this.callbacks = [];
      //保存实例对象的this值
      const self = this;
      //resolve 函数
      function resolve(data) {
        // 判断状态（解决状态可逆）
        if (self.PromiseState !== 'pending') return
        //修改对象状态（promiseState）
        self.PromiseState = 'fulfilled';
        //设置对象结果值（promiseResult）
        self.PromiseResult = data;
        //调用成功的回调函数
        setTimeout(() => {      //++++++++
          self.callbacks.forEach(item => {
            item.onResolved(data)
          })
        });

      }
      //reject 函数
      function reject(data) {
        // 判断状态（解决状态可逆）
        if (self.PromiseState !== 'pending') return
        //修改对象状态（promiseState）
        self.PromiseState = 'rejected';
        //设置对象结果值（promiseResult）
        self.PromiseResult = data;
        //调用失败的回调函数
        setTimeout(() => {      //++++++++
          self.callbacks.forEach(item => {
            item.onRejected(data)
            
          })
        });

      }
      try {
        //同步调用执行器函数,执行resolve和reject
        executor(resolve, reject);
      } catch (e) {
        reject(e);
      }
    }
    //给原型添加then方法，这样实例对象可以用then方法
    Promise.prototype.then = function (onResolved, onRejected) {
      const self = this;
      // 判断回调函数参数
      if (typeof onRejected !== 'function') {
        onRejected = reason => {
          throw reason;
        }
      }
      if (typeof onResolved !== 'function') {
        onResolved = value => value;
        //value => {return value}
      }
      return new Promise((resolve, reject) => {
        //封装函数
        function callback(type) {
          try {
            // 获取回调函数的执行结果
            let result = type(self.PromiseResult);
            //判断
            if (result instanceof Promise) {
              //如果是Promise类型的对象
              result.then(v => {
                resolve(v);
              }, r => {
                reject(r);
              })
            } else {
              //结果的对象状态为成功
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        }
        if (this.PromiseState === 'fulfilled') {
          setTimeout(() => {     //++++++++
            callback(onResolved);
          });

        }
        if (this.PromiseState === 'rejected') {
          setTimeout(() => {     //++++++++
            callback(onRejected);
          });
        }
        if (this.PromiseState === 'pending') {
          this.callbacks.push({
            onResolved: function () {
              callback(onResolved);
            },
            onRejected: function () {
              callback(onRejected);
            }
          })
        }

      })
    }
    const obj = new Promise((res, rej) => {
      setTimeout(() => {
        console.log('sss');
        res('TB')
      }, 2000)
    })
    obj.then(res => {
      console.log(res, 'then');
    })
    const obj_1 = {
      a: 1
    }
    obj_1[Symbol.toPrimitive] = function (a) {
      console.dir(a, '1');
      console.dir(this.a, '2');
    }
    obj_1 + ''
    return () => (<div style="width:300px;height:300px;"><div class='box'>111</div></div>)
  }
})
