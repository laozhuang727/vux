<template>
  <div>
    <header>
      <div class="shop-back">
        <a href="classify.html">
          <img src="../assets/images/back.png" alt="">
        </a>
      </div>
      <div class="shop-search-box">
        <input type="text" placeholder="搜索店铺内商品">
        <img src="../assets/images/icon-search.png" alt="">
      </div>
      <div class="shop-click">
        <a href="#">搜索</a>
      </div>
    </header>
    <!-- 头部 -->
    <div class="shop-mes">
      <div class="lef">
        <span><img src="../assets/images/shop-img.png" alt=""></span>
        <span><em>金胜官方旗舰店</em><i>评分：9.7</i></span>
      </div>
      <div class="rig">
        <ul>
          <li class="up"><a href="#">关注</a></li>
          <li class="dow"><em>60万人</em></li>
        </ul>
      </div>
    </div>
    <!-- 店铺信息 -->
    <div class="shop-ind-nav">
      <dl class="on">
        <dt><img src="../assets/images/sho-ind-red.png" alt=""></dt>
        <dd>店铺首页</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/all-com-gra.png" alt=""></dt>
        <dd>全部商品</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/sho-new-gra.png" alt=""></dt>
        <dd>店铺上新</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/con-ser.png" alt=""></dt>
        <dd>联系客服</dd>
      </dl>
    </div>
    <!-- 导航 -->
    <div class="ind-list">
      <div class="tit"><span>热卖商品</span></div>
      <div class="pro" v-for="product in pageData.hotSaleProducts">
        <a href="#">
          <span><img :src="loadStaticImg(product.icon)" alt=""></span>
          <span class="nam">{{product.name}}</span>
          <span class="pri">¥{{product.salePrice}}</span>
        </a>
      </div>
      <div class="bot"><a href="#">更多</a></div>
    </div>
    <!-- 首页商品列表 -->
    <div class="shop-nav">
      <ul>
        <li class="shop-nav-on">
          <a href="#">
            人气
          </a>
        </li>
        <li>
          <a href="#">
            销量
          </a>
        </li>
        <li>
          <a href="#">
            价格
          </a>
        </li>
        <li>
          <a href="#">
            新品
          </a>
        </li>
      </ul>
    </div>
    <div class="shop-list">
      <a href="#">
        <div class="shop-com-img">
          <img src="../assets/images/commodity01.jpg" alt="">
        </div>
        <div class="shop-com-int">
          <p>联想台式电脑 i5处理器 4G内存 500G硬盘 2G独显 送U盘</p>
          <div class="shop-com-prize">
            <span>¥3639.00</span>
            <p><em>0.0%好评</em>(0)人评论</p>
          </div>
        </div>
      </a>
    </div>
    <div class="shop-list">
      <a href="#">
        <div class="shop-com-img">
          <img src="../assets/images/commodity01.jpg" alt="">
        </div>
        <div class="shop-com-int">
          <p>联想台式电脑 i5处理器 4G内存 500G硬盘 2G独显 送U盘</p>
          <div class="shop-com-prize">
            <span>¥3639.00</span>
            <p><em>0.0%好评</em>(0)人评论</p>
          </div>
        </div>
      </a>
    </div>
    <div class="shop-list">
      <a href="#">
        <div class="shop-com-img">
          <img src="../assets/images/commodity01.jpg" alt="">
        </div>
        <div class="shop-com-int">
          <p>联想台式电脑 i5处理器 4G内存 500G硬盘 2G独显 送U盘</p>
          <div class="shop-com-prize">
            <span>¥3639.00</span>
            <p><em>0.0%好评</em>(0)人评论</p>
          </div>
        </div>
      </a>
    </div>
    <div class="shop-list">
      <a href="#">
        <div class="shop-com-img">
          <img src="../assets/images/commodity01.jpg" alt="">
        </div>
        <div class="shop-com-int">
          <p>联想台式电脑 i5处理器 4G内存 500G硬盘 2G独显 送U盘</p>
          <div class="shop-com-prize">
            <span>¥3639.00</span>
            <p><em>0.0%好评</em>(0)人评论</p>
          </div>
        </div>
      </a>
    </div>
    <!-- 其他页面商品列表 -->
  </div>
</template>
<style lang="less" scoped>
  @import '../css/shop-index.css';
  @import '../css/common.css';
</style>
<script>
  export default{
    data () {
      return {
        pageData: {
          hotSaleProducts: [],
          orderByProducts: [],
          orderBy: ''
        },
        productListUrl: 'api/products',
        orderByProductListUrl: 'api/products/orderBy'
      }
    },
    ready: function () {
      this.loadHotSaleProducts()
    },
    methods: {
      loadStaticImg: function (path) {
        return require('../assets/' + path)
      },
      loadHotSaleProducts: function () {
        var vm = this

        vm.$http.get(vm.productListUrl, {params: {page: 0, size: 4}})
            .then(function (response) {
              vm.$set('pageData.hotSaleProducts', response.data)
              console.log(response)

//              if (vm.pageData.firstLevelCategories.length > 0) {
//                this.getSecondLevelCategories(vm.pageData.firstLevelCategories[0])
//              }
            })
      },
      loadOrderByProducts: function (orderBy) {
        var vm = this

        vm.pageData.orderByProducts = []

        vm.$http.get(vm.orderByProductListUrl, {params: {sort: orderBy}})
            .then(function (response) {
              vm.$set('pageData.orderByProducts', response.data)
              console.log(response)
            })
      }
    }
  }
</script>
