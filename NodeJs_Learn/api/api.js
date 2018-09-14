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
