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