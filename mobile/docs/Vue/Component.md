# Vue - `组件`

## 自定义指令

### 指令周期描述 `(bind / inserted / update / unbind)`

**🍓🍓🍓 一般都是 将 `DOM/BOM` 操作 和 逻辑 解耦，以便于 `代码 methods 方法` 更方便做 单元测试**

```jsx
Vue.directive('demo', {
  // 第一次绑定时调用 / 可以进行初始化设置
  bind: (el, binding, vnode) => {},
  // 插入到父节点使用 / 保证父节点存在，但不保证已经插入
  inserted: (el, binding, vnode) => {},
  // 组件的 `VNode` 更新时调用 / 可能发生在 子VNode 更新之前 / 可以通过比较前后的值来忽略 不必要的模版更新
  update: (el, binding, vnode, oldVnode) => {},
  // 指令与元素 解绑时 调用。
  unbind: (el, binding, vnode) => {},
})

<div v-demo></div>
```

+ **`bind`**

  **只调用一次， 指令第一次绑定到元素的时候 调用**

  **在这里 可以进行一次性 的初始化设置**

+ **`inserted`**

  **被绑定的元素 插入到父节点 时 调用**

  **(仅保证 父节点存在， 但不一定 但是不一定被 插入到文档中)**

> **`bind` 中 `el.parentNode` 为 `null`。**
>
> **`inserted` 中可通过 `el.parentNode` 访问当前节点的 父节点。**
>
> **`inserted` 钩子函数的频率 要高于 `bind` 函数。**

+ **`update`**

  **所在组件的 `VNode` 更新时调用。**

  **但是可能发生在其 `子VNode` 更新之前。**

  **指令的值 可能发生了改变， 也可能没有。**

  **但是可以通过 比较更新前后的值 来 忽略不必要的模版更新。**

+ **`componentUpdate`**

  **指令所在组件的 `VNode` 以及 `VNode` 全部更新后 调用**

+ **`unbind`**

  **只调用一次， 指令与元素 解绑的时候 被调用。**

### 指令周期 钩子函数描述 `(el / binding / VNode / oldVNode)`

```js
{
  el,
  { // binding
    name, value, oldValue, expression, arg, modifiers
  },
  vnode,
 	oldVNode
}
```

+ **`el`**

  **指令所 绑定的元素，可以用来直接操作 DOM**

+ **`binding`**

  **`binding` 对象**

  + `name` - 指令名， 不包括 `v-` 前缀
  + `value` - 指令的绑定值，例如： `v-my-directive="1 + 1" `中， 绑定值为 2
  + `oldvalue` - 指定绑定的前一个值， 仅在 `update` 和 `componentUpdate` 钩子中可用
  + `expression` - 字符串形式的指令表达式。 例如：`v-my-directive="1 + 1"` 中， 表达式为 `1 + 1`
  + `arg` - 传给指令的参数，可选。 例如：`v-my-directive:foo` 中， 参数为: `"foo"`
  + `modifiers` - 一个包含修饰符的对象 例如:  `v-my-directive.foo.bar` 中 修饰符对象为 `{ foo: true, bar: true }`

+ **`vnode`**

  **`vue` 编译生成的 虚拟节点**

+ **`oldVNode`**

  **上一个虚拟节点， 尽在 `update` 和 `componentUpdate` 钩子中可用**

**除了 `el` 之外， 其他参数应该都是 只读的，切勿 进行修改。如果需要在钩子之间共享数据，仅以通过元素的 `dataset` 来进行。**

**🍓🍓🍓当我们的 `methods` 中存在的操作 `DOM`/`BOM` 的逻辑时， 就该思考 可否 抽象成一个 自定义指令？**

**🍓🍓🍓 这样更容易被 单元测试。**

### 实操代码

```jsx
/*
	1. v-resize 指令，监听 窗口大小改变， 通过监听函数 onResize 响应。
	2. 可通过 direction 控制监听页面高度 或者 宽度的变化 v-resize:[direction].quiet="onResize"
	3. 可通过修饰符 .quiet 来控制是否只在 指令初始化的时候 响应 onResize函数
*/
<div v-resize="onResize">window width is: {{ length }}</div>
{
  data() {
    return {
      direction: 'verical',
      length: 0,
    }
  },
  methods: {
    onResize(length) {
      this.length = length;
    }
  }
}

Vue.directive('resize', {
  inserted: (el, binding, vnode) => { // 插入到父节点的时候 调用
    const { value, arg, modifiers } = binding;
    const callback = value; // 绑定值 e.g. v-a="1+1" 绑定值为 2
    const direction = arg; // 传给指令的参数 e.g. v-a:foo 参数为 foo
    const modifiers = modifiers; // 一个包含修饰符的对象 e.g. v-a.foo.bar 中的修饰符对象为 { foo: true, bar: true }
    
    const result = () => {
      return direction === 'verical' ? window.innerHeight : window.innerWidth;
    };
    const onResize = () => callback(result());
    
    window.addEventListener('resize', () => onResize);
    if (!modifiers || !modifiers.quiet) { // quiet <-> 安静的，平静的
      onResize(); // 就在 inserted 调用的时候 会 调用一次。
    }
    
    // 除了 el 之外，其他数据都是只读的
    // 所以我们可以把 共享的数据 放置在 el 上
    el._onResize = onResize;
  },
  unbind: (el, binding, vnode) => {
    if (el._onResize) {
      window.removeEventListener('resize', () => el._onResize);
      delete el._onResize; // ✨✨✨
    }
  }
})
```

## 双向绑定 `(v-model / 表单处理 / 自定义组件 v-model 双向绑定)`

### `Vue` 是单向数据流的



## 组件设计

## 组件通信

## 插件

## 组件复用

