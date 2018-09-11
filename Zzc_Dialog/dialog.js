// By BigFish 2018-07-30
(function($){
    var Dialog=function(_config){
        var _this=this;

        // 默认参数配置
        this.config={
            message:null,
            type:'normal',
            buttons:null,
            delay:null,
            maskOpacity:500
        };

        // 默认参数扩展
        if( _config && $.isPlainObject(_config) ){
            $.extend(this.config,_config);
            this.isConfig=true;
        }else{
            this.isConfig=false;
        }
        // console.log(this.isConfig)

        // 创建DOM
        this.body=$("body");
        this.mask=$('<div class="bf_dialog">');
        this.loading=$('<div class="loading"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
        this.win=$('<div class="bf_dialog_box">');
        this.winHeader=$('<div class="bf_dialog_title">')
        this.winContent=$('<div class="bf_dialog_content">');
        this.winFooter=$('<div class="bf_dialog_footer">');
        this.defaultButton=$('<button>是</button>');

        // 渲染Dom
        this.creat();
    };
    Dialog.zIndex=10000;
    Dialog.prototype={
      creat:function(){
        console.log(this.config)
        var _this_=this,
            config=this.config
            mask=this.mask,
            loading=this.loading,
            win=this.win,
            winHeader=this.winHeader,
            winContent=this.winContent,
            winFooter=this.winFooter,
            defaultButton=this.defaultButton,
            body=this.body;

        if (!this.isConfig) {
          win.append(loading);
          mask.append(win);
          body.append(mask);
          setTimeout(function(){
            _this_.close();
          },3000)
        }else{
          // 对话类型
          if (config.type) {
            win.addClass( config.type );
            win.append( winHeader.html('提示') );
          }
          // 信息内容
          if (config.message) {
            win.append( winContent.html(config.message) );
          }
          // 按钮组
          if (config.buttons){
              this.creatButtons(winFooter,config.buttons)
          }else{
            defaultButton.click(function(){
              _this_.close();
            })
            winFooter.append(defaultButton);
            win.append(winFooter);
          }
          // 自动关闭
          if ( config.delay && config.delay!=0 ){
            setTimeout(function(){
              _this_.close();
            },config.delay)
          }
          Dialog.zIndex++;
          this.mask.css("z-index",Dialog.zIndex);
          this.animate();
          // 插入层
          mask.append(win);
          body.append(mask);
        }
      },
      // 关闭对话
      close:function(){
        this.mask.remove();
      },
      // 创建按钮
      creatButtons:function(footer,buttons){
        var _this_=this;
        $.each(buttons,function(index,elem){
          var type=elem.type?elem.type:"";
          var text=elem.text?elem.text:"按钮"+index;
          var callback=elem.callback?elem.callback:null;
          var button=$('<button></button>');
          button.addClass(type);
          if(callback){
            button.click(function(e){
              var cb=callback();
              if(cb==undefined){
                _this_.close();
              }
            })
          }else {
            button.click(function(){
              _this_.close();
            })
          }

          footer.append(button.html(text));
        })
        win.append(footer);
      },
      // 添加动画
      animate:function(){
        var _this_=this;
        this.win.css("-webkit-transform","scale(0,0)");
        setTimeout(function(){
          _this_.win.css("-webkit-transform","scale(1,1)");
        })
      }
    };
    window.Dialog=Dialog;

    $.dialog=function(config){
      return new Dialog(config);
    }
})(Zepto)
