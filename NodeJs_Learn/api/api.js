//****************** url******************
const url = require('url');
const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash',true);
// console.log(myURL)


// ****************** querystring******************
const querystring = require('querystring');
const myUrlString=querystring.stringify({name:'alex',list:[1,2,3]},'&');
// console.log(myUrlString);
const stringParse=querystring.parse(myUrlString,'&');
// console.log(stringParse);
// console.log( querystring.escape('哈哈') );
// console.log( querystring.unescape('%D6%D0%CE%C4') );

// ****************** events******************
var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.on('ask',function(_who){
  // console.log( _who +' ask a qustion' );
})

life.emit('ask','Alex');

const fs = require('fs');
// ****************** Buffer******************
// console.log( new Buffer('HELLO') );

var buf = new Buffer(7);
buf.write('12345678');
// console.log( buf );
// console.log( buf.length );

var bufArr = new Buffer([1,2,3,4]);
// console.log(bufArr);


fs.readFile('hhr.png',function(err,origin_buffer){
  // console.log( Buffer.isBuffer( origin_buffer ) );
  //
  // fs.writeFile('hhr_buffer.png',origin_buffer,function(err){
  //   if(err) console.log(err);
  // })
  //
  // var base64Image = origin_buffer.toString('base64');
  //
  // console.log( base64Image );
})


// ****************** stream******************
var source = fs.readFileSync('hhr.png');
// fs.writeFileSync('hhr_copy.png',source);


// var readStream = fs.cerateReadStream
