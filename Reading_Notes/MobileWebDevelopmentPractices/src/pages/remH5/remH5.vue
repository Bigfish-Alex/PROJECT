<template>
  <div>
    <header>
      THIS IS HEADER ZONE
    </header>
    <div class="banner">
      THIS IS BANNER ZONE
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list" v-bind:key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Logo from '../../components/Logo';
export default {
  name: 'remH5',
  components: {
    TopHeader: Header,
    Logo,
  },
  data(){
    return{
      list:[0,1,2,3,4,5,6,7,8,9]
    }
  },
  mounted() {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDOM = document.getElementsByTagName('html')[0];
    htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

    window.addEventListener('resize', (e) => {
      let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

      htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

    })
  },
};

</script>

<style lang="scss">
  @import './remH5.scss';
</style>
