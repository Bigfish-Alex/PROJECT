var https = require('https');
var querystring = require('querystring');

var postData = querystring.stringify({
  "content":"成功了！现在加了个mid,不加的话成功了也不会显示的，大家注意",
  "cid":"348",
  "mid":"8837" // 慕课网新变动，需要传mid，不然成功了没效果
})

var options = {
  protocol:"https:",
  hostname:"www.imooc.com",
  port:443,
  path:"/course/docomment",
  method:"POST",
  headers:{
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Cookie": "imooc_uuid=32cb296e-7670-4c91-a32e-e1b9787e71cc; imooc_isnew_ct=1511139758; imooc_isnew=2; loginstate=1; apsid=UwZmEzYWUxY2M1Mzg0ZjBlZjYzNjY2ODljYmFiZmIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzcwMjUwOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2MzIzODgyMzBAcXEuY29tAAAAAAAAAAAAAAAAAAAAADJiOTczY2RiODVkNDY1ZTE1NWQ5M2M3ZTQ5YTZhNGQ2UsyVW1LMlVs%3DY2; last_login_username=632388230%40qq.com; IMCDNS=0; mc_channel=syb7; mc_marking=60e5294c605a87b2af7257d06f70505e; PHPSESSID=dt7uaa3nc2bn61jn3tg6qqvq82; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1536543815,1536632818,1536805472,1536890730; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1536830611,1536890730,1536890759,1536890783; Hm_lpvt_fb538fdd5bd62072b6a984ddbc658a16=1536890785; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1536890997; cvde=5b9b176a43706-21",
    'Host': 'www.imooc.com',
    'Origin': 'https://www.imooc.com',
    'Referer': 'https://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

var req = https.request(options,function(res){
  console.log( 'Status: ' + res.statusCode );
  console.log( 'headers' + JSON.stringify(res.headers) );

  res.on('data',function(chunk){
    console.log( Buffer.isBuffer(chunk) );
    console.log( typeof chunk );
  })

  res.on('end',function(){
    console.log('评论完毕');
  })

})

req.write(postData);
req.end();



// https变动
// 引入模块需要引入https
// 指定协议 https：
// https默认端口443
