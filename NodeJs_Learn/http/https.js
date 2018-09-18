var https = require('https')
var fs = require('fs')

var options = {
  key : fs.readFileSync('ssh_key.pem'),  //无相关文件 无法测试
  cert : fs.readFileSync('ssh_cert.pem') //无相关文件 无法测试
}

https.createServer(options,function(req,res){
  res.writeHead(200)
  res.end('Hello Https')
}).listen(8090)
