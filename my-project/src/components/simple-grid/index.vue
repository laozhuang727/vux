<template>
  <table>
    <thead>
    <tr>
      <th v-for="col in columns">
        {{ col.name | capitalize}}
      </th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(index,entry) in dataList">
      <td v-for="col in columns">
        <span v-if="col.isKey"><a href="javascript:void(0)" @click="loadEntry(entry[col.name])">{{ entry[col.name] }}</a></span>
        <span v-else>{{ entry[col.name] }}</span>
      </td>
      <td>
        <button class="btn-danger" @click="deleteEntry(entry)">delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import {parentMixin} from '../../mixins/multi-items'

  export default {
    mixins: [parentMixin],
    props: {
      dataList: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        twoWay: true
      }
    },
    methods: {
      loadEntry: function (key) {
        this.$dispatch('load-entry', key)
      },
      deleteEntry: function (entry) {
        this.$dispatch('delete-entry', entry)
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/grid/grid-style.less';
  /*@import '../../styles/grid/fonts/demo.less';*/

</style>