<template>
  <div>
    <dl>
      <a href="javascript:;" class="weui_tabbar_item" :class="{'weui_bar_item_on': $parent.index === index}" @click="onItemClick">
        <dt>
          <slot name="icon"></slot>
        </dt>

        <dd>
          <slot name="label"></slot>
        </dd>
      </a>
    </dl>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/multi-items'
import { go } from '../../libs/router'
import Badge from 'vux/dist/components/Badge'

export default {
  components: {
    Badge
  },
  mixins: [childMixin],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  events: {
    'on-item-click': function () {
      go(this.link, this.$router)
    }
  }
}
</script>
