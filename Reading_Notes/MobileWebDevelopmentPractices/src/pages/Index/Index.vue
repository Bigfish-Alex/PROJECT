<template>
  <div id="index-page">
    <h1>移动Web前端高效开发实践</h1>

    <h2>第1章：初始移动Web前端</h2>

    <p>
      HTML5 特性   语义化、本地存储、设备兼容、连接特性、多媒体、图形特效
    </p>

    <div class="fakeElement">===</div>
    <h2>第2章：移动web开发环境搭建</h2>
    <p>
      Vs code\Node.js\npm\NProxy\http-server...
    </p>

    <div class="fakeElement">===</div>
    <h2>第3章：HTML5必会实际常用特性</h2>
    <p>
      1.新语义 header、nav、article、section、footer...</br>
      2.表单增强 search、tel、url、email、date ...</br>

      <form class="" action="" method="post">
        <input type="tel" name="tel" value="" placeholder="请输入手机号码" pattern="1[3-8][0-9]{9}" tltle="请输入11位手机号码">
        <input type="submit" name="" value="submit">
      </form>
      </br>

      3.progress and meter contenteditable 等新元素 新属性
      <meter value="3" min="0" max="100"></meter>
      <progress value="44" max="100">0%</progress>
      <br>

      4.多媒体增强 <br>

      5.访问设备信息（定位、调用摄像头、设备移动、） <br>

      6.离线存储 <br>

      7.图形处理 svg、canvas 、WebSocket、WebRTC<br>

      <svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
        <g stroke-width="10" fill="none">
          <circle stroke="#0085c7" r="50" cy="117" cx="105"/>
          <circle stroke="#000000" r="50" cy="117" cx="220"/>
          <circle stroke="#df0024" r="50" cy="117" cx="335"/>
          <circle stroke="#f4c300" r="50" cy="172" cx="162"/>
          <circle stroke="#009f3d" r="50" cy="172" cx="278"/>
        </g>
      </svg>
      <br>

      8.新通信方式 PostMessage、Server Sent Event<br>
    </p>


    <div class="fakeElement">===</div>
    <h2>第4章：CSS3必会实战技巧</h2>
    <p>
      1.选择器 <br>
      2.盒模型 通过box-sizing 改变默认css和模型对元素宽高的计算方式。 <br>
      3.个性化字体 @font-face <br>
      4.自适应布局<br>
      <div class="fatherBox">
        <div class="header">

        </div>
        <div class="content">
          calc属性 实测无效 <br>
          原因坑点  <br>   --- <br> !加减号前后需要空格!
        </div>
      </div>

      <br>
      5.伪类伪元素

      <br>

      6.响应式开发（viewport、Flex弹性盒、媒体查询、rem-font size of the root element、多列布局）
      <div class="flexBox">
        <div class="flexItem">
          <span>Flex</span>
        </div>
      </div>

      <div id="coll">
        伫倚危楼风细细。望极春愁，黯黯生天际。草色烟光残照里。无言谁会凭阑意。

        拟把疏狂图一醉。对酒当歌，强乐还无味。衣带渐宽终不悔。为伊消得人憔悴。
      </div>

      <br>
      7.动画效果（Transition、Animation）
      <div class="AnimationContainer">
        <span>BOOM</span>
      </div>

      <br>
      8.css3渐变

      <div class="gradient">

      </div>
    </p>

    <div class="fakeElement">===</div>
    <h2>第6章：HTML5移动开发实践</h2>
    <p>
      1.在地图上显示行走轨迹（高德api，无自制demo） <br>
      2.仿原生相册  <a href="gallery.html">DEMO传送门</a> <br>
      3.Socket.IO制作小型聊天室   PetProject-smallChat <br>
      4.移动端拍照上传实践   PetProject-uploadImg <br>
      5.利用Microdata进行SEO优化 (无自制demo,原理就是帮助页面实现语义化) <br>
      6.制作一个带字幕的视频播放器 <br>
    </p>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Logo from '../../components/Logo';

export default {
  name: 'IndexPage',
  components: {
    TopHeader: Header,
    Logo,
  },
};
</script>

<style lang="scss">
  @import './index.scss'
</style>
