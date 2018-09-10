console.log('HELLO ES6!');

// ----------------let和conset命令----------------
{
  {
    let a=0;
    var b=1;
  }

  var a=[];
  for(var i=0;i<10;i++){
    a[i]=function () {
      console.log(i)
    }
  }
  // a[6]();

  var b=[];
  for(let i=0;i<10;i++){
    b[i]=function () {
      console.log(i)
    }
  }
  // b[6]();

  const PI=3.14;
  // console.log(PI)
}


// ----------------变量的解析赋值----------------
{
  let [a,b,c]=[1,2,3];

  let {foo,bar}={foo:'foo_value',bar:'bar_value'};
  // console.log(foo);

  let x=1;
  let y=2;
  [x,y]=[y,x];
  // console.log(x);

  var map=new Map();
  map.set('first','a');
  map.set('second','b');
  map.set('third','c');
  for(let [key,value] of map){
    // console.log(key+":"+value);
  }

  // 1.交换变量值
  // 2.从函数返回多个值
  // 3.函数参数的定义
  // 4.提取JSON数据
  // 5.函数参数的默认值
  // 6.遍历Map结构
  // 7.输入模块的指定方法

}


// ----------------字符串的扩展----------------
{
  // console.log(String.fromCodePoint(0x20BB7));

  for( let singleLettle of 'qwer'){
    // console.log(singleLettle);
  }

  let s='hello world';
  // console.log(s.startsWith('world',6));
  // console.log(s.endsWith('hello',5));
  // console.log(s.includes('world'));

  // console.log('x'.repeat(100));

}


// ----------------正则的扩展----------------
{
	//未仔细阅读 
}


// ----------------数值的扩展----------------
{
  Number.isFinite(15);
}


// ----------------函数的扩展----------------
{
  function defaultPar(x=1,y=2){
    return x+y;
  }
  // console.log(defaultPar(2));

  // 1.函数参数的默认值
  // 2.函数未知参数个数
  // 可看parameter.js文件

  // 3.箭头函数
  // 可看arrow-function.js文件

  var f= v => v;

  var f= function (v){
    return v;
  }

  var sum=(...numbs)=>{
    let total=0;
    for(let i of numbs){
      total+=i
    }
    return total;
  };

  // console.log(sum(1,2,3));
}


// ----------------数组的扩展----------------
{
	let more=[4,5,6];
	
	// console.log([1,2,3,...more])
	
	// console.log([...'hello'])
	
	// console.log(Array.of(1,2,3))
	
	// console.log(	[1,2,3,4,5,-10].find( (n) => { return n<0 } )	)
	
	// console.log( ['a','b','c'].fill(7) )
	
	for ( let index of more.keys() ){
		// console.log(index)
	}
	
	for ( let elem of more.values() ){
		// console.log(elem)
	}
	
	for ( let [index,elem] of more.entries() ){
		// console.log(index+":"+elem)
	}
	
	for ( let i of more ){
		// console.log(i)
	}
	
	more.forEach( function(index,elem){
		// console.log(index+":"+elem)
	} )
	
	more.forEach( (index,elem) => {
		// console.log(index+":"+elem)
	} )
	
	// console.log( more.includes(4) )
	
	
}


// ----------------对象的扩展----------------
{
	let foo='bar';
	let baz={foo};
	// console.log(baz)
	
	function f(x,y){
		return {x,y}
	}
	// console.log( f(1,2) )
	
	let a=1;
	let b=2;
	var obj={
		a,
		b
	}
	
	var o={
		//方法简写 
		hello(){
			alert('hello')
		},
		//as
		helloAgain:function(){
			alert('hello again')
		}
	}
	// o.hello();
	// o.helloAgain();
	
	for( let i in o ){
		// console.log( i )
	}
	
	// console.log( Object.keys(o) )  
	
	Object.keys(o).forEach(function(key){
			 // console.log(key,o[key]);
	});
	
	Object.keys(o).forEach( (key,values) => {
		// o[key]();
	})
	
	Object.getOwnPropertyNames(obj).forEach( (key) => {
		// console.log( key+":"+obj[key] )
	})
	
	let proto={};
	let obj1={x:10};
	Object.setPrototypeOf(obj1,proto);
	proto.y=1;
	proto.z=2;
	
// 	console.table({
// 		"x":obj1.x,
// 		"y":obj1.y,
// 		"z":obj1.z,
// 	})
//  将proto对象设置为obj1对象的原型

	for( let [key,value] of Object.entries(obj) ){
		// console.log(key+'：'+value)
	}
	
	// console.log(	Object.getOwnPropertyDescriptor(obj,'a') )
	
	
	
}


// ----------------Symbol----------------
{
	// undefined String null Boolean Number Object Symbol
	let s=Symbol();
	// console.log( typeof s )
	
	let a={};
	a[s]='hello';
	
	// console.log(a[s]) 不能使用点运算符
	
}


// ----------------Set和Map数据结构----------------
{
	const s=new Set();
	[1,2,2,,3,3,3,4,4,4,5].forEach( (i) => {
		s.add(i)
	});
	
	// console.log(s);
	
	const set = new Set([1,2,3,4,4]);
	// console.log( [...set] )
	
	const m=new Map();
	const o={'p':'hello map'};
	m.set(o,'this is o value');
	
	// console.log( m.get(o) )
	// console.log( m.has(o) )	
	m.delete(o)
	// console.log( m.has(o) )
	
	const arrMap=new Map([
		["name",'Alex'],
		["title",'a title']
	]);
	// console.log( arrMap.get('name') )
	
	
	
}


// ----------------Proxy----------------
{
	//利用proxy做数据保护可参考 proxy.js
	var obj={
		name:'Alex',
		sex:'male',
		age:'20'
	}
	
	var proxy = new Proxy(obj,{
		set( target,key,value ){
			if( key !== 'sex' ){
				target[key]=value;
				return target[key];
			}
		}
	});
	
	
	try{
		proxy.sex='female';
	}catch(e){
		//TODO handle the exception
		// console.log(e)
		// throw new w('sex can not be change!')
		// console.warn('sex can not be change!')
	}
	
	// console.log( proxy.sex )
	
}


// ----------------Reflect----------------
{
	//Reflect 对象的方法和 proxy对象的方法一一对应 
}


// ----------------Promise对象----------------
{
	let promise=new Promise(function(resolve,reject){
		// console.log('promise');
		resolve();
	})
	
	promise.then( function(){
		// console.log('resolved');
	})
	
	// console.log('hi!')
}


// ----------------iterator 和 for...of 循环----------------
{
	// Array Object Map Set 四种数据集合
	var someString  = 'hi';
	// console.log( typeof someString[Symbol.iterator] )
	var iterator  = someString[Symbol.iterator]();
	// console.log( iterator.next() )
	// console.log( iterator.next() )
	// console.log( iterator.next() )

} 


// ----------------Generator函数的语法----------------
{
	function* helloWorldGenerator() {
		yield 'hello';
		yield 'world';
		return 'ending';
	}
	 
	var hw=new helloWorldGenerator();
	// console.log( hw.next() );	 
	// console.log( hw.next() );	 
	// console.log( hw.next() );
	
	var myIterable={};
	myIterable[Symbol.iterator]=function* (){
		yield 1;
		yield 2;
		yield 3;
	}
	// console.log([...myIterable])
	
	function* f() {
		for(let i=0;true;i++){
			let reset = yield i;
			if( reset ) { i=-1 };
		}
	}	
	var g=new f();
	
// 	console.log( g.next() );
// 	console.log( g.next() );
// 	console.log( g.next() );
// 	console.log( g.next() );	
// 	console.log( g.next(true) );
	
	for( let i of helloWorldGenerator() ){
		// console.log(i)
	}
	
	var clock=function* () {
		while(true){
			console.log('Tick!');
			yield;
			console.log('Tock');
			yield;
		}
	}
	var clock_Fun=clock();
// 	clock_Fun.next();
// 	clock_Fun.next();
// 	clock_Fun.next();
// 	clock_Fun.next();

	function* loadUI() {
		showLoadingScreen();
		yield loadDataAsynchronously();
		hideLoadingScreen();
	}
	
	function showLoadingScreen(){
		console.log('showLoadingScreen');
	}
	function loadDataAsynchronously(){
		console.log('loadDataAsynchronously');
	}
	function hideLoadingScreen(){
		console.log('hideLoadingScreen');
	}
	
	var loader =loadUI();
	// loadUI().next();	
	// loadUI().next();
	
}


// ----------------Generator函数的异步应用----------------
{
// 	1.Generator函数可暂停执行和恢复执行
// 	2.函数体内外的数据交换机制
// 	3.错误处理机制
// 	上述特性让generator函数可以封装异步任务

		function* gen(x) {
			var y=yield x+2;
			return y;
		}
		
		var g=gen(1);
		// console.log( g.next() );		
		// console.log( g.next(5) );
		
}


// ----------------async函数----------------
{
	async function getStockPriceByName(name){
		var symbol = await getStockSymbol(name);
		var stockPrice = await getstockPrice(symbol);
		return stockPrice;
	}
	
	getStockPriceByName('goog').then(function(result){
		// console.log(result)
	})
	
	function getStockSymbol(name){
		// console.log(name)
		return name;
	}
	function getstockPrice(symbol){
		var symbol=symbol+':100/股'
		return symbol;
	}
	
	
	
	
	async function timeout(ms){
		await new Promise( (resolve) => {
			setTimeout(resolve,ms)
		} )
	}
	
	async function asyncPrint(value,ms){
		await timeout(ms);
		console.log(value);
	}
	
	// asyncPrint('hello',1000)
	
	
	
	async function f(){
		return 'this is aasync function'
	}
	
	// f().then( v => console.log(v) )
	
	
}


// ----------------Class的基本语法----------------
{
// 	function Point(x,y){
// 		this.x = x;
// 		this.y = y;
// 	}
// 	Point.prototype.toString = function(){
// 		return '('+this.x+','+this.y+')';
// 	}
	
	// var p=new Point(1,2);
	// console.log( 	p.toString() )
	
	//定义类
	class Point{
		constructor(x,y) {
		    this.x=x;
				this.y=y;
		}
		toString(){
			return '('+this.x+','+this.y+')';
		}
	}
	var p=new Point(1,2);
	// console.log( 	p.toString() )
	
	
	
}


// ----------------Class的继承----------------
{
	class Point{
		constructor(x,y) {
				this.x=x;
				this.y=y;
		}
		toString(){
			return '('+this.x+','+this.y+')';
		}
	}
	
	class ColorPoint extends Point {
		constructor(x,y,color){ 
			super(x,y);
			this.color=color;
		}
		toString(){
			return this.color +' '+super.toString();
		}
	}
	
	const cp = new ColorPoint(1,2,'yellow');
	// console.log( cp.toString() )
	
}


// ----------------修饰器----------------
{
	// 修饰器(decorator)是一个函数用来修改类的行为
// 	@testable 
// 	class MyTestableClass{
// 		constructor(x) {
// 		    this.x=x;
// 		}
// 	}
// 	
// 	function testable(target){
// 		target.isTestable=true;
// 	}
// 	
// 	console.log( MyTestableClass.isTestable )

}


// ----------------Module的语法----------------
import {personInfo,sayHi} from './profile'
import * as circle from './circle'
import customName from './export-default'

{
	// console.log( personInfo )
	// sayHi()
	// console.log( circle.area(4) )
	// customName()
}


// ----------------Module的加载实现----------------

var mod=require('./lib'); // commonJs require 静态传值

import {counter,inCounter} from './alive'  //ES6模块 动态
const alive = require('./alive')
{
	// defer async 的区别
	// <script src="****.js" defer></script>  渲染完再执行
	// <script src="****.js" async></script>	下载完就执行
	
// 	console.log( mod.counter )
// 	mod.inCounter();
// 	console.log( mod.counter )
// 	
// 	console.log(counter)
// 	inCounter();
// 	console.log(counter)

// 	console.log(alive.counter)
// 	alive.inCounter();
// 	console.log(alive.counter)
}


// ----------------编程风格----------------
{
	// 1、用let取代var 尤其for循环
	{
		for( let i=0; i<10 ; i++ ){
			// console.log(i)
		}
	}
	// 2、lei和const之间 优先const  尤其全局环境
	{
		const [a,b,c]=[1,2,3];
	}
	// 3、静态字符串用单引号 动态用反引号
	{
		const a='footer';
		const b=`foo${a}bar`;
		// console.log(b)		
	}
	// 4、使用数组成员对变量赋值，优先解析赋值
	{
		const arr=[1,2,3,4];
		const [first,second]=arr;
	}
	// 5、定义单行对象最后一个成员不以逗号结尾，定义多行以逗号结尾，对象最好勿动态添加属性名
	{
		const a={ k1:1,k2:2 };		
		const b={ 
			k1:1,
			k2:2, 
		};
		const obj={
			id:'001',
			name:'ojbk',
			notsure:null
		}
		obj.notsure='nosruevalue';
	}
	// 6、使用扩展运算符（...）复制数组
	{
		const arr1=[1,2,3];
		const arr2=[...arr1,4,5,6];
		// console.log(arr2)
	}
	// 7、立即执行函数用箭头函数
	{	
		(()=>{
			// console.log('Arrow Function')
		})()		
	}
	// 8、模块 使用import取代require
	
}

