<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <nv-head>
      <p>分类</p>
    </nv-head>
    <!-- 头部 -->
    <pre | json> {{pageData.firstLevelCategories[0]}}</pre>
    <div class="classify-lis">
      <div class="classify-left">
        <ul>
          <li>
            <a href="#">
              <img src="../assets/images/classify-banner01.jpg" alt="">
            </a>
            <span class="arrow">服装</span>
            <div class="classify-middle">
              <ul>
                <li>
                  <a href="#">男装</a>
                  <div class="classify-right">
                    <ul>
                      <li>
                        <a href="#">polo衫</a>
                      </li>
                      <li>
                        <a href="#">女装潮牌</a>
                      </li>
                      <li>
                        <a href="#">设计师潮牌</a>
                      </li>
                      <li>
                        <a href="#">塑身美体</a>
                      </li>
                      <li>
                        <a href="#">内衣配件</a>
                      </li>
                      <li>
                        <a href="#">棒球帽</a>
                      </li>
                      <li>
                        <a href="#">耳包耳罩</a>
                      </li>
                      <li>
                        <a href="#">毛线/布面料</a>
                      </li>
                      <li>
                        <a href="#">棒球帽</a>
                      </li>
                    </ul>
                  </div>
                  <!-- 三级目录 -->
                </li>
                <li>
                  <a href="#" class="on">女装</a>
                </li>
                <li>
                  <a href="#">内衣</a>
                </li>
                <li>
                  <a href="#">时尚新品</a>
                </li>
                <li>
                  <a href="#">服饰配件</a>
                </li>
              </ul>
            </div>
            <!-- 二级目录 -->
          </li>
          <li v-for="firstLevelCategory in pageData.firstLevelCategories">
            <a href="#">
              <img :src="loadStaticImg(firstLevelCategory.icon)" alt="">
            </a>
            <span>{{ firstLevelCategory.name }}</span>
          </li>
        </ul>
      </div>
      <!-- 一级目录 -->
    </div>
    <!-- 分类列表 -->
    <div class="classify-space"></div>
    <!-- 空白区间 -->
  </div>
</template>

<script>
  export default {
    components: {
      'nvHead': require('../components/header.vue')
    },
    data () {
      return {
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        pageData: {
          firstLevelCategories: [],
          secondLevelCaegories: []
        },
        apiUrl: 'http://localhost:8080/api/categories/firstLevelCategories'
      }
    },
    ready: function () {
      this.getFirstLevelCategories()
    },
    methods: {
      loadStaticImg: function (path) {
        return require('../assets/' + path)
      },
      getFirstLevelCategories: function () {
        var vm = this
        vm.$http.get(vm.apiUrl)
            .then(function (response) {
              vm.$set('pageData.firstLevelCategories', response.data)
              console.log(response)
            })
      }
    }
  }
</script>

<style>
  @import '../css/classify.css';
</style>