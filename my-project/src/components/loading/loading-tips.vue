<template>
  <div id="help">
    <slot name="loading">
      <loading-three-bounce v-show="showLoading"></loading-three-bounce>
    </slot>
    <slot name="error">
      <loading-popup-dialog :show="showDialog">
        <header class="dialog-header" slot="header">
          <h1 class="dialog-title">Server Error</h1>
        </header>
        <div class="dialog-body" slot="body">
          <p class="error">Oops,server has got some errors, error code: {{errorCode}}.</p>
        </div>
      </loading-popup-dialog>
    </slot>
  </div>
</template>
<script>
  import LoadingThreeBounce from './loading-three-bounce.vue'
  import LoadingPopupDialog from './loading-popup-dialog'

  export default{
    components: {
      LoadingThreeBounce, LoadingPopupDialog
    },
    props: {
      showLoading: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      showDialog: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      errorCode: {
        type: String
      }
    }
  }
</script>
