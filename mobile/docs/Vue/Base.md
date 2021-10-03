# Vue - `基础`

## 单文件组件

**优点**

+ 提供了更好的封装性
+ 优雅的模板支持
+ `Scoped Css` 支持
+ 通过 `vue-loader` 可以配合 各种 预处理器 进行构建

## 命名规则`(camelCase/PascalCase/kabab-case)`

+ **`camelCase`**

  **Js 函数 / 变量 / props/data(Vue)等**

  > `props: { bigProp: String } / data: { nikeName: 'xxx' }`

+ **`PascalCase`**

  **Js 类 / 构造函数 / 项目的组件文件**

  > `components/(文件夹下) VideoItem.vue`

+ **`kabab-case`**

  **HTML(因为 html 中是 大小写不敏感的 🍓)**

  > `Vue.component('video-item', {})`
  >
  > `<video-item :big-prop='1' /> / video-item && big-prop` 规范来讲是这么传递的

## 模版`(模板语法/指令/ref/JSX)`

### 模板语法

+ `Vue.js` 的模板都是 合法的 `HTML`

+ `{{}}` 文本插值

+ `v-once` 一次性插值( 请留意 可能会影响到其他数据的绑定 )

+ `v-html` 插入 `原始HTML`

  > ( 易导致 Xss 攻击，绝不要对 UGC(~用户更新的一些东西~) 内容使用 )

### 指令

**指令 是带有 `v- 前缀的特殊特性`**

+ `v-bind:(:)`

+ `v-on:(@)`

+ `v-if / v-else-if / v-else`

+ `v-show`

  **`v-if` & `v-show` 的区别：**

  + `v-if` 是"真正"的条件渲染，在切换过程中条件块内的 **事件监听器和子组件会被 适当的销毁和重建**

  + `v-if` 是 惰性 的。直到条件第一次变为 真 时，才会开始渲染条件块。

    > 就是 只要 `v-if` 只要当条件为 `true` 时，才会开始渲染。 不然不会触发。

  + `v-show` 是 元素 始终 都会被渲染并保留在 `DOM` 中

  + `v-show `只是简单地切换元素的 `CSS` 属性 `display`

+ `v-for`

  **`:key` 就是更高的提升渲染效率，更好的执行 `diffpatch`**

+ **🎈🎈🎈 `v-for && v-if 🐷~`**

  + **不推荐 `v-for` 和 `v-if` 在同一个元素上。**
  + **如果非要用， `v-for` 的优先级高于 `v-if`**

  + **如果 `DOM` 结构中， `for-if` 同时出现的话 `🐷~`**
    + 在 `Js` 中，有两种情况：
      + `for() { if() {} }`
      + `if() { for() {} }`
    + 在`Vue`的`DOM`中约定，为 `for` 包裹着 `if` 的形式。
  
+ `ref` 

  **直接访问 子组件 或者 模板上的 `DOM`节点 时使用**

  + 调用：**`this.$refs.refName['DOM里面的 方法/属性']`**
  + 🍓： **`是在 模板渲染 后 才可以获取到的~`**

+ `JSX`

  + 条件渲染

    ```jsx
    { // 条件渲染
      render() {
        if (this.user.age > 18) {
          return <div>Welcome, { this.user.name }</div>
        }
        return <div>No Log</div>
      }
    }
    ```

  + 列表渲染

    ```jsx
    { // 列表渲染
      data() {
        return {
          classmates: [
            { id: '1', name: 'xxx' }
          ]
        }
      },
      render() { // 列表渲染
        return (
          <div class="hello">
            {
              this.classmates.map((p, index) => (
                <div key={p.id}>{`${index}.${p.name}`}</div>
              ))
            }
          </div>
        );
      }
    }
    ```

## 数据`(Prop&Data/计算属性和侦听器/数组操作)`

### `Prop&Data`

+ **`Vue`是单向数据流**

+ **`Data`**

  + **`Data` 为什么是函数？**

    + **因为只有返回 生产`data` 的函数。**

    + **这个组件 产生的 每一个实例 才能维持一份被返回对象的 独立拷贝。**

      > 如果是对象的话， 他们可能会 引用到同一个对象, 数据可能会发生 **紊乱**

+ **`Prop`**

  + **子组件是 不推荐直接修改父组件 的。 (因为如果层级嵌套很多的话， 不容易定位问题~)**

  + **`Prop` 属性校验**

    + `type`
      1. 类型检查，`value` 为 对应类型的构造函数。
      2. **`null` 和 `undefined` 会通过任何类型验证。**
      3. **多种类型传入数组 `[String, Array]`**
    + `required`
      + **是否必填**
    + `default`
      + 默认值，默认值为 **对象或者数组的默认值**， 必须从一个 **工厂函数** 获取。

    + `validator`
      + 自定义校验函数，返回 `true` 为通过， `false` 为不通过。

### **计算属性和侦听器 `(computed / watch / methods)`**

+ **计算属性` (computed)`**

  + **计算属性 是基于内部的 响应式依赖 进行缓存的**

  + **只在相关 `响应式依赖 发生改变时 ` 它们才会重新求值**

    + **🎈 ~ 如果我们希望在 模板中使用常量内容，又不希望被 `data` 作为响应式依赖收集**

    + **🎈 ~ 利用 computed 的缓存特性，将其 放置在 `computed` 里。**

    + **🎈🎈 ~ 如果 计算时间 比较长，或者数据量 过大的时候，放在 `computed` 里可能会阻塞渲染，**

      **所以，将其 放置在 `watch`里面 是比较好的一个选择。**

+ **侦听器 `(watch)`**

  + **在数据变化后，执行 异步操作 或者 开销较大的操作。**

+ **方法 `(methods)`**

  + **无缓存**
  + **每当触发重新渲染， 调用方法将 重新再次 执行函数**

### 数组操作

```js
{ // 这样 操作数据 无反应
  data() {
    return {
      classList: [
        { id: 1, name: 'xxx' },
      ],
    }
  },
    methods: {
      change() {
        this.classmates[2] = { id: 3, name: 'x123' };
      },
    }
}
```

+ **`Object.defineProperty`**

  + **不能检测 对象 属性的 添加 或者 删除。**
  + **不能检测 数组长度变化 (通过`改变length` 而增加的长度 不能监测到)**

+ **`Vue` - 不是因为`defineProperty` 的局限性， 而是处于性能考量的，不会对数组的 每个元素 都监听。**

+ **解决： ✨🍓✨**

  + **`Vue.set | this.$set`（将 属性添加 配置到 响应式 依赖中）**

  + **`Vue.delete | this.$delete`  在 响应式依赖中 删除 属性）**

  + **对 数组 的一些方法 进行了 代理封装**

    **`push() pop() shift() unshift() splice() sort() reverse()`**

    **以上 这些方法 都可以在数组操作的时候 被监听到~**

## 事件&样式`(事件(事件修饰符)/双向绑定/样式)`

### 事件

+ **`v-on:click (@click)`**

  ```jsx
  <button @click="add"></button>
  <button @click="add2($event, num)"></button>
  {
    methods: {
      add(event) {
        // 如果不传递参数 默认参数就是 event 原生事件
        event instanceof MouseEvent
        // true
        `${ this } 在方法里指向的是当前 Vue 实例`
      },
        add2(event, num) {
          // 如果传递参数 就是 $event 来识别 是否传递的是 原生事件
          event // 就是原生 DOM 事件
        },
    }
  }
  ```

#### 事件修饰符

为了保证 methods方法 只有纯粹的数据逻辑(**和 DOM解耦，易于 单元测试**)

**不去做 DOM 相关的处理操作**

+ **`.stop` - 阻止 单击时间 继续传播**

+ **`submit.prevent` - 提交事件 不再重载 页面(对于 form 标签)**

+ **`submit.prevent` - 也可以只有 修饰符 没有方法。**

+ **`.stop.prevent ` -  修饰符可以串联 (对于 a 标签， 就是不会对页面 进行跳转了~)**

+ **`.capture` - 添加事件监听器时，使用事件捕获模式(即 内部元素 触发的事件 先在此处理， 然后交由 内部元素 进行处理。)**

+ **`.self` - 只有当 `event.target` 时当前元素自身时才 触发处理函数**

  >  **(即 事件 不是从内部元素触发的， 冒泡上来的 就不会处理)**

+ **`once` - 点击的事件，只会触发一次。**

+ **`scroll.passive` - 滚动事件的默认行为 (即 滚动行为) 将会立即触发， 不等待 `onScroll` 完成。**

  > **其中包含 `event.preventDefalt()` 的情况**

+ **`keyup.enter` / `keyup.page-down` / `keyup.13`** - 只有在 `key` 是 `enter` 时调用事件

+ **`keyup.alt.67` - Alt + C**

+ **`@click+ctrl`  - 单击 + ctrl (即使 alt + shift 一同按下时 也会触发)**

#### 自定义事件

+ **单向数据流 `(父传子 -> props)`**

+ **双向绑定 (子传父 -> $emit) 🍓🍓**

  ```jsx
  <child-dom @update:msg="msg = $event"></child-dom>
  <button @click="$emit('update:msg', 'hi')"></button>
  // update:msg 需要声明msg - (:msg)
  ```

  ```jsx
  // 为了方便 这样一种模式  子 修改 父
  // 这样就要求 事件名称需要 事件:prop传递进来的key值
  <child-dom :msg.sync="msg"></child-dom>
  ```

### 样式

**只有 `false 0 '' null undefined NaN` 才会默认转换成 `false`， 其余都是 `truthy`值**

+ **`:class`**

+ **`:style`**

  + 可以用 **驼峰 / 串式**

    `border-color` / `borderColor`

  + **`BEM` 的命名方式， 来解决 命名方式污染的 问题。**

  + **`scoped` 通过 `Vue-loader` 进行了一层 `hash` 封装， 来区分 不同的 单文件组件。**

    ```jsx
    <div data-v-154asdad class="test"></div>
    
    .test[data-v-154asdad] {}
    ```

#### 八皇后`(学习记录)`

+ **父级 - `{ float: left }`**

+ **子级 - `{ display: flow-root }  - 清除浮动~`**

+ 这样就 彼此不相邻的格子 形成了  列 (奇数行 偶数行 各自一个颜色)

  ```css
  .row:nth-child(2n) .cell:nth-child(2n) { background: #999; }
  .row:nth-child(2n) .cell:nth-child(2n - 1) { background: #efefef; }
  ```

  ```jsx
  <div v-for="(item, rindex) in grids"></div>
  <div v-for="(cell, cindex) in grids" @click="select(rindex, cindex)"></div>
  {
    select: function(rindex, cindex) {
      this.grids[rindex][cindex].ok = true;
    }
  }
  ```

## 组件 `(组件注册/生命周期/动态组件)`

### **组件注册** `(全局/局部)`

+ **全局注册**

  ```jsx
  Vue.component('custom-a', {
    render() {
      return <div>xxx</div>
    }
  });    
  ```
  
  **全局注册的组件，可以在任何地方使用。**
  
  **全局注册的组件，会在后续打包都打包进去。 可能会导致 体积 过大。 🍓🍓🍓**
  
  + **局部注册**

    ```jsx
    <pro-child></pro-child>
    import ProChild from './ProChild.vue';
    {
      components: {
        ProChild,
      }
    }
    ```

    **局部注册的组件， 只能在 当前组件 中使用。**

    + **如果 局部注册的组件 在很多地方中使用 🍓🍓🍓**

      > **可以使用 `webpack <-> require.context()` 来批量的 导入组件**
      >
      > **然后在 `Vue.component() ` 来全局注册组件**
      >
      > **但是这样 解决不了 全局注册导致体积过大的问题**

      > **`require.context()` 里面 可以通过 正则匹配 来匹配 vue 文件**
      >
      > **这样就可以规定其中一个文件夹里的 是 `Vue的全局组件`， 其余还是 手动引入** 🍓🍓🍓
      >
      > 这样就 **约定大于规范了**

+ **按需载入**

  + **`babel-plugin-import`**

  + **`babel-plugin-component (Element)`**

  + ```js
    import { Button } from 'component';
    // 具体 可参考 Api
    ```

### 生命周期

+ **`beforeCreate`**

  **`data methods` 和 `DOM节点` 不可以访问  值都是 `undefined`**

  **🍓 最初调用触发，`data` 和 `events` 都不能用，可以在这里 处理 整个系统加载的 `loading`。**

+ **`created`**

  **可以访问 `this` 实例挂载的数据   然后 `Vue` 就进行了 解析和渲染的过程**

  **🍓 已经具有响应式的 `data，` 可以发送 `events`。 可以再这里发送请求**

+ **`beforeMount` (`ref` 还是不可以访问)**

  **模板已经编译好 但是模板 还没有 根据数据 进行渲染**

  模板编译后，渲染之前触发。`SSR`中不可用。基本 用不上这个 `Hook`🍓

+ **`mounted`**

  **渲染完毕 `Dom` 可以访问, `ref` 可以进行访问**

  **🍓 渲染之后触发，可以访问 `组件中的DOM` 以及 `$ref`, `SSR`中不可用**

  > **一般在用于需要在 `vue` 中嵌入 非`vue`的组件时 (例如 插入 富文本编辑器 swiper 啥的)， 不建议用于发送请求🍓🍓**

+ **`beforeUpdate`**

  **`data` 被修改时，触发。 虚拟DOM重新渲染 `dispatch`**

  **🍓 在数据改变后，模板改变前触发。 切勿使用它 监听数据 的变化。 `(使用计算属性 和 watch 监听)`**

+ **`updated`**

  **`data` 更新完成 `虚拟DOM` 渲染完成**

  **🍓 在数据改变后，模板改变后触发。 常用于重渲染后的打点，性能检测或者触发 `Vue` 组件中非`Vue`组件的更新。**

+ **`beforeDestroy`**

  **组件卸载之前 调用。然后 `Vue` 解除绑定，销毁子组件 以及 事件监听**

  **🍓🍓 组件卸载前触发，可以在此时清理事件、计时器、或者 取消订阅操作**

+ **`destroyed`**

  **组件卸载完成之后调用。**

  **🍓 卸载完毕后触发， 可以做最后的 打点 或 事件触发操作。**

### 动态组件

+ **组件相同的时候 可以通过 `computed` 来切换。** 🍓🍓🍓

+ **组件不同的时候 可以通过 动态组件去注册。** 🍓🍓🍓

  ```jsx
  import component1 from './component1';
  import component2 from './component2';
  <component :is="compoentName"></component> 
  { 
    // 动态组件的话 不需要注册
    // components: {
    //   component1,
    //   component2
    // },
    computed: {
      compoentName() {
        return true ? component1 : component2;
      }
    }
  }
  ```

  **切换组件之后 `compoentName`切换之后。 数据无法保留。**

  **如果想要保存 组件数据， 需要使用 `keep-alive`**

  ```jsx
  <keep-alive>
    <component :is="compoentName"></component>
  </keep-alive>
  ```

#### `keep-alive`

**`keep-alive` 组件 可以缓存当前子组件生成的 组件实例，通过 `vm.$el` 获得先前的 `DOM` 元素，并直接插入到 页面中。**

+ **`Props`**

  + **`include`**

    **字符串 或 正则表达式。只有名称匹配的组件 会被缓存。**

  + **`exclude`**

    **字符串 或 正则表达式。 任何名称匹配的组件 都不会被缓存。**

  + **`max`**

    **数字。 最多可以缓存 多少组件实例。**

#### 子组件 `(Life Hook)`

+ **`activated`(当前激活的时候 调用)**
  + **`keep-alive` 内组件加载成功后调用**

+ **`deactivated` (切换走的时候 调用)**
  + **`keep-alive` 内组件缓存成功后调用**

### **八皇后逻辑**

```jsx
const grids = new Array(8).fill(1).map((_, r) => {
  return new Array(8).fill(1).map((_, c) => {
    return {
      key: `key-${r * 8 + c}`,
      ok: false
    };
  });
});

export default {
  data() {
    return {
      grids
    };
  },
  methods: {
    select(rindex, cindex) {
      if (this.validate(rindex, cindex)) {
        this.grids[rindex][cindex].ok = !this.grids[rindex][cindex].ok;
      } else {
        alert("当前位置不能放置皇后");
      }
    },
    validate(rindex, cindex) {
      // 横
      for (let i = 0; i < this.grids[rindex].length; i++) {
        if (this.grids[rindex][i].ok) {
          return false;
        }
      }

      // 竖
      for (let i = 0; i < this.grids.length; i++) {
        if (this.grids[i][cindex].ok) {
          return false;
        }
      }

      // 撇
      for (let i = 0; i < this.grids[0].length; i++) {
        let y = rindex + cindex - i;
        if (y >= 0 && y < this.grids.length && this.grids[y][i].ok) {
          return false;
        }
      }

      // 捺
      for (let i = 0; i < this.grids[0].length; i++) {
        let y = rindex - cindex + i;
        if (y >= 0 && y < this.grids.length && this.grids[y][i].ok) {
          return false;
        }
      }

      return true;
    }
  }
};
```

