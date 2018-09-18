const http = require('http');
const cheerio = require('cheerio');
// const url = 'http://www.wyu.edu.cn/ywsy.jsp?urltype=tree.TreeTempUrl&wbtreeid=1032';
const baseUrl = 'http://www.wyu.edu.cn/info/1032/';
const newsIdList = [23253,23324,23269];

function filterTitle(_html){
  var $ = cheerio.load(_html);
  var title = $('.news_view_title').text();
  console.log(title);
}

function beginToCrawer(url){
  return new Promise(function(resolve,reject){
    http.get(url,function(res){
      var htmls='';

      res.on('data',function(data){
        htmls+=data;
      });

      res.on('end',function(){
        resolve(htmls)
      });

    }).on('error',function(){
      console.log('出错了，爬取失败！');
    })
  })
}

var promiseList=[];
newsIdList.forEach(function(item){
  promiseList.push( beginToCrawer(baseUrl+item+'.htm') );
})


Promise
  .all(promiseList)
  .then(function(htmls){
    htmls.forEach(function(item){
      filterTitle(item);
    })
  })
