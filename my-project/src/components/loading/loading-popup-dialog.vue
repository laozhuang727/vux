<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="dialogs">
    <div class="dialog" v-bind:class="{ 'dialog-active': show }">
      <div class="dialog-content">
        <div class="close rotate">
          <span class="iconfont icon-close" @click="close"></span>
        </div>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
    <div class="dialog-overlay"></div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      close: function () {
        debugger
        this.show = false
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/grid/iconfont/iconfont.less';
</style>