JQ对象，JS对象，DOM对象的区别

jq和js的方法和属性写法不一样

jq对象和dom对象可以相互转换

    1.jq的写法 $('#save').attr('disabled','true');
    2.转成DOM写法 
        1).$('#save')[0].disabled=true;
        2).$('#save')[0]也可以写成$('#save').get(0)
        通过[index]下标和get(index)来得到相应的dom对象
        3).$('#save').eq(0)得到的是jq对象，$(dom对象)就能得到一个jq对象
    3.js转jq对象 $(js对象)
1.dom对象
  1).通过dom可以访问所有的html元素，连同它们所包含的文本和属性。可以对其中的内容进行修改和删除，同时也可以创建新的元素。
  2).dom对象即我们用传统的js方法获得的对象。
2.js对象
  1).js提供多个内建对象，如String、Date、Array等。
  2).对象只是带有属性和方法的特殊数据类型。
  3).通过js获取的dom对象就是js对象
3.jq对象
  1).jq对象是一个看起来像js数组的对象，这个数组对象包含125个方法和四个属性
     jq当前的jq框架版本号
     length指示该数组对象的元素个数
     context一般情况下都是指向HtmlDocument对象
     selector传递进来的选择器内容
  2).jq对象是通过jq包装dom对象后产生的对象。



dom对象 var domObj = document.getElementById('id')
jq对象 var $obj = $('#id')


1.通过js获得到的dom是dom对象，通过jq获得到的dom对象是jq对象
2.js对象是数组，布尔值，函数等
3.jq对象是看起来像js数组的jq对象
4.js转jq对象 $(js对象)，jq转js对象get(0),[index]
   var domObj = document.getElementById('id');//dom对象
   var $obj = $(domObj) //转换成jq对象
   var obj = $obj[0] 或者 var obj = $obj.get(index)//转换成dom对象


jq允许把jq集合当成js数组来处理

not()方法返回的是不包含selector的新集合，filter()方法返回的是包含selector的新集合
slice(start,end)方法，如果没有end值的话会从start位置一直到集合末尾结束

$.map(function(index,item){
  return item
})
map()返回的是转换过的值
each() 返回的是jq集合

end()返回上一个jq集合 addBack()合并的jq集合

attr(name)和prop(name)都是获取匹配集合中第一个元素给定的属性值，
prop获取的是元素自带的属性，可能在页面显示出来，也可能没有在页面显示，attr是从页面获取已明确定义的属性
removeAttr()删除元素属性，删除后可再次修改，且支持空格分割，removeProp()删除元素特性删除后不可再次修改，将值设置为false即可

$.和$().
$就是jquery对象，$()就是jQuery()，在里面可以传参数，作用就是获取元素
如下例子
$(".div1") 表示获取类名为div1的元素，例如获取<div class="div1"></div>
$(".div1").onclick表示类名为div1的div点击事件
jquery中$.，例如$.post()，$.get()，$.ajax()等这些都是jquery这个对象的方法

data()，通过attr()动态改变属性的值之后data()存的是attr()动态改变之后的值，如果data()在atrr()改变值前，储存了一个新值，通过data()获取到的储存值就是data里的，
但此时attr()查询到的仍是元素里的属性值

<input type="text" data-txt="我是value">
$('input').attr('data-txt','我是新value') // 我是新value
$('input').data('txt') //我是新value

$('input').data('txt','我是新value') //我是新value
$('input').attr('data-txt') //我是value
