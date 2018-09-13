const http = require('http');
const cheerio = require('cheerio');
const url = 'http://www.wyu.edu.cn/ywsy.jsp?urltype=tree.TreeTempUrl&wbtreeid=1032';

function filterHtml(_html){
  var $ = cheerio.load(_html);
  var newsList=$('.wyu-lineheight-S li');
  var newsData=[];
  newsList.each(function(index,item){
    var newsObj={
      id:'',
      title:'',
      time:'',
      link:''
    };
    newsObj.id=index;
    newsObj.title=$(item).find('a').text();
    newsObj.time=$(item).find('span').text();
    newsObj.link=$(item).find('a').attr('href');
    newsData.push(newsObj);
  });
  printData(newsData)
}

function printData(_dataList){
  // _dataList.each(function(index,item){
  //   console.log('['+item.id+']:  '+item.title);
  // })
  _dataList.forEach(function(item){
    console.log('['+item.id+']:  '+item.title);
  })
}

http.get(url,function(res){
  var html='';

  res.on('data',function(data){
    html+=data;
  });

  res.on('end',function(){
    filterHtml(html)
  });

}).on('error',function(){
  console.log('出错了，爬取失败！');
})
