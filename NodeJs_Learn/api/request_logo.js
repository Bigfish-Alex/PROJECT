const http = require('http')
const fs = require('fs')
const request = require('request')

http.createServer(function(req,res){
  // fs.readFile('hhr.png',function(err,data){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     res.writeHeader(200,{'Context-Type':'text/html'})
  //     res.end(data)
  //   }
  // })

  // fs.createReadStream('hhr.png').pipe(res)

  request('http://www.qsbpdata.com/pages/libs/imgs/01index/00nav/index_logo_1.png').pipe(res)


}).listen(8090)
