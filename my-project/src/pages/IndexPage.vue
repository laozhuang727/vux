<template>
  <div>
    <div>
      <header>
        <div class="index-header">
          <div class="logo">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <div class="index-search-box">
            <input type="text" placeholder="搜索...">
            <img src="../assets/images/icon-search.png" alt="">
          </div>
          <div class="index-login" v-if="isLogon">
            <a href="javascript:;" @click="navTo('/login')">登录</a>
          </div>
        </div>
      </header>
      <!-- 顶部 -->
      <div class="banner">
        <a href="javascript:;" @click="navTo('/productList')">
          <img src="../assets/images/index-banner01.jpg" alt="">
        </a>
      </div>
      <!-- banner -->
      <div class="index-nav">
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-com-pro.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">精品</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-hot-sal.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">热卖</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-sal-pro.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">促销</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-gro-buy.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">团购</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-points.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">积分</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-trial.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">试用</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-category.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">类目</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" @click="navTo('/productList')">
              <img src="../assets/images/icon-brand.png" alt="">
            </a>
          </dt>
          <dd>
            <a href="javascript:;" @click="navTo('/productList')">品牌</a>
          </dd>
        </dl>
      </div>
      <!-- 导航 -->
      <div class="hot-sale">
        <div class="hot-sale-title">
          <span>热卖推荐</span>
          <a href="javascript:;" @click="navTo('/productList')">更多>></a>
        </div>
        <div class="hot-sale-con">
          <dl>
            <dt>
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/hot-sale-banner01.jpg" alt="">
              </a>
            </dt>
            <dd class="prize">
              <span>¥52.90</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/hot-sale-banner02.jpg" alt="">
              </a>
            </dt>
            <dd class="prize">
              <span>¥52.90</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/hot-sale-banner03.jpg" alt="">
              </a>
            </dt>
            <dd class="prize">
              <span>¥52.90</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/hot-sale-banner04.jpg" alt="">
              </a>
            </dt>
            <dd class="prize">
              <span>¥52.90</span>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 热卖推荐 -->
      <div class="guanggao">
        <a href="javascript:;" @click="navTo('/productList')">
          <img src="../assets/images/guanggao.jpg" alt="">
        </a>
      </div>
      <!-- 广告 -->
      <div class="activity">
        <div class="activity-title">
          <span>商家活动</span>
          <a href="javascript:;" @click="navTo('/productList')">更多>></a>
        </div>
        <div class="activite-left">
          <a href="javascript:;" @click="navTo('/productList')">
            <img src="../assets/images/activity-banner01.jpg" alt="">
          </a>
        </div>
        <div class="activite-right">
          <ul>
            <li class="activite-right-up">
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/activity-banner02.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/activity-banner03.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 商家活动 -->
      <div class="new">
        <div class="new-title">
          <span>商家上新</span>
          <a href="javascript:;" @click="navTo('/productList')">更多>></a>
        </div>
        <div class="new-left">
          <ul>
            <li class="new-left-up">
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/new-banner01.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/new-banner02.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
        <div class="new-right">
          <a href="javascript:;" @click="navTo('/productList')">
            <img src="../assets/images/new-banner03.jpg" alt="">
          </a>
        </div>
      </div>
      <!-- 商家上新 -->
      <div class="themes">
        <div class="themes-title">
          <span>主题馆</span>
          <a href="javascript:;" @click="navTo('/productList')">更多>></a>
        </div>
        <div class="themes-con">
          <ul>
            <li v-for="item in items">
              <a href="javascript:;" @click="navTo('/productList')">
                <img src="../assets/images/themes-banner01.jpg" alt="">
              </a>
            </li>

          </ul>
        </div>
      </div>
      <!-- 主题馆 -->
    </div>
    <group>
      <cell title="Demo" link="/demo" value="演示">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="Buy me a coffee" link="project/donate">
        <span class="demo-icon" slot="icon" style="color:red;">&#xe630;</span>
        <div class="badge-value" slot="value" class="vux-center-v">
          <badge text="捐赠"></badge>
        </div>
      </cell>
      <cell title="Github" link="http://github.com/airyland/vux" value="Star me">
        <span class="demo-icon" slot="icon" style="color:#35495e;">&#xe62f;</span>
      </cell>
    </group>
    <div class="index-space"></div>
    <!-- 空白区间 -->
  </div>
</template>

<script>
  import Group from 'vux/dist/components/group'
  import Cell from 'vux/dist/components/cell'
  import Badge from 'vux/dist/components/Badge'
  import Flexbox from 'vux/dist/components/flexbox'
  import FlexboxItem from 'vux/dist/components/flexbox-item'
  import Divider from 'vux/dist/components/divider'
  import {go} from '../libs/router'

  const version = require('../../package.json').version
  export default {
    components: {
      Cell,
      Group,
      Badge,
      Flexbox,
      FlexboxItem,
      Divider
    },
    data () {
      return {
        version: version,
        items: [
          {message: 'Foo'},
          {message: 'Bar'}
        ]
      }
    },
    computed: {
      // 仅读取，值只须为函数
      isLogon: function () {
        return sessionStorage.getItem('accessToken') === ''
      }
    },
    methods: {
      navTo (link) {
        go(link, this.$router)
      }
    }
  }
</script>

<style lang="less">
  @import '../css/index.css';


</style>
