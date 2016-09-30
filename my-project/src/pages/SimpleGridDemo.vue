<template>
  <div>
    <div class="container">
      <simple-grid :data-list="gridData" :columns="gridColumns" v-on:load-entry="loadCustomer"
                   v-on:delete-entry="deleteCustomer">
      </simple-grid>
    </div>

    <div class="container">
      <div class="form-group">
        <button @click="this.show = true">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
  import SimpleGrid from '../components/simple-grid'

  export default {
    components: {
      SimpleGrid
    },
    data () {
      return {
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers'
      }
    },
    ready: function () {
      this.getCustomers()
    },
    methods: {
      getCustomers: function () {
        this.$http.get(this.apiUrl).then(function (response) {
          this.$set('gridData', response.data)
        }).catch(function (response) {
          console.log(response)
        })
      }
    }
  }
</script>

<style>
  @import '../css/cart.css';
</style>