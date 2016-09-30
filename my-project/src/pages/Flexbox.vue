<template>
  <div>
    <divider>Horizontal</divider>
    <flexbox :margin-left=0 style="height: 200px; background-color: #fff;" class="vux-1px-tb vux-1px-l vux-1px-r">
      <flexbox-item class="vux-1px-r" style="height:200px;"></flexbox-item>
      <flexbox-item>
        <flexbox orient="vertical" :margin-left=0>
          <flexbox-item class="vux-1px-b"></flexbox-item>
          <flexbox-item style="height: 100px;"><!--height: 100% doesnot work here-->
            <flexbox :margin-left=0>
              <flexbox-item class="vux-1px-r"></flexbox-item>
              <flexbox-item></flexbox-item>
            </flexbox>
          </flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>


    <flexbox>
      <flexbox-item><div class="flex-demo"></div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item><div class="flex-demo">5</div></flexbox-item>
      <flexbox-item><div class="flex-demo">6</div></flexbox-item>
    </flexbox>
    <br>
    <divider>Honrizontal with no gutter</divider>
    <flexbox :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">4</div></flexbox-item>
    </flexbox>
    <br>
    <divider>Vertical</divider>
    <flexbox orient="vertical">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <divider>Vertical with no gutter</divider>
    <flexbox orient="vertical" :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <br>
    <divider>Grid support(12 columns)</divider>
    <flexbox>
      <flexbox-item :span="4"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2/3</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox>
      <flexbox-item :span="6"><div class="flex-demo">6/12</div></flexbox-item>
      <flexbox-item :span="2"><div class="flex-demo">2/12</div></flexbox-item>
      <flexbox-item ><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br>
    <divider>flexiable grid</divider>
    <flexbox>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/6"><div class="flex-demo">1/6</div></flexbox-item>
      <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br>
    <flexbox :gutter="0">
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/6"><div class="flex-demo">1/6</div></flexbox-item>
      <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
      <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
    </flexbox>
    <br>
    <divider>flexiable grid</divider>
    <flexbox :gutter="0">
      <flexbox-item :span="1/3" :order="4"><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item :span="1/6" :order="3"><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item :span="1/8" :order="2"><div class="flex-demo">3</div></flexbox-item>
      <flexbox-item :span="1/8" :order="1"><div class="flex-demo">4</div></flexbox-item>
      <flexbox-item :order="-99"><div class="flex-demo">5</div></flexbox-item>
    </flexbox>
    <br>
    <divider>flex-wrap</divider>
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
    </flexbox>
    
  </div>
</template>

<script>
  import Flexbox from 'vux/dist/components/flexbox'
  import FlexboxItem from 'vux/dist/components/flexbox-item'
  import Divider from 'vux/dist/components/divider'

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      Divider
    }
  }
  </script>

  <style lang="less">
  @import '../styles/1px.less';

  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
