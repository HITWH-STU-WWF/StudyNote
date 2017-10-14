HTML 中的脚本必须位于 <script> 与 </script> 标签之间
脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中

<script>
function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}
</script>
<p id="demo">一个段落</p>
<button type="button" onclick="myFunction()">尝试一下</button>

<script src="myScript.js"></script>  使用外部的js文件

avaScript 可以通过不同的方式来输出数据：
    1、使用 window.alert() 弹出警告框。
    2、使用 document.write() 方法将内容写到 HTML 文档中。
    3、使用 innerHTML 写入到 HTML 元素。
    4、使用 console.log() 写入到浏览器的控制台

1、
<script>
window.alert(内容);
</script>  

2、
<script>
document.write(内容);
</script>
使用 document.write() 仅仅向文档输出写内容
如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。

3、
<script>
document.getElementById("demo").innerHTML = "段落已修改。";
</script>


avaScript 使用关键字 var 来定义变量， 使用等号来为变量赋值
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"} 可理解为字典类型

不是所有的 JavaScript 语句都是"命令"。双斜杠 // 后的内容将会被浏览器忽略：
JavaScript 对大小写是敏感的

for ... in 	用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）
function 	定义一个函数
var 	声明一个变量

您可以在文本字符串中使用反斜杠对代码行进行换行。下面的例子会正确地显示：
document.write("你好 \
世界!");

创建数组
var cars=new Array();
cars[0]="Saab";
或者
var cars=new Array("Saab","Volvo","BMW");

创建对象
对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔： 
var person={firstname:"John", lastname:"Doe", id:5566};
访问
name=person.lastname;
name=person["lastname"]; 

在 JavaScript中，几乎所有的事物都是对象
对象也是一个变量，但对象可以包含多个值（多个变量）
var car = {type:"Fiat", model:500, color:"white"}; 
在以上实例中，3 个值 ("Fiat", 500, "white") 赋予变量 car。
在以上实例中，3 个变量 (type, model, color) 赋予变量 car。
JavaScript 对象是变量的容器
键值对在 JavaScript 对象通常称为 对象属性

对象的方法定义了一个函数，并作为对象的属性存储。
对象方法通过添加 () 调用 (作为一个函数)  person.fullName()与person.fullName   效果不同
var person = {
    firstName: "John",
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};

如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明
carname="Volvo";
将声明一个全局变量 carname，即使它在函数内执行

<button onclick="displayDate()">点这里</button>
<script>
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<button onclick='getElementById("demo").innerHTML=Date()'>现在的时间是??</button>
<button onclick="this.innerHTML=Date()">现在的时间是?</button>

onchange 	HTML 元素改变
onclick 	用户点击 HTML 元素
onmouseover 	用户在一个HTML元素上移动鼠标
onmouseout 	用户从一个HTML元素上移开鼠标
onkeydown 	用户按下键盘按键
onload 		浏览器已完成页面的加载

var sln = txt.length;		求字符串长度
"We are the so-called \"Vikings\" from the north."	使用 \ 来转义

字符串操作
constructor 	返回创建字符串属性的函数
length 	返回字符串的长度
prototype 	允许您向对象添加属性和方法

字符串方法
charAt() 	返回指定索引位置的字符
charCodeAt() 	返回指定索引位置字符的 Unicode 值
concat() 	连接两个或多个字符串，返回连接后的字符串
fromCharCode() 	将 Unicode 转换为字符串
indexOf() 	返回字符串中检索指定字符第一次出现的位置
lastIndexOf() 	返回字符串中检索指定字符最后一次出现的位置
localeCompare() 	用本地特定的顺序来比较两个字符串
match() 	找到一个或多个正则表达式的匹配
replace() 	替换与正则表达式匹配的子串
search() 	检索与正则表达式相匹配的值
slice() 	提取字符串的片断，并在新的字符串中返回被提取的部分
split() 	把字符串分割为子字符串数组
substr() 	从起始索引号提取字符串中指定数目的字符
substring() 	提取字符串中两个指定的索引号之间的字符
toLocaleLowerCase() 	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLocaleUpperCase() 	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLowerCase() 	把字符串转换为小写
toString() 	返回字符串对象值
toUpperCase() 	把字符串转换为大写
trim() 	移除字符串首尾空白
valueOf() 	返回某个字符串对象的原始值


逻辑运算符
&& 	and 	(x < 10 && y > 1) 为 true
|| 	or 	(x==5 || y==5) 为 false
! 	not 	!(x==y) 为 true

条件运算符
voteable=(age<18)?"年龄太小":"年龄已达到";


var person={fname:"John",lname:"Doe",age:25}; 
for (x in person)
{
    txt=txt + person[x];
}

通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：
list: 
{
    document.write(cars[0] + "<br>"); 
    break list;
    document.write(cars[3] + "<br>"); 
}

getDate() 	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay() 	从 Date 对象返回一周中的某一天 (0 ~ 6)。
getFullYear() 	从 Date 对象以四位数字返回年份。
getHours() 	返回 Date 对象的小时 (0 ~ 23)。
getMilliseconds() 	返回 Date 对象的毫秒(0 ~ 999)。
getMinutes() 	返回 Date 对象的分钟 (0 ~ 59)。
getMonth() 	从 Date 对象返回月份 (0 ~ 11)。
getSeconds() 	返回 Date 对象的秒数 (0 ~ 59)。
getTime() 	返回 1970 年 1 月 1 日至今的毫秒数。


用于调试
如果浏览器支持调试，你可以使用 console.log() 方法在调试窗口上打印 JavaScript 值：
a = 5;
b = 6;
c = a + b;
console.log(c);


表单
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
<form name="myForm" action="demo-form.php" onsubmit="return validateForm()" method="post">
姓: <input type="text" name="fname">
<input type="submit" value="提交">
</form>


x = document.getElementById("numb").value; 	获取文本框中的值的另一种方法


HTML 表单验证也可以通过浏览器来自动完成。
如果表单字段 (fname) 的值为空, required 属性会阻止表单提交：

<form action="demo_form.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="提交">
</form>

JSON 数据格式为 键/值 对，就像 JavaScript 对象属性。
键/值对包括字段名称（在双引号中），后面一个冒号，然后是值：
如："name":"Runoob"

JSON 对象保存在大括号内。
就像在 JavaScript 中, 对象可以保存多个 键/值 对：
{"name":"Runoob", "url":"www.runoob.com"}


JSON 数组保存在中括号内。
就像在 JavaScript 中, 数组可以包含对象：
"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]


创建 JavaScript 字符串，字符串为 JSON 格式的数据：
var text = '{ "sites" : [' +
	'{ "name":"Runoob" , "url":"www.runoob.com" },' +
	'{ "name":"Google" , "url":"www.google.com" },' +
	'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
	
obj = JSON.parse(text);使用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;



JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串


HTML 文件后缀可以是 .html (或r .htm)。
CSS 文件后缀是 .css 。
JavaScript 文件后缀是 .js 。

查找 HTML 元素
    通过 id 找到 HTML 元素
var x=document.getElementById("intro"); 

    通过标签名找到 HTML 元素
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");

    通过类名找到 HTML 元素
查找 class="intro" 的元素：
var x=document.getElementsByClassName("intro");


JavaScript中的setInterval用法 可以用于更新动画或者更新数据（每隔一段时间更新一次）



