<template>
  <div id="test-page">
    <!-- <top-Header></top-Header> -->
    <!-- <logo></logo> -->
    <h2>这是一个测试文件，oh yes！！！</h2>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Logo from '../../components/Logo';

export default {
  name: 'testPage',
  components: {
    TopHeader: Header,
    Logo,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}
</style>
