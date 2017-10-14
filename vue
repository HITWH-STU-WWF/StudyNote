<script src="https://unpkg.com/vue/dist/vue.js"></script>
引用外部的vue.js
注意只要用到vue.js，都必须创建一个与id对应的Vue对象,首字母大写

当成变量使用，不用加引号

数据绑定最常见的形式就是使用 {{...}}（双大括号）的文本插值，如下：
<div id="app">
  <p>{{ message }}</p>
</div>

或者
<div id="app">
    <div v-html="message"></div>
</div>
也可以使用 v-html 指令用于输出
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>

Vue.js 都提供了完全的 JavaScript 表达式支持，如下：
<div id="app">
	{{5+5}}<br>
	{{ ok ? 'YES' : 'NO' }}<br>
	{{ message.split('').reverse().join('') }}
	<div>菜鸟教程</div>
</div>
	
<script>
new Vue({
  el: '#app',
  data: {
	ok: true,
    message: 'RUNOOB',
	id : 1
  }
})


指令是带有 v- 前缀的特殊属性。
指令用于在表达式的值改变时，将某些行为应用到 DOM 上

v-if指令
 <template v-if="ok">		//这里的v-if 有点类似与if
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈啥，打字辛苦啊！！！</p>
    </template>

v-bind指令  v-bind 指令被用来响应地更新 HTML 属性：
参数在指令后以冒号指明
<a v-bind:href="url">菜鸟教程</a>


v-model  用于同步输入和输出
在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定
 <p>{{ message }}</p>
 <input v-model="message">


v-on 指令，它用于监听 DOM 事件：
<a v-on:click="doSomething">
在这里参数是监听的事件名,如下：
<div id="app">
    <p>{{ message }}</p>
    <button v-on:click="test">反转字符串</button>	//带引号
</div>
	
<script>
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },					//这里记得加一个逗号，不然会语法错误
	test:function(){
		this.message="test"
	}
  }
})


Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化
由"管道符"指示, 格式如下：
<!-- 在两个大括号中 -->
{{ message | capitalize }}
<!-- 在 v-bind 指令中 -->
<div v-bind:id="rawId | formatId"></div>
过滤器可以串联：
{{ message | filterA | filterB }}
过滤器是 JavaScript 函数，因此可以接受参数：
{{ message | filterA('arg1', arg2) }}


下面为一个实例
<div id="app">
  {{ message | capitalize("test","ok") }}
</div>
	
<script>
new Vue({
  el: '#app',
  data: {
	message: 'runoob'
  },
  filters: {
    capitalize: function (value,agr1,arg2) {
      if (!value) return ''
      value = value.toString()
      return value+agr1+arg2
    }
  }
})


Vue.js 为两个最为常用的指令提供了特别的缩写：
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>


<!-- 完整语法 -->
<a v-on:click="doSomething"></a>	//带引号
<!-- 缩写 -->
<a @click="doSomething"></a>




构造器
每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例来启动的：

var vm = new Vue({
  // 选项
})

每个 Vue 实例都会代理其 data 对象里所有的属性：

var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3


除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分。例如：
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // -> true


条件判断
v-if v-else  v-else-if   
v-else 、v-else-if 必须跟在 v-if 或者 v-else-if之后
随机生成一个数字，判断是否大于0.5，然后输出对应信息：
<div id="app">
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>
</div>
<script>
new Vue({
  el: '#app'
})
</script>

v-else-if 在 2.1.0 新增，顾名思义，用作 v-if 的 else-if 块。可以链式的多次使用：
<div v-else-if="type === 'C'">


我们也可以使用 v-show 指令来根据条件展示元素：
<h1 v-show="ok">Hello!</h1>
注意: v-show 不支持 <template> 语法。


循环
v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。
v-for 可以绑定数据到数组来渲染一个列表：

<div id="app">
  <ol>			//<ol>标签可以让结果显示1,2,3的格式，如 1.内容 换行 2.内容 换行 
    <li v-for="site in sites">	//带引号
      {{ site.name }}
    </li>
  </ol>
</div>

<script>
var t=new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>


模板中使用 v-for：
<div id="app">
  <ul>
    <template v-for="site in sites">
      <li>{{ site.name }}</li>
      <li>--------------</li>
    </template>
  </ul>
</div>


列表形式
 <li v-for="site in sites">
      {{ site}}

 data: {
    sites: [
     'Runoob' ,
      'Google' ,
      'Taobao' 
    ]
  }


v-for 可以通过一个对象的属性来迭代数据
 <li v-for="value in object">
    {{ value }}

 data: {
   object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
结果如：菜鸟教程

<li v-for="(value, key) in object">	//注意前后 key和value的顺序,可以理解为for循环里面是倒过来的
    {{ key }} : {{ value }}
结果如：name : 菜鸟教程 

<li v-for="(value, key, index) in object">
     {{ index }}. {{ key }} : {{ value }}
    </li>
结果如：0. name : 菜鸟教程 


v-for 也可以循环整数
<div id="app">
  <ul>				//ul 会让结果前面有一个小黑点
    <li v-for="n in 10">
     {{ n }}				
    </li>
  </ul>
</div>



计算属性关键词: computed

我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。

<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>	//不带括号
  <p>使用方法后反转字符串: {{ reversedMessage2() }}</p>	//带括号
</div>

<script>
var vm = new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessage2: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性

computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter 
<script>
var vm = new Vue({
  el: '#app',
  data: {
	name: 'Google',
	url: 'http://www.google.com'
  },
  computed: {
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {	//传入参数
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
})
// 调用 setter， vm.name 和 vm.url 也会被对应更新
vm.site = '菜鸟教程 http://www.runoob.com';	//调用时好像是两个都调用，如果要使用，再具体研究看看
document.write('name: ' + vm.name);
document.write('<br>');
document.write('url: ' + vm.url);
</script>


我们可以为 v-bind:class 设置一个对象，从而动态的切换 class:
<div v-bind:class="{ active: isActive }"></div>
我们也可以在对象中传入更多属性用来动态切换多个 class
<div class="static"		//这个可有可无
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
等价于<div class="static active text-danger"></div>

<style>
.active {
	width: 100px;
	height: 100px;
	background: green;
}
.text-danger {
	background: red;
}
</style>
</head>
<body>
<div id="app">
  <div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
  </div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    isActive: true,
	hasError: true
  }
})


我们也可以直接绑定数据里的一个对象：
<div id="app">
  <div v-bind:class="classObject"></div>	//直接绑定一个对象
</div>

<script>
new Vue({
  el: '#app',
  data: {
    classObject: {
      active: true,
      'text-danger': true
    }
  }
})
</script>

我们也可以在这里绑定返回对象的计算属性:
new Vue({
  el: '#app',
  data: {
  isActive: true,
  error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    }
  }
})


我们可以把一个数组传给 v-bind:class ，实例如下：
<div id="app">
	<div v-bind:class="[activeClass, errorClass]"></div>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})



Vue.js style(内联样式)
我们可以在 v-bind:style 直接设置样式：
<div id="app">
	<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    activeColor: 'green',
	fontSize: 30
  }
})
</script>
等价于 <div style="color: green; font-size: 30px;">菜鸟教程</div>


v-bind:style 可以使用数组将多个样式对象应用到一个元素上：
<div id="app">
  <div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    baseStyles: {
      color: 'green',
      fontSize: '30px'
    },
	overridingStyles: {
      'font-weight': 'bold'
    }
  }
})
</script>



<div id="app">
  <button v-on:click="counter += 1">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    counter: 0
  }
})
</script>



通常情况下，我们需要使用一个方法来调用 JavaScript 方法。
v-on 可以接收一个定义的方法来调用

<div id="app">
   <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>

<script>
var app = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {		//event可有可无
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
	  if (true) {			//点击确定之后，再次弹窗
		  alert(event.target.tagName)
	  }
    }
  }
})
// 也可以用 JavaScript 直接调用方法
app.greet() // -> 'Hello Vue.js!'	//这个是当打开页面时，就调用该函数
</script>



Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。
Vue.js通过由点(.)表示的指令后缀来调用修饰符。

    .stop
    .prevent
    .capture
    .self
    .once

<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>
<!-- click 事件至少触发一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>



Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">

记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
<!-- 同上 -->
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">	//事件函数名带引号

全部的按键别名：
    .enter
    .tab
    .delete (捕获 "删除" 和 "退格" 键)
    .esc
    .space
    .up
    .down
    .left
    .right
    .ctrl
    .alt
    .shift
    .meta


v-model 会根据控件类型自动选取正确的方法来更新元素。
输入框
实例中演示了 input 和 textarea 元素中使用 v-model 实现双向数据绑定：
<div id="app">
  <p>input 元素：</p>
  <input v-model="message" placeholder="编辑我……">	//placeholder是当无输入时的提示内容
  <p>消息是: {{ message }}</p>
	
  <p>textarea 元素：</p>
  <p style="white-space: pre">{{ message2 }}</p>
  <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    message: '',
	message2: ''
  }
})
</script>
上面这个是边修改可以边改变
 .lazy
在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步，及全部修改好后才改变 <input v-model.lazy="msg" >


复选框如果是一个为逻辑值，如果是多个则绑定到同一个数组：
复选框
以下实例中演示了复选框的双向数据绑定：
<div id="app">
  <p>单个复选框：</p>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
	
  <p>多个复选框：</p>
  <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
  <label for="runoob">Runoob</label>
  <input type="checkbox" id="google" value="Google" v-model="checkedNames">
  <label for="google">Google</label>
  <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
  <label for="taobao">taobao</label>
  <br>
  <span>选择的值为: {{ checkedNames }}</span>
</div>

<script>
new Vue({
  el: '#app',
  data: {
	checked : false,
    checkedNames: []
  }
})
</script>


单选按钮
以下实例中演示了单选按钮的双向数据绑定：

<div id="app">
  <input type="radio" id="runoob" value="Runoob" v-model="picked">
  <label for="runoob">Runoob</label>
  <br>
  <input type="radio" id="google" value="Google" v-model="picked">
  <label for="google">Google</label>
  <br>
  <span>选中值为: {{ picked }}</span>
</div>					//位于同一个div内的认为是同一组内的单选按钮
<script>
new Vue({
  el: '#app',
  data: {
    picked : 'Runoob'
  }
})
</script>



select 列表
以下实例中演示了下拉列表的双向数据绑定：
select
<div id="app">
  <select v-model="selected" name="fruit">	//带引号的，记得
    <option value="">选择一个网站</option>	//第一个默认为显示内容
    <option value="www.runoob.com">Runoob</option>
    <option value="www.google.com">Google</option>
  </select>
 
  <div id="output">
      选择的网站是: {{selected}}
  </div>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    selected: '' 
  }
})
</script>


 .number
如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：
<input v-model.number="age" type="number">
这通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。


 .trim
如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：
<input v-model.trim="msg">




script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
Vue.js + vue-router 可以很简单的实现单页应用。
以下实例中我们将 vue-router 加进来，然后配置组件和路由映射，再告诉 vue-router 在哪里渲染它们

代码检测报错问题
通过查看package.json文件我们可以发现，在文件中默认安装了eslint-loader模块，eslint-loader模块是目前相对比较流行的代码检测工具，可以检测书写的代码是否符合统一规范，可以在一些比较大型的项目开发中统一开发人员的代码风格，这也就是为什么代码缩进有可能导致页面报错的原因（代码缩进不符合规范）。
解决办法
方法一：了解eslint-loader规则，严格按照规范书写代码（这是废话）
方法二：关闭eslint
如果实在普通的webpack项目中我们只需要打开webpack.config.js文件，然后去除ESlint在文件中的配置代码就可以了；
如果是在vue项目中，我们需要打开项目根目录下的build文件夹并且打开该文件夹下的webpack.base.conf.js文件，然后去除ESlint在文件中的配置代码就可以了。

./ 当前目录
../ 父级目录
/ 根目录
根目录：在计算机的文件系统中，根目录指逻辑驱动器的最上一级目录，它是相对子目录来说的；
　　　　它如同一棵大树的“根”一般，所有的树杈以它为起点，故被命名为根目录。以微软公司开发的Windows操作系统为例：
　　　　打开我的计算机（计算机），双击C盘就进入C盘的根目录。双击D盘就进入D盘的根目录


vue项目发布：http://www.cnblogs.com/hi-shepherd/p/6911098.html
在build之前，记得需要修改config/index.js里的assetsPublicPath的字段，初始项目是/他是指向项目根目录的也是为什么会出现错误，这时改为./


用/*eslint-disable */禁用格式检查，要不空格缩进都不能乱写，多个空格都要给你报错

vue init webpack my-project
cd my-project
$ cnpm install
$ cnpm run dev

