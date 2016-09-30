<template>
  <div class="w768">
    <loading :show="isLoading" position="absolute"></loading>
    <view-box v-ref:view-box>
      <!--header slot-->


      <!--Main Content slot-->
      <router-view
              :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
      ></router-view>

      <!--bottom slot-->
      <tabbar class="footer-index" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
        <tabbar-item v-link="{path:'/'}" :selected="route.path === '/'">
          <img v-if="route.path === '/'" slot="icon" src="./images/icon-index-red.png">
          <img v-if="route.path != '/'" slot="icon" src="./images/icon-index.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item v-link="{path:'/demo'}" :selected="isDemo" badge="9">
          <!--<span class="demo-icon-22" slot="icon">&#xe633;</span>-->
          <img v-if="isDemo" slot="icon" src="./images/icon-classify-red.png">
          <img v-if="!isDemo" slot="icon" src="./images/icon-classify.png">
          <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>分类</span></span>
        </tabbar-item>

        <tabbar-item v-link="{path:'/shoppingCart'}" :selected="isShoppingCart" badge="9">
          <!--<span class="demo-icon-22" slot="icon">&#xe633;</span>-->
          <img v-if="isShoppingCart" slot="icon" src="./images/icon-cart-red.png">
          <img v-if="!isShoppingCart" slot="icon" src="./images/icon-cart.png">
          <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>购物车</span></span>
        </tabbar-item>

        <tabbar-item v-link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" show-dot>
          <img v-if="route.path === '/project/donate'" slot="icon" src="./images/icon-my-red.png">
          <img v-if="route.path != '/project/donate'" slot="icon" src="./images/icon-my.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import store from './vuex/store'
  import { Tabbar, TabbarItem } from './components/tabbar'
  import Loading from 'vux/dist/components/Loading'
  import ViewBox from 'vux/dist/components/View-Box'
  import XHeader from 'vux/dist/components/X-Header'
  import Search from 'vux/dist/components/search'
  import Flexbox from 'vux/dist/components/flexbox'
  import FlexboxItem from 'vux/dist/components/flexbox-item'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Loading,
      ViewBox,
      XHeader,
      Search,
      Flexbox,
      FlexboxItem
    },
    store: store,
    vuex: {
      getters: {
        route: (state) => state.route,
        isLoading: (state) => state.isLoading,
        direction: (state) => state.direction
      }
    },
    data () {
      return {
        routerTransition: {
          forward: 'slideRL',
          back: 'slideLR'
        }
      }
    },
    methods: {
      scrollTop () {
        this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
      },
      onSubmit (val) {
        alert('on submit' + val)
      }
    },
    computed: {
      leftOptions () {
        return {
          showBack: this.route.path !== '/'
        }
      },
      headerTransition () {
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
      componentName () {
        const parts = this.route.path.split('/')
        if (/component/.test(this.route.path) && parts[2]) return parts[2]
      },
      isDemo () {
        return /component|demo/.test(this.route.path)
      },
      isShoppingCart () {
        return /component|shoppingCart/.test(this.route.path)
      },
      isTabbarDemo () {
        return /tabbar/.test(this.route.path)
      },
      title () {
        if (this.route.path === '/') return 'Home'
        if (this.route.path === '/project/donate') return 'Donate'
        if (this.route.path === '/demo') return 'Demo list'
        return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
      }
    }
  }
</script>

<style lang="less">
  /*@import 'styles/index.less';*/
  /*@import './styles/weui/base/reset';*/
  @import '~vux/dist/vux.css';
  @import './css/common.css';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  /* v-r-transition, default is {forward: 'forward', back: 'back'}*/
  .forward-enter, .forward-leave {
    transform: translate3d(-100%, 0, 0);
  }
  .back-enter, .back-leave {
    transform: translate3d(100%, 0, 0);
  }
  /*.demo-icon-22 {*/
    /*font-family: 'vux-demo';*/
    /*font-size: 22px;*/
    /*color: #888;*/
  /*}*/
  /*.weui_tabbar.vux-demo-tabbar {*/
    /*backdrop-filter: blur(10px);*/
    /*background-color: none;*/
    /*background: rgba(247, 247, 250, 0.5);*/
  /*}*/
  /*.vux-demo-tabbar .weui_bar_item_on .demo-icon-22 {*/
    /*color: #F70968;*/
  /*}*/
  /*.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label {*/
    /*color: #35495e;*/
  /*}*/
  /*.vux-demo-tabbar .weui_tabbar_item.weui_bar_item_on .vux-demo-tabbar-icon-home {*/
    /*color: rgb(53, 73, 94);*/
  /*}*/
  /*.demo-icon-22:before {*/
    /*content: attr(icon);*/
  /*}*/
  /*.vux-demo-tabbar-component {*/
    /*background-color: #F70968;*/
    /*color: #fff;*/
    /*border-radius: 7px;*/
    /*padding: 0 4px;*/
    /*line-height: 14px;*/
  /*}*/
  /*.weui_tabbar_icon {*/
    /*position: relative;*/
    /*width: 2.4rem;*/
    /*height: 2.4rem;*/
  /*}*/
  /*.weui_tabbar_icon + .weui_tabbar_label {*/
    /*margin-top: 0!important;*/
  /*}*/
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
  .weui_tab_bd {
  }

  /**
  * vue-router transition
  */
  .vux-pop-out-transition,
  .vux-pop-in-transition {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  .vux-pop-out-enter,
  .vux-pop-out-leave,
  .vux-pop-in-enter,
  .vux-pop-in-leave {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  .vux-pop-out-enter {
    animation-name: popInLeft;
  }
  .vux-pop-out-leave {
    animation-name: popOutRight;
  }
  .vux-pop-in-enter {
    perspective: 1000;
    animation-name: popInRight;
  }
  .vux-pop-in-leave {
    animation-name: popOutLeft;
  }
  @keyframes popInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes popInRight {
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
