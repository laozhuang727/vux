<template>
  <div>
    <search @result-click="resultClick" @on-change="getResult" :results="results" :value.sync="value" top="46px"></search>
  </div>
</template>

<script>
import Group from 'vux/dist/components/group'
import Search from 'vux/dist/components/search'
import Cell from 'vux/dist/components/cell'

export default {
  components: {
    Search,
    Group,
    Cell
  },
  methods: {
    resultClick (item) {
      alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    }
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
