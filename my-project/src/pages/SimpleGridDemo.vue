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

    <simple-grid-dialog v-bind:show.sync="show">
      <header class="dialog-header" slot="header">
        <h1 class="dialog-title">{{ item.customerId ? 'Edit Customer - ' + item.contactName : 'Create New Customer'
          }}</h1>
      </header>

      <div class="dialog-body" slot="body">
        <div v-show="item.customerId" class="form-group">
          <label>Customer Id</label>
          <input type="text" v-model="item.customerId" disabled="disabled"/>
        </div>
        <div class="form-group">
          <label>Company Name</label>
          <input type="text" v-model="item.companyName"/>
        </div>

        <div class="form-group">
          <label>Contact Name</label>
          <input type="text" v-model="item.contactName"/>
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" v-model="item.phone"/>
        </div>
        <div class="form-group">
          <label></label>
          <button @click="saveCustomer">Save</button>
        </div>
      </div>
    </simple-grid-dialog>


    <!--<div id="help">-->
      <!--<loading v-show="showLoading"></loading>-->
      <!--<modal-dialog :show="showDialog">-->
        <!--<header class="dialog-header" slot="header">-->
          <!--<h1 class="dialog-title">Server Error</h1>-->
        <!--</header>-->
        <!--<div class="dialog-body" slot="body">-->
          <!--<p class="error">Oops,server has got some errors, error code: {{errorCode}}.</p>-->
        <!--</div>-->
      <!--</modal-dialog>-->
    <!--</div>-->

    <!--<simple-grid-dialog-loading></simple-grid-dialog-loading>-->
  </div>
</template>

<script>
  import {
      SimpleGrid,
      SimpleGridDialog,
      SimpleGridlDialogLoading
  } from '../components/simple-grid'

  export default {
    components: {
      SimpleGrid,
      SimpleGridDialog,
      SimpleGridlDialogLoading
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

<!--<style>-->
<!--@import '../css/cart.css';-->
<!--</style>-->