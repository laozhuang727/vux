<template>
  <table>
    <thead>
    <tr>
      <th v-for="col in columns">
        {{ col | capitalize}}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(index,entry) in dataList">
      <td v-for="col in columns">
        {{entry[col]}}
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

