<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <nv-head>
      <p>分类</p>
    </nv-head>
    <!-- 头部 -->
    <pre | json> {{pageData.secondLevelCategory}}</pre>
    <div class="classify-lis">
      <div class="classify-left">
        <ul>
          <li v-for="firstLevelCategory in pageData.firstLevelCategories">
            <a @click="onItemClick(firstLevelCategory)">
              <img :src="loadStaticImg(firstLevelCategory.icon)" alt="">
            </a>
            <span :class="{'arrow': pageData.selectedFirstLevelCategory == firstLevelCategory.id}">
              {{ firstLevelCategory.id }}{{ firstLevelCategory.name }}
            </span>
          </li>
        </ul>
      </div>
      <!-- 一级目录 -->
      <div class="classify-middle">
        <ul>
          <li v-for="secondLevelCategory in pageData.secondLevelCategories">
            <a @click="getThirdLevelCategories(secondLevelCategory)"
               :class="{'on': pageData.selectedSecondLevelCategory == secondLevelCategory.id}">
              {{ secondLevelCategory.id }}{{ secondLevelCategory.name }}
            </a>
            <!-- 二级目录 -->
          </li>
        </ul>
      </div>
      <div class="classify-right">
        <ul>
          <li v-for="thirdLevelCategory in pageData.thirdLevelCategories">
            <a href="#">
              {{ thirdLevelCategory.id }}{{ thirdLevelCategory.name }}
            </a>
          </li>
        </ul>
      </div>
      <!-- 三级目录 -->
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
          secondLevelCategories: [],
          thirdLevelCategories: [],
          selectedFirstLevelCategory: '',
          selectedSecondLevelCategory: '',
          selectedThirdLevelCategory: ''
        },
        apiFirstLevelUrl: 'http://localhost:8080/api/categories/firstLevelCategories',
        apiSecondLevelUrl: 'http://localhost:8080/api/categories/subCategories',
        apiThirdLevelUrl: 'http://localhost:8080/api/categories/subCategories'
      }
    },
    ready: function () {
      this.getFirstLevelCategories()
    },
    methods: {
      loadStaticImg: function (path) {
        return require('../assets/' + path)
      },
      onItemClick: function (firstLevelCategory) {
        this.pageData.selectedFirstLevelCategory = firstLevelCategory.id
        this.getSecondLevelCategories(firstLevelCategory.id)
      },
      getFirstLevelCategories: function () {
        var vm = this

        vm.pageData.secondLevelCategories = []
        vm.pageData.thirdLevelCategories = []

        vm.$http.get(vm.apiFirstLevelUrl)
            .then(function (response) {
              vm.$set('pageData.firstLevelCategories', response.data)
//              console.log(response)
            })
      },
      getSecondLevelCategories: function (categoryId) {
        var vm = this
        vm.pageData.thirdLevelCategories = []

        vm.$http.get(vm.apiSecondLevelUrl, {params: {categoryId: categoryId}})
            .then(function (response) {
              vm.$set('pageData.secondLevelCategories', response.data)
              console.log(response)
            })
      },
      getThirdLevelCategories: function (secondLevelCategory) {
        this.pageData.selectedSecondLevelCategory = secondLevelCategory.id
        var vm = this
        vm.$http.get(vm.apiThirdLevelUrl, {params: {categoryId: secondLevelCategory.id}})
            .then(function (response) {
              vm.$set('pageData.thirdLevelCategories', response.data)
              console.log(response)
            })
      }
    }
  }
</script>

<style>
  @import '../css/classify.css';
</style>