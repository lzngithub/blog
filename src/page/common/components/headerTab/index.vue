<template>
  <div id="header-tab">
      <div class="title">
          个人博客
      </div>
      <div class="top-bar">
          <ul>
              <li v-for="(item, index) in list"
              :key="index"
              :class="{active:tabIndex === index}"
              @click="changeTab(index)">{{item.name}}</li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'headerTab',
  components: {
  },
  data(){
      return {
          tabIndex: 0,
          list: [
              {
                  name: '首页',
              },
              {
                  name: '发布博客',
              },
              {
                  name: '浏览博客',
              },
          ]
      }
  },
  methods:{
      changeTab(index){
          let that = this;
          that.tabIndex = index;
      }
  }
};
</script>

<style lang='less' scoped>
#header-tab{
    width: 100%;
    position: fixed;
    top: 0px;
    .title{
        width: 100%;
        background-color: #fff;
        font-size: 24px;
        color: #5e5e5e;
    }
    .top-bar{
        width: 100%;
        background-color: #458fd2;
        color: #fff;
        ul{
            li{
                position: relative;
                padding: 1rem 4rem;
                display: inline-block;
                cursor: pointer;
            }
            .active{
                &:after{
                    content: '@';
                    display: block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    color: #458fd2;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    cursor: pointer;

                }
                background-color: grey;
            }
        }
    }
}
</style>
