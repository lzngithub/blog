<template>
  <div id="app">
    <header-tab></header-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTab from '@/page/common/components/headerTab/index'
export default {
  name: 'app',
  components: {
    headerTab
  },
};
</script>

<style>
@import url('~@/assets/iconfont/iconfont.css');
html,body {
  width: 100%;
  height:100px;
}
*{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:35rem;
  height: 1000px;
  background-color: #f0f0f0;
  min-height:100%;
  margin: 0rem auto;

}
/* 768以下 */
@media screen and (max-width: 768px){
  html{
    font-size: 12px;
  }
  #app{
    width: 100%;
  }
}
/* 768到1024 */
@media screen and (min-width: 768px){
  html{
    font-size: 14px;
  }
  #app{
    width: 100%;
  }
}
/* 1024到1200 */
@media screen and (min-width: 1024px){
  html{
    font-size: 16px;
  }
  #app{
    width: 1024px;
  }
}
/* 1200以上 */
@media screen and (min-width: 1200px){
  html{
    font-size: 32px;
  }
  #app{
    width: 1024px;
  }
}
</style>
