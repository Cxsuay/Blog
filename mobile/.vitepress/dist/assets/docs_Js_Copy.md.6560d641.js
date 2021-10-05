import{_ as n,c as s,o as a,a as p}from"./app.9a3fef87.js";const t='{"title":"Js - 深浅拷贝","description":"","frontmatter":{},"headers":[{"level":2,"title":"深浅拷贝 - 概念","slug":"深浅拷贝-概念"},{"level":2,"title":"深浅拷贝 - 理解","slug":"深浅拷贝-理解"},{"level":3,"title":"延伸","slug":"延伸"},{"level":2,"title":"深浅拷贝 - 实现","slug":"深浅拷贝-实现"},{"level":3,"title":"浅拷贝的实现方法","slug":"浅拷贝的实现方法"},{"level":3,"title":"深拷贝的实现方法","slug":"深拷贝的实现方法"},{"level":3,"title":"延伸","slug":"延伸-1"}],"relativePath":"docs/Js/Copy.md","lastUpdated":1632732114000}',o={},c=[p('<h1 id="js-深浅拷贝" tabindex="-1">Js - 深浅拷贝 <a class="header-anchor" href="#js-深浅拷贝" aria-hidden="true">#</a></h1><h2 id="深浅拷贝-概念" tabindex="-1">深浅拷贝 - 概念 <a class="header-anchor" href="#深浅拷贝-概念" aria-hidden="true">#</a></h2><ul><li>浅拷贝只是拷贝对象的引用地址，不拷贝对象本身。 <ul><li>新旧对象还是 共用 一块内存。</li></ul></li><li>深拷贝会创建一个一摸一样的对象，各自引用各自存储。</li><li>深浅拷贝的概念只存在与 引用数据类型（复杂数据类型）中</li><li>基本数据类型（简单数据类型） <code>Number</code> - <code>Boolean</code> - <code>String</code> - <code>Undefined</code> - <code>Null</code> - <code>Symbol (ES6新增)</code> 引用数据类型 （复杂数据类型） <code>Object</code> - <code>Array</code> - <code>Function</code> - <code>RegExp</code> - <code>Date</code>等</li></ul><hr><h2 id="深浅拷贝-理解" tabindex="-1">深浅拷贝 - 理解 <a class="header-anchor" href="#深浅拷贝-理解" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// e.g - 1</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>\na <span class="token operator">=</span> b<span class="token punctuation">;</span>\nb <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>\n<span class="token comment">// 这个是什么拷贝呢？</span>\n</code></pre></div><ul><li>上面的例子，其实不存在拷贝。 只是基本数据类型的一个简单的赋值操作。</li></ul><div class="language-js"><pre><code><span class="token comment">// e.g - 2</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj2 <span class="token operator">=</span> obj<span class="token punctuation">;</span>\nobj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>\n<span class="token comment">// 这个是什么拷贝呢？</span>\n</code></pre></div><ul><li>答： 浅拷贝 因为上面拷贝对象的值修改并把原对象的值也修改了。</li><li>对此我的理解是： <ul><li>基本数据类型的存放时独立存放在 <code>栈（stack）</code>中的数据。 在 <code>e.g - 1</code> 中，<code>b</code>赋值给 <code>a</code>，<code>a</code>又重新开辟了一份内存空间。他们两个互不干扰，所以 <code>b</code> 重新赋值， <code>a</code> 的值不会改变。 (<strong>基本数据类型都是独立存储的</strong>)。</li><li>引用数据类型的数据存放一般都是在 <code>堆内存</code> 里面。</li></ul><div class="language-js"><pre><code>  <span class="token comment">// e.g - 2.1</span>\n  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 是在堆内存里面开辟了一块空间，这块空间命名为 data</span>\n    a<span class="token operator">:</span> <span class="token number">20</span>\n  <span class="token punctuation">}</span>\n</code></pre></div>在 <code>e.g - 2</code> 中， 声明了 <code>obj</code> ，<strong>将存放地址放入了 栈内存 中，将数据放入了 堆内存 中</strong>。声明 <code>obj2</code> 将 <code>obj</code> 的引用地址复制了一份给 <code>obj2</code> ，这时他们就指向了同一块 数据存放的地址。 所以 <code>obj2.a = 10</code> 之后，原来 <code>obj</code> 的值也就跟着改变了。</li></ul><h3 id="延伸" tabindex="-1">延伸 <a class="header-anchor" href="#延伸" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// e.g - 2.2</span>\n<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n  n<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  m<span class="token operator">:</span> data<span class="token punctuation">.</span>n <span class="token operator">*</span> <span class="token number">5</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 这个时候打印什么呢？</span>\n</code></pre></div><ul><li>答： <strong>引用错误 - ReferenceError。</strong></li><li>因为 <strong>无法在数据初始化之前访问数据</strong>。上面的 <code>data.n * 5</code> 是内存信息还没有存储完成，<code>data.n</code> 是个 undefined。</li><li>解决办法： <code>data.m = data.n * 5;</code> 声明之后，去定义是可以的。</li></ul><hr><h2 id="深浅拷贝-实现" tabindex="-1">深浅拷贝 - 实现 <a class="header-anchor" href="#深浅拷贝-实现" aria-hidden="true">#</a></h2><ul><li><code>Object.assign()</code> 可以实现 深浅拷贝两种。取决于怎么使用。</li><li>首先介绍一下 <code>Object.assign()</code> 这个方法 <code>Object.assign()</code> 可以将所有的可枚举（enum）属性的值或者多个源对象复制到目标对象上。返回的是目标对象。</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> result <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 3, b: 2, c: 5}; --- 目标对象也会改变，源对象会覆盖目标对象里相同的键</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 3, b: 2, c: 5}; --- 返回的目标 拷贝后的目标对象</span>\n</code></pre></div><h3 id="浅拷贝的实现方法" tabindex="-1">浅拷贝的实现方法 <a class="header-anchor" href="#浅拷贝的实现方法" aria-hidden="true">#</a></h3><ul><li><code>Object.assign()</code> 使用 <code>Object.assign()</code> 进行拷贝。如果拷贝的是对象属性的引用，不是对象本身。 这样可以实现 浅拷贝。</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空对象拷贝另外一个对象的属性</span>\nobj2<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ’123‘ 因为拷贝的是对象属性，所以只拷贝了引用。</span>\n</code></pre></div><ul><li>拷贝 对象的指针(存放地址) 可以做到浅拷贝的效果 - 个人理解是拷贝。</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> obj2 <span class="token operator">=</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> \nobj1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 3, b: 2}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 3, b: 2}</span>\n</code></pre></div><h3 id="深拷贝的实现方法" tabindex="-1">深拷贝的实现方法 <a class="header-anchor" href="#深拷贝的实现方法" aria-hidden="true">#</a></h3><ul><li><code>Object.assign()</code> - 只能实现一维对象的深拷贝。</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>\na<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 3, b: 2, c: 3}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 1, b: 2, c: 3}</span>\n</code></pre></div><ul><li><p><code>JSON.parse(JSON. stringify())</code></p><p>可以实现多维对象的深拷贝。但会忽略 <code>undefined</code> <code>Symbol值</code> <code>任意函数</code></p></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  b<span class="token operator">:</span> <span class="token punctuation">{</span> m<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  c<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">d</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>  \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  e<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  f<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: {m: 1}, c: undefined, d: ƒ, e: Symbol(foo), f: null }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: {m: 1}, f: null }</span>\nobj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>m <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 修改 obj2.b.m 的值</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: {m: 1}, c: undefined, d: ƒ, e: Symbol(foo), f: null }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: {m: 2}, f: null }</span>\n</code></pre></div><ul><li><code>递归拷贝</code> 就直接上代码啦。</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> objClone <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// hasOwnProperty 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。</span>\n        <span class="token comment">// 和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。</span>\n        <span class="token comment">// 即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true。</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n           objClone<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n           objClone<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> objClone<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\nb <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// (4) [666, 1, 2, 3] (4) [0, 1, 2, 3]</span>\n</code></pre></div><p>只是一个简单的实现。例如 <code>原型链</code> <code>基本数据类型</code> 等等都还没考虑。</p><ul><li><code>Object.create()</code> 可以使用 <code>let newObj = Object.create(oldObj)</code> 可以达到深拷贝的效果</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> a <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以拷贝数组对象的自带方法。</span>\n<span class="token comment">// ... 可以 遍历 基于原型链方法 的一些扩展。</span>\n</code></pre></div><ul><li><code>Array 的一些方法</code><code>slice</code> <code>concat</code> <code>Array.from()</code> <code>...操作符</code> ~ 可以实现对 一维数组 的深拷贝</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\narr2 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, [3, 4]]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, [3, 4]]</span>\narr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>\narr2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, [3, 5]]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2, 2, [3, 5]]</span>\n</code></pre></div><h3 id="延伸-1" tabindex="-1">延伸 <a class="header-anchor" href="#延伸-1" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>n<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\nb <span class="token operator">=</span> a<span class="token punctuation">;</span>\na<span class="token punctuation">.</span>x <span class="token operator">=</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>n<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a { n: 2 }</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b { n: 1, x: { n: 2 } }</span>\n<span class="token comment">// 对象是引用类型 所有的对象赋值其实是给了他这个对象的引用地址</span>\n<span class="token comment">// a.x 这里涉及到一个运算符优先级的问题 . 的优先级是比较高的, 会先执行。</span>\n</code></pre></div>',35)];var e=n(o,[["render",function(n,p,t,o,e,l){return a(),s("div",null,c)}]]);export{t as __pageData,e as default};