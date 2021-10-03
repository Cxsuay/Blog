# Node - `Api`

## `Node` 数据类型

### `Buffer`

+ 流式数据 (非一次性加载完成的数据) 由于产生和使用不一定同速，所以**需要缓存区**
+ **存储需要临时占用大量内存的数据**，内存中开辟的一片区域，用于存放二进制数据
+ 流的生产者 于 消费者 之间的速度通常是不一致的，因此**需要 `buffer` 来暂存一些数据**
+ **`buffer` 大小通过 `highWaterMark` 参数指定**，默认情况下是 `16kb`

```js
Buffer.from(buffer/array/string) // 使用堆外内存 新增Buffer 🍓
Buffer.from(arrayBuffer) // 浅拷贝 arrayBuffer，共享内存
Buffer.alloc(size) // 分配一个指定大小的 Buffer, 默认填0，使用 UTF-8编码 🍓
Buffer.allocUnsafe(size) // 分配一个初始化的Buffer 随机，速度很快 ✨✨✨
```

**流式数据 会自动创建 `Buffer`，手动创建 `Buffer`需谨慎 🍓🍓🍓**

+ **🐷~ 坑：**
  + `alloc`绕开回收机制，性能和内存使用提升，**但不安全，可能会造成数据泄露**
  + **大于 4k**，就不在原定义的 内存池中分配，就会 **从 外部 抽取。**

#### 使用

+ **转换格式**
  + **字符串 - `Buffer.from(string)` / 解码 `buf.toString(string)`**
  + **`JSON - buf.JSON()`**
+ **剪裁和拼接**
  + **剪裁 - `Buffer.slice()` 与 `Array.slice()`不同，返回 `Buffer` 和 `原buf`共享内存**
  + **拼接 -` buf.copy/buf.concat` 返回新的 `Buffer`**
+ **比较和遍历索引**
  + **判断相等 - `buf.equals(buf2)` 比较的是 二进制的值**
  + **索引 - 使用 `buf[index]` 形式进行索引，`for...of/indexOf/includes` 等Array 方法 也可以使用**

### `Stream`

+ **`Stream` 模块提供的是 抽象接口**， 有很多 模块实现了 这个接口
+ `Stream` 就是解决 生产者 和 消费者问题的一种方式， **解决异步`I/O`问题**

**`Stream & Buffer` 都是 分割成小块，然后 组合成一个个的小 `chunk`， 进行传递**

### `event` / `EventEmitter`

**`EventEmitters` -> `Event(会有很多事件 之后进入循环) ` <-> `EventLoop` -> `Event Handlers`**

### `Error`

+ **错误种类**

  + **标准的 js 错误  `SyntaxError / ReferenceError`**
  + **底层操作触发的 系统错误 比如 文件读写**
  + **用户自定义错误**
  + **异常逻辑触发的 `AssertionError` 通常来自 `assert` 模块**

+ **错误冒泡和捕获 (优先处理错误)**

  + **所有通过 `Node.js` 或者 `JavaScript` 运行时 抛出的异常都是 `Error实例`, 可以进行 `try-catch`**

  + **大多数 异步方法 都接受一个 `callback函数`，该函数 会接受一个 `Error对象`传入作为 第一个参数。**

**`NodeJs` 内置的错误信息，通常都是 见文知意 的。例如 `ERR_ARG_NOT_ITERBLE`**

### `URL`

**弃用 `urlObjects`, 改用 `WHATWG`(组织规范) `URL`**

**使用 `URLSearchParams` 操作参数**

```js
{
  'https://course.study.163.com/path/to/the/page?params1=v1&params2=v2'

  // url.parse node提供的工具库
  url.parse(req.url).pathname 就是 'path/to/the/page'
  url.parse(req.url).query 就是 'params1=v1&params2=v2'
  // Querystring 就是对 query 格式化的一个工具
  Querystring.parse(url.parse(req.url).query)['params2'] 就是 'v2'

  // URLSearchParams 操作参数 来解析 query 对象
  Object.fromEntries(new URLSearchParams('foo=bar&bar=qux'))
  // { foo: "bar", bar: qux }
}
```

### `global`

**看上去像是 全局变量的存在，实际上 仅存在于 模块的作用域中 🍓🍓🍓**

**常见的全局作用域**

> **`__dirname、__filename、exports、module、require`**

**从 `Js` 继承而来的全局变量**

> **`console、timer全家桶(setTimeout 啥的)、global容器`**

**`Node` 特有的全局变量**

> **`Buffer、process、URL、WebAssembly`**

### `NodeJs`提供的几个工具库

**`url` `Querystring` 上面提到的**

+ `Nodejs`工具库 - `util`
  + 风格转换
    + `promisify <-> callbackify`
    + `TextEncoder <-> textDecoder`
  + 调试工具
    + `debuglog`
    + `inspect`
    + `format`
    + `getSystemErrorName`
  + 类型判断
    + `types.isDate(value)`

+ `Nodejs`工具库 - `assert`

  **内置断言库，需要配合测试框架使用，主动抛出 `AssertionError` 错误**

  + 断言真假
    + `asserts(value, msg), match(string, reg)`
  + 断言等价
    + `strictEqual / deepStrictEqual 以及相反操作`
    + `equal/deepEqual 弃用`
  + 断言 成功失败   断言 `fail` ` throws` 啊啥的
    + `fail/throws/doesNotThrow/ifError/rejects`

+ `Nodejs`工具库 - `querystring`

  **官方提供的 解析和格式化 URL 查询字符串 的实用工具**

  + 查询字符串 转 键值对
    + `querystring.parse(str[,sep[,eq[,options]]])`
  + 键值对 转 查询字符串
    + `querystring.stringify(obj)`

### `NodeJs` 的文件操作能力`（Cli 的操作）`

#### `os`

**`os`模块 提供了与操作系统相关的实用方法与属性**

**通过兼容的方式调用 不同平台的底层命令，形成系统快照**

`cpus platform type uptime userinfo`

+ **定义操作系统级别的枚举常量**
  + `信号常量 SIG*`
  + `错误常量 E*`
  + `windows特有 WSA*`
  + `优先级 PRIORITY*`

#### `fs`

**`fs` 模块模拟 `Linux` 环境，提供了用于 与 文件系统进行交互的 `API`**

+ **所有文件系统操作都具有 同步和异步 的形式 🍓**

  > 读取文件 是一个比较耗时的操作，所以 一般使用 异步模式 读取。

+ **`URI` 作为特殊的文件 也可以被 `fs模块` 使用**

+ **读取操作 文件的时候 我们也可以操作 `网络资源URI`**

+ **操作文件夹**
  + **`mkdir/rmdir` 等等**

+ **操作文件**
  + **`chmod/open/read/write`**

```js
// TODO: 
https://course.study.163.com/480000005670249/lecture-480000036957963
```

