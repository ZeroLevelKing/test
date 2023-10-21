(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{371:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"变量与类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量与类型"}},[t._v("#")]),t._v(" 变量与类型")]),t._v(" "),a("h2",{attrs:{id:"变量的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量的定义"}},[t._v("#")]),t._v(" 变量的定义")]),t._v(" "),a("p",[t._v("解决问题时必然涉及到数据处理，而数据处理又必然离不开数据存储。在计算机中，使用一种名叫变量的东西来存储数据。")]),t._v(" "),a("p",[t._v("我们可以使用以下的语句来定义，或者说创建一个变量。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这里，我们创建了一个变量，其名字为 "),a("code",[t._v("a")]),t._v(" ，定义并创建好变量以后，你就可以在之后通过变量的名字来调用这个变量了。"),a("code",[t._v("int")]),t._v(" 表明我们创建的变量的类型为 "),a("code",[t._v("int")]),t._v(" 型，如果你不知道类型是什么也完全不用担心，我们马上就会介绍。最后，千万别忘了语句最后的分号 "),a("code",[t._v(";")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("一般地，变量的定义语句如下")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("T name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中 "),a("code",[t._v("T")]),t._v(" 为变量的类型，"),a("code",[t._v("name")]),t._v(" 为变量的名字。")]),t._v(" "),a("p",[t._v("在定义变量的同时，我们通常会赋予其一个初始值，这叫做"),a("strong",[t._v("初始化")]),t._v("。下面的例子演示了如何在定义变量的同时进行初始化。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("C/C++ 中遵循先定义，后使用的规则。在使用变量前，你必须先进行声明，否则编译器将会报错。下面就是一个错误实例。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在这里，编译器抛出了一个错误：")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this declaration has no storage class or type specifier")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("p",[t._v("生活中几乎处处都存在着分类。走进图书馆里查阅图书时，你肯定看到过书架上有序而严谨的分类标签，通过这些标签你很快就能找到你想要的书本；走在路上，你可能时不时会遇到可爱的小猫，尽管它们外貌形态各异，但它们都享有相同的生物学上的分类——猫科猫属（一些题外话：虽然小猫很可爱，但我个人还是更喜欢小狗~摊牌了！！我就是犬控🥵🥵🥵！）。分类在生活学习和科学研究中起着非常重要的作用。")]),t._v(" "),a("p",[t._v("在 C/C++ 中，我们依据变量所储存的数据的类型来对其进行分类。变量的类型有很多种，幸运的是，你只需要掌握以下 5 种类型就能处理现阶段会出现的所有问题了。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("整型，表示整数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("2")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("double")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("浮点型，表示实数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("2.5")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("char")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符型，表示单个字符")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("'x'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符串型，表示一个字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('"a short string"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("布尔类型，表示布尔代数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("true")])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("C 语言中没有 "),a("code",[t._v("string")]),t._v(" 类型和 "),a("code",[t._v("bool")]),t._v(" 类型，因此，你得用一些不同的方法来解决问题。后面会介绍在面对相关问题时，只使用 C 语言的处理方法。")])]),t._v(" "),a("p",[t._v("上面的表格的实例中，给出了不同类型的具体的值，我们称之为"),a("strong",[t._v("字面量")]),t._v("。在不需要数据存储的场景中，我们可以偷个懒，省略掉变量的定义和初始化，直接使用字面量进行算术计算或其他操作。显然，不同类型的字面量有其不同的风格。")])])}),[],!1,null,null,null);a.default=n.exports}}]);