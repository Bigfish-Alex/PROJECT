var https = require('https');
var querystring = require('querystring');

var postData = querystring.stringify({
  "content":"又来踩一踩！！！",
  "hostUin":"824501822",
  "uin":"632388230",
  "format":"fs",
  "inCharset":"utf-8",
  "outCharset":"utf-8",
  "iNotice":"1",
  "ref":"qzone",
  "json":"1",
  "g_tk":"1450828316",
  "qzreferrer":"https://qzs.qq.com/qzone/msgboard/msgbcanvas.html#page=1"
})

// request Url
// https://h5.qzone.qq.com/proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=145082831

var options = {
  "hostname":"h5.qzone.qq.com",
  "search":"?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=145082831",
  "query":"qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=145082831",
  "pathname":"/proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb",
  // "methods":"POST",
  "auth":"h5.qzone.qq.com",
  'authority': 'h5.qzone.qq.com',
  'method': 'POST',
  'scheme':'https',
  "path":"/proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=145082831",
  // ':path': '/proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=1450828316',
  // :authority: h5.qzone.qq.com
  // :method: POST
  // :path: /proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=1450828316
  // :scheme: https
  "headers":{
    'authority': 'h5.qzone.qq.com',
    'method': 'POST',
    'path' :'/proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=1450828316',
    'scheme':' https',
    'accept': '*/*',
    'accept-encoding':' gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'content-length': postData.length,
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'cookie': 'RK=6QnfqACrRr; pgv_pvi=3186992128; ptcz=145c5f7647a894dc6bbbf566320aaf7efaa5e28aa8598fe1d0e4fd2cee18ba63; tvfe_boss_uuid=3fd75511a7f82509; o_cookie=632388230; pgv_pvid=6857564654; pt2gguin=o0632388230; pac_uid=1_632388230; pgv_si=s1018542080; _qpsvr_localtk=0.9149640535849499; pgv_info=ssid=s6139644807; uin=o0632388230; skey=@qOfGvpAAT; ptisp=cnc; p_uin=o0632388230; pt4_token=EG157vFQk-liJeCfzY1DlK1ffgWHWIaJZunoT-LI6xg_; p_skey=Atp7lUsegBn*CNUE8oZa627P8b7r5KVrKWY-J6TapWw_; Loading=Yes; QZ_FE_WEBP_SUPPORT=1; randomSeed=562409; rv2=80CC179A1E4054E03AC95B9A83ED952A9CDE0E91434A68D25C; property20=238EAC5C13B66E2EAD6B8E46785C85F166D258EE3DEBA4DA71A6AC547379D8470B7667ED6D1B17AF; __Q_w_s_hat_seed=1; cpu_performance_v8=11',
    'origin': 'https://user.qzone.qq.com',
    'referer': 'https://user.qzone.qq.com/824501822',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.9'
  }
}

var req = https.request(options,function(res){
  console.log( 'Status: ' +res.statusCode );
  console.log( 'headers: '+ JSON.stringify(res.headers) );

  res.on('data',function(chunk){
    console.log( Buffer.isBuffer(chunk) );
    console.log( typeof chunk );
  })

  res.on('end',function(){
    console.log('留言完成！！！');
  })

})


req.on('error',function(e){
  console.log( '错误： '+e.message );
})

req.write(postData);
req.end();


// :authority: h5.qzone.qq.com
// :method: POST
// :path: /proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=ea23a40ff7041ee826b08a723e561242d4bf11dc91797afe4038ac06ab4bc95a242160c8d8876982&g_tk=1450828316
// :scheme: https
// accept: */*
// accept-encoding: gzip, deflate, br
// accept-language: zh-CN,zh;q=0.9,en;q=0.8
// content-length: 237
// content-type: application/x-www-form-urlencoded;charset=UTF-8
// cookie: RK=6QnfqACrRr; pgv_pvi=3186992128; ptcz=145c5f7647a894dc6bbbf566320aaf7efaa5e28aa8598fe1d0e4fd2cee18ba63; tvfe_boss_uuid=3fd75511a7f82509; o_cookie=632388230; pgv_pvid=6857564654; pt2gguin=o0632388230; pac_uid=1_632388230; pgv_si=s1018542080; _qpsvr_localtk=0.9149640535849499; pgv_info=ssid=s6139644807; uin=o0632388230; skey=@qOfGvpAAT; ptisp=cnc; p_uin=o0632388230; pt4_token=EG157vFQk-liJeCfzY1DlK1ffgWHWIaJZunoT-LI6xg_; p_skey=Atp7lUsegBn*CNUE8oZa627P8b7r5KVrKWY-J6TapWw_; Loading=Yes; QZ_FE_WEBP_SUPPORT=1; randomSeed=562409; rv2=80CC179A1E4054E03AC95B9A83ED952A9CDE0E91434A68D25C; property20=238EAC5C13B66E2EAD6B8E46785C85F166D258EE3DEBA4DA71A6AC547379D8470B7667ED6D1B17AF; __Q_w_s_hat_seed=1; cpu_performance_v8=11
// origin: https://user.qzone.qq.com
// referer: https://user.qzone.qq.com/824501822
// user-agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.9
