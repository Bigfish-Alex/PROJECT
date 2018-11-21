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
      
      3.
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
