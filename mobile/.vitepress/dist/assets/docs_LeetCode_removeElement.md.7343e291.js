import{_ as n,c as s,o as a,a as p}from"./app.57c139fc.js";const t='{"title":"每日算法 - 移除元素/移动零","description":"","frontmatter":{},"headers":[{"level":2,"title":"移除元素","slug":"移除元素"},{"level":3,"title":"示例 1：","slug":"示例-1："},{"level":3,"title":"示例 2：","slug":"示例-2："},{"level":3,"title":"[Js]题解：","slug":"js-题解："},{"level":2,"title":"移动零","slug":"移动零"},{"level":3,"title":"示例 1：","slug":"示例-1：-1"},{"level":3,"title":"[Js]题解：","slug":"js-题解：-1"}],"relativePath":"docs/LeetCode/removeElement.md","lastUpdated":1633604431391}',o={},e=[p('<h1 id="每日算法-移除元素-移动零" tabindex="-1">每日算法 - 移除元素/移动零 <a class="header-anchor" href="#每日算法-移除元素-移动零" aria-hidden="true">#</a></h1><blockquote><p><strong><code>移除元素 &amp; 移动零</code> 两道题，附题解、和官网地址。</strong></p></blockquote><blockquote><p>如果每天做一道算法题，那是不是每天都在进步？</p><p>目的：培养算法思维，了解常见的算法。</p></blockquote><h2 id="移除元素" tabindex="-1">移除元素 <a class="header-anchor" href="#移除元素" aria-hidden="true">#</a></h2><p><strong><a href="https://leetcode-cn.com/problems/remove-element/" target="_blank" rel="noopener noreferrer">27. 移除元素 / <code>leetcode</code>链接🔗</a></strong></p><blockquote><p>给你一个数组 <code>nums</code> 和一个值 <code>val</code>，你需要 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank" rel="noopener noreferrer">原地</a></strong> 移除所有数值等于 <code>val</code> 的元素，并返回移除后数组的新长度。</p><p>不要使用额外的数组空间，你必须仅使用 <code>O(1)</code> 额外空间并 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank" rel="noopener noreferrer">原地 </a>修改输入数组</strong>。</p><p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><p><strong>说明:</strong></p><p>为什么返回数值是整数，但输出的答案是数组呢?</p><p>请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p><p>你可以想象内部操作如下:</p><div class="language-js"><pre><code><span class="token comment">// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝</span>\nint len <span class="token operator">=</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 在函数里修改输入数组对于调用者是可见的。</span>\n<span class="token comment">// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></blockquote><h3 id="示例-1：" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1：" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>输入：<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">nums = [3,2,2,3], val = 3</span><span class="token template-punctuation string">`</span></span>\n输出：<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">2, nums = [2,2]</span><span class="token template-punctuation string">`</span></span>\n解释：函数应该返回新的长度 <span class="token number">2</span><span class="token punctuation">,</span> 并且 nums 中的前两个元素均为 <span class="token number">2</span>。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 <span class="token number">2</span> ，而 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> 或 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>，也会被视作正确答案。\n</code></pre></div><h3 id="示例-2：" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2：" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>输入：<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">nums = [0,1,2,2,3,0,4,2], val = 2</span><span class="token template-punctuation string">`</span></span>\n输出：<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">5, nums = [0,1,4,0,3]</span><span class="token template-punctuation string">`</span></span>\n解释：函数应该返回新的长度 <span class="token number">5</span><span class="token punctuation">,</span> 并且 nums 中的前五个元素为 <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span>。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。\n</code></pre></div><p><strong>提示：</strong></p><ul><li><strong><code>0 &lt;= nums.length &lt;= 100</code></strong></li><li><strong><code>0 &lt;= nums[i] &lt;= 50</code></strong></li><li><strong><code>0 &lt;= val &lt;= 100</code></strong></li></ul><h3 id="js-题解：" tabindex="-1"><code>[Js]</code>题解： <a class="header-anchor" href="#js-题解：" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>双指针 <span class="token operator">-</span> 赋值\n<span class="token comment">/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      k<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> k<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code>双指针 <span class="token operator">-</span> 交换\n<span class="token comment">/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 置换</span>\n    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> k<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      k<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> k<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code>计数\n<span class="token comment">/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      count<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      nums<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> count<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code>改变顺序\n<span class="token comment">/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 指向 数组的 没有的最后一位 </span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// i &lt; len 就会跳出</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      len<span class="token operator">--</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      i<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> len<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="移动零" tabindex="-1">移动零 <a class="header-anchor" href="#移动零" aria-hidden="true">#</a></h2><p><strong><a href="https://leetcode-cn.com/problems/move-zeroes/" target="_blank" rel="noopener noreferrer">283. 移动零 / <code>leetcode</code>链接🔗</a></strong></p><blockquote><p>给定一个数组 <code>nums</code>，编写一个函数将所有 <code>0</code> 移动到数组的末尾，同时保持非零元素的相对顺序。</p></blockquote><h3 id="示例-1：-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1：-1" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>输入<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[0,1,0,3,12]</span><span class="token template-punctuation string">`</span></span>\n输出<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[1,3,12,0,0]</span><span class="token template-punctuation string">`</span></span>\n</code></pre></div><p><strong>说明:</strong></p><ul><li><strong>必须在原数组上操作，不能拷贝额外的数组。</strong></li><li><strong>尽量减少操作次数。</strong></li></ul><h3 id="js-题解：-1" tabindex="-1"><code>[Js]</code>题解： <a class="header-anchor" href="#js-题解：-1" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>双指针 <span class="token operator">-</span> 赋值\n<span class="token comment">/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      k<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> k<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code>双指针 <span class="token operator">-</span> 交换\n<span class="token comment">/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\t\t\n  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> k<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      k<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-js"><pre><code>计数 <span class="token operator">-</span> count\n<span class="token comment">/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      count <span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      nums<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> count<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> nums<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',28)];var c=n(o,[["render",function(n,p,t,o,c,u){return a(),s("div",null,e)}]]);export{t as __pageData,c as default};