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
            hide:null
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
        this.toast=$('<div class="toast">');

        // 渲染Dom
        this.creat();
    };
    Dialog.zIndex=10000;
    Dialog.prototype={
      // 创建DOM节点
      creat:function(){
        var _this_=this,
            config=this.config
            mask=this.mask,
            loading=this.loading,
            win=this.win,
            winHeader=this.winHeader,
            winContent=this.winContent,
            winFooter=this.winFooter,
            defaultButton=this.defaultButton,
            toast=this.toast,
            body=this.body;

        // 拦截LOADING隐藏
        if(config.hide){
            $('.loading').parents('.bf_dialog').remove();
            return;
        }

        if (!this.isConfig) {
          win.append(loading);
          mask.append(win);
          body.append(mask);
        }else{
          // 判断对话类型
          if(config.type=='toast'){
              // TOAST
              if (config.message) {
                toast.html(config.message);
              }
              this.fadeIn();
              body.append(toast);

              // 自动关闭 默认3000ms
              if ( config.delay && config.delay!=0 ){
                setTimeout(function(){
                  _this_.toast.remove();
                },config.delay)
              }else{
                var delayTime=3000;
                setTimeout(function(){
                  _this_.toast.remove();
                },delayTime)
              }
          }else if(config.type=='loading'){

          }else{
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
                defaultButton.click(function(e){
                  e.stopPropagation();
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
              e.stopPropagation();
              var cb=callback();
              if(cb==undefined){
                _this_.close();
              }
            })
          }else {
            button.click(function(e){
              e.stopPropagation();
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
        },10)
      },
      // 渐变出现效果
      fadeIn:function(){
        var _this_=this;
        this.toast.css("opacity","0");
        setTimeout(function(){
          _this_.toast.css("opacity","1");
        },10)
      }
    };
    window.Dialog=Dialog;

    $.dialog=function(config){
      return new Dialog(config);
    }
})(Zepto)
