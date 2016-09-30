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
        show: false,
        title: '',
        gridColumns: [{
          name: 'customerId',
          isKey: true
        }, {
          name: 'companyName'
        }, {
          name: 'contactName'
        }, {
          name: 'phone'
        }],
        gridData: [],
        apiUrl: 'http://211.149.193.19:8080/api/customers',
        item: {}
      }
    },
    ready: function () {
      this.getCustomers()
    },
    methods: {
      closeDialog: function () {
        this.show = false
      },
      loadCustomer: function (customerId) {
        var vm = this
        vm.gridData.forEach(function (item) {
          if (item.customerId === customerId) {
            vm.$set('item', item)
            vm.$set('show', true)
            return
          }
        })
      },
      saveCustomer: function () {
        this.item.customerId ? this.updateCustomer() : this.createCustomer()
        this.show = false
      },
      getCustomers: function () {
        var vm = this
        vm.$http.get(vm.apiUrl)
            .then(function (response) {
              vm.$set('gridData', response.data)
            })
      },
      createCustomer: function () {
        var vm = this
        vm.$http.post(vm.apiUrl, vm.item)
            .then(function (response) {
              vm.$set('item', {})
              vm.getCustomers()
            })
        this.show = false
      },
      updateCustomer: function () {
        var vm = this
        vm.$http.put(this.apiUrl + '/' + vm.item.customerId, vm.item)
            .then(function (response) {
              vm.getCustomers()
            })
      },
      deleteCustomer: function (customer) {
        var vm = this
        vm.$http.delete(this.apiUrl + '/' + customer.customerId)
            .then(function (response) {
              vm.getCustomers()
            })
      }
    }
  }
</script>

<style>
  @import '../css/cart.css';
</style>