<template>
  <div id="app">
    <loading :show="isLoading" position="absolute"></loading>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import '~vux/src/styles/reset';

body {
  background-color: #fbf9fe;
}
</style>

