# JavaScript权威指南
## 一、词法结构
<hr/>
词法结构：编程语言的词法结构是一套基础性规则，用来描述如何使用这门语言来编写程序。它规定了变量名是什么样的、怎么写注释，以及程序语句之间如何分隔等规则

### 1、字符集
* JavaScript程序使用Unicode字符集编写的。
* JavaScript语言是区分大小写的语言。
* JavaScript会忽略程序中标识之间的空格。
* 注释： 使用 // 或 /**/
* 直接量：程序中直接使用的数据值。
    ```
    12 //数字直接量
    1.2 //小数
    "hello world" //字符串直接量
    true //布尔值直接量
    /javascript/gi //正则表达式直接量
    null //空
    {x:1, y:2} //对象直接量
    [1,2,3,4,5] //数组直接量
    ```
* 标识符和保留字
    * 标识符：必须以字母、下划线或美元符开始。
    
## 二、类型、值、变量
<hr/>
* JavaScript的数据类型
    
    ![data type](images/data-type.png)

* JavaScript变量是**无类型的**

### 1、数字
* JavaScript不区分整数值和浮点数值，所有的数都用浮点数值表示。
* 直接量：
    * 整型直接量：十进制、十六进制
    * 浮点型直接量
* Infinity/-Infinity：超过JavaScript所能表示的数字上限（overflow）
    * 基于它们的加、减、乘、除运算还是无穷大值。
* （underflow）：运算结果无限接近于零并比JavaScript能表示的最小值还小的时候发生的一种情形
    * 运算结果返回0
    * 负数underflow的结果是-0
* 被0整除不报错，返回：Infinity/-Infinity
* 0/0=NAN
* NAN：0/0、无穷大/无穷大、给任意负数作开方运算、算数运算符与不是数字的操作数一起使用时
* NAN与任何值都不相等，包括自身
<br/>
![data type](images/number1.png)
    