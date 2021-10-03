# Node - `引导`

## `Node` 学习资源推荐

+ **[Node学习的正确姿势](https://github.com/i5ting/How-to-learn-node-correctly)**

+ **[Node面试集锦](https://github.com/jimuyouyou/node-interview-questions)**
  + 模块机制
  + 事件异步机制
  + 存储

+ **[Node最佳实践](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.chinese.md)**

## `Node` 安装 及 版本管理

+ `Mac`

  + `MacOS-Install(.pkg)` 官方提供的 安装包； 傻瓜式安装。

  + `Homebrew` 命令行安装到全局，手动管理。

  + `NVM` 推荐使用，管理版本，方便切换。

    + `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh`

    + 下载`nvm`

      > `nvm --help` 检测 `nvm` 安装成功了没
      >
      > `nvm install --lts` 安装最新最稳定的 版本`node`
      >
      > `node -v` 检测 `Node` 安装以及安装版本

+ `Node` 版本选择

  + **`LTS / Current` ?** 
    + 生产环境下 使用长期支持版本
    + 实验项目 可以使用 `Current` 尝试新特性
    + **奇数为 不稳定版本，偶数 为相对稳定版本 🍓🍓🍓**
  + **始终保持最新？  No**
    + 生产环境，稳定大于一切
    + 停止维护，并非项目不可用
    + 使用版本管理工具，在本地开发时 可以维护多个版本，生产环境只需要一个版本。

## `Node` 模块机制 及 `Npm`(包管理工具)

### 模块机制

+ `Node`应用由模块组成，采用 `CJS/ESM` 模块规范来组织
+ **每个文件就是一个模块，有自己的作用域**
+ **在一个文件里面定义的变量，函数，类。都是私有的，对其他文件是不可见的**
+ **在 `Node` 中，模块的加载是运行时 同步加载 的 🍓🍓🍓 (加载进来 然后执行代码)**
+ **模块可以多次加载， 但是只会在第一次加载时运行一次，然后运行结果就被缓存了。 🍓🍓🍓**

### 模块加载机制 `(require/export)`

```js
const xx = require('xx');
```

#### **路径类型**

+ **相对路径 or 绝对路径**
  1. 将路径转为绝对路径
  2. 查找当前路径下是否存在 `xx/xx.js/xx.json/xx.node` 等文件
  3. 如果没有 就将 `xx` 当作目录，找到下面的 `index/index.js/json...`
+ **内置模块**
  + 返回该模块，比如 `path/fs`
+ **没有路径**
  + 根据所在的父级模块确定安装目录，在目录中查找 入口文件 

+ **缓存**

  **实际中的 模块处理，还有 缓存 的一个概念在。**
  + 缓存中存在了，直接返回。
  + 内置模块，则直接加载。
  + 根据找到的文件创建 新的模块并缓存。

### **扩展👉 `(缓存函数)`**

**`Js` - 缓存函数 `( memoize )`**

+ 实现原理 - **把参数和对应的结果数据，存在一个对象中。**

  **调用的时候，判断参数对应的数据是否存在，存在就返回 对应的结果数据**

  ```js
  // fn 的简易版本
  const memoize = (fn, hash) => {
    let cache = {};
    return function(key) {
      if (!cache[key]) { // 不存在，计算并缓存值
        cache[key] = fn.apply(this, arguments);
      }
      return cache[key]; // 存在 直接返回值
    }
  }
  
  // fn && hash 组合版本 (hash 是个函数，用来计算 key 值)
  const memoize = (fn, hash) => {
    const memoizeFn = (key) => {
     	const cache = memoizeFn.cache;
      // 如果传入 hash 就用 hash函数 来计算key， 并当作 key
      const address = `${hash ? hash.apply(this, arguments) : key}`;
      if (cache[address]) cache[address] = fn.apply(this, arguments);
      return cache[address];
    }
   	memoizeFn.cache = {};
    return memoizeFn;
  }
  memoize() // return memoizeFn
  memoize(fn, hash)(key) // memoizeFn(key)
  ```

### `Npm`

**`Npm` 代指 `Node` 的模块生态，又 代指 模块安装CLI工具**

**通过 `package.json` 来描述项目的基本信息和依赖， 组成树状结构**

+ **使用 `nvm` 管理 `node`版本**

+ **使用 `nrm` 管理 `npm`源**
  + **`sudo npm i -g nrm`**
  + **`nrm ls`**
  + **`nrm add "url地址  -私有的 npm 包仓库"`**
  + **`nrm use cnpm`**

+ **使用 `npx` 执行命令。 🍓🍓🍓**

+ **`yarn` 加速包下载**
+ **使用 `scripts` 组织工程化脚本入口 🍓🍓🍓**

## `Node` 特点/能力

### 能力

+ **跨平台能力**

  > 前端： web + h5
  >
  > 移动端: hybird
  >
  > Pc端

+ **`Node`后端**

  > 核心特性 `web`应用
  >
  > api-rpc 
  >
  > 测试
  >
  > 部署
  >
  > 最佳实践
  >
  > 微服务
  >
  > 厂商支持

+ 前端

  > `react/vue/angular` 等等

+ 工具

  > 编译工具
  >
  > 构建工具
  >
  > webpacl/gulp
  >
  > 工程化
  >
  > Hack技巧
  >
  > npm 等等...

### 特点

+ **不方便处理 计算密集型 的数据**
+ **适合处理 `高IO` 的 / 吞吐量比较大的。**

## `Node` 架构 ✨~补充

+ `V8`

  **`Js引擎`，将` Js代码`编译成 机器码**

+ `libuv`

  **提供异步功能的 `c库`，异步事件循环，维护一个线程池，抹平一些差异**

+ `c-ares`

+ `crypto`

+ `http`

+ `zlib`

+ `C/C++` / `Binding`

  > 就是 `C/C++/Js库` 的相互转换代码，暴露给 `Js` 环境，实现数据互通。



