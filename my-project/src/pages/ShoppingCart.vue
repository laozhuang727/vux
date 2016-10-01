<template>
  <div>
    <nv-head>
      <p>购物车</p>
    </nv-head>
    <!-- 头部 -->
    <div class="commodity">
      <div class="comm-tit">
        <a href="#"><img src="../images/check-gray.png" alt="">
          <img src="../images/checked.png" alt="" style="display:none;"><span>汉米尔顿(Hamilton)旗舰店</span></a>
      </div>
      <div class="comm-con">
        <div class="check">
          <a href="#">
            <img src="../images/check-gray.png" alt="">
            <img src="../images/checked.png" alt="" style="display:none;">
          </a>
        </div>
        <div class="commodity-banner">
          <a href="#">
            <img src="../images/cart-banner.jpg" alt="">
          </a>
        </div>
        <div class="commodity-int">
          <div class="commodity-nam">
            <a href="#">汉米尔顿(Hamilton)卡其海军先锋系列 自动机械男表H78465553</a>
          </div>
          <div class="commodity-style">
            <span>颜色：银盘 棕带</span>
          </div>
          <div class="commodity-prize">
            <span>¥5599.00</span>
          </div>
          <div class="commodity-num">
            <a href="#">－</a><input type="text" value="1"><a href="#">＋</a>
          </div>
        </div>
        <div class="commodity-delete">
          <a href="#">
            <img src="../images/address-delete.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 商品（未选择） -->
    <div class="commodity">
      <div class="comm-tit">
        <a href="#"><img src="../images/check-gray.png" alt="">
          <img src="../images/checked.png" alt="" style="display:none;"><span>汉米尔顿(Hamilton)旗舰店</span></a>
      </div>
      <div class="comm-con">
        <div class="check">
          <a href="#">
            <img src="../images/check-gray.png" alt="">
            <img src="../images/checked.png" alt="" style="display:none;">
          </a>
        </div>
        <div class="commodity-banner">
          <a href="#">
            <img src="../images/cart-banner.jpg" alt="">
          </a>
        </div>
        <div class="commodity-int">
          <div class="commodity-nam">
            <a href="#">汉米尔顿(Hamilton)卡其海军先锋系列 自动机械男表H78465553</a>
          </div>
          <div class="commodity-style">
            <span>颜色：银盘 棕带</span>
          </div>
          <div class="commodity-prize">
            <span>¥5599.00</span>
          </div>
          <div class="commodity-num">
            <a href="#">－</a><input type="text" value="1"><a href="#">＋</a>
          </div>
        </div>
        <div class="commodity-delete">
          <a href="#">
            <img src="../images/address-delete.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 商品（未选择） -->
    <div class="commodity">
      <div class="comm-tit">
        <a href="#"><img src="../images/check-gray.png" alt="" style="display: none;"><img src="../images/checked.png"
                                                                                           alt=""><span>汉米尔顿(Hamilton)旗舰店</span></a>
      </div>
      <div class="comm-con">
        <div class="check">
          <a href="#">
            <img src="../images/check-gray.png" alt="" style="display: none;"><img src="../images/checked.png" alt="">
          </a>
        </div>
        <div class="commodity-banner">
          <a href="#">
            <img src="../images/cart-banner.jpg" alt="">
          </a>
        </div>
        <div class="commodity-int">
          <div class="commodity-nam">
            <a href="#">汉米尔顿(Hamilton)卡其海军先锋系列 自动机械男表H78465553</a>
          </div>
          <div class="commodity-style">
            <span>颜色：银盘 棕带</span>
          </div>
          <div class="commodity-prize">
            <span>¥5599.00</span>
          </div>
          <div class="commodity-num">
            <a href="#">－</a>
            <input type="text" value="1">
            <a href="#">＋</a>
          </div>
        </div>
        <div class="commodity-delete">
          <a href="#">
            <img src="../images/address-delete.png" alt="">
          </a>
        </div>
      </div>
      <div class="comm-con">
        <div class="check">
          <a href="#">
            <img src="../images/check-gray.png" alt="" style="display: none;"><img src="../images/checked.png" alt="">
          </a>
        </div>
        <div class="commodity-banner">
          <a href="#">
            <img src="../images/cart-banner.jpg" alt="">
          </a>
        </div>
        <div class="commodity-int">
          <div class="commodity-nam">
            <a href="#">汉米尔顿(Hamilton)卡其海军先锋系列 自动机械男表H78465553</a>
          </div>
          <div class="commodity-style">
            <span>颜色：银盘 棕带</span>
          </div>
          <div class="commodity-prize">
            <span>¥5599.00</span>
          </div>
          <div class="commodity-num">
            <a href="#">－</a>
            <input type="text" value="1">
            <a href="#">＋</a>
          </div>
        </div>
        <div class="commodity-delete">
          <a href="#">
            <img src="../images/address-delete.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 商品（选择） -->
    <div class="cart-space"></div>
    <!-- 空白区间 -->
    <div class="balance">
      <div class="balance-check">
        <a href="#">
          <img src="../images/check-gray.png" alt="" style="display: none;"/>
          <img src="../images/checked.png" alt=""/>
        </a>
      </div>
      <span>全选</span>
      <p>总金额：¥5599.00</p>
      <div class="balance-button">
        <a href="write-order.html">结算(3)</a>
      </div>
    </div>
  </div>
  <!-- 商品结算 -->
</template>

<script>
  import Group from 'vux/dist/components/group'
  import Search from 'vux/dist/components/search'
  import Cell from 'vux/dist/components/cell'

  export default {
    components: {
      Search,
      Group,
      Cell,
      'nvHead': require('../components/header.vue')
    },
    data () {
      return {
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers'
      }
    },
    ready: function () {
      this.getCustomers()
    },
    methods: {
      getCustomers: function () {
        this.$http.get(this.apiUrl).then(function (response) {
          this.$set('gridData', response.data)
        }).catch(function (response) {
          console.log(response)
        })
      }
    }
  }
</script>

<style>
  @import '../css/cart.css';
</style>