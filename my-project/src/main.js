import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import Demo from './pages/Demo'
import Search from './pages/Search'
import SimpleGridDemo from './pages/SimpleGridDemo'
import Flexbox from './pages/Flexbox'
import ShoppingCart from './pages/ShoppingCart'
import Classify from './pages/Classify'
import UserCernter from './pages/UserCernter'
import Login from './pages/Login'
import ProductList from './pages/ProductList'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.use(VueResource)
Vue.config.devtools = true
// 全局启用 OPTIONS预请求
Vue.http.options.emulateJSON = true
Vue.http.options.root = 'http://120.24.239.135:8080'

const router = new Router({
  transitionOnLoad: false
})

/**
 * sync router params
 */
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
 * sync router loading status
 */
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

sync(store, router)

router.map({
  '/': {
    component: function (resolve) {
      require(['./pages/IndexPage'], resolve)
    }
  },
  '/demo': {
    component: Demo
  },
  '/shoppingCart': {
    component: ShoppingCart
  },
  '/classify': {
    component: Classify
  },
  '/userCernter': {
    component: UserCernter
  },
  '/component/flexbox': {
    component: Flexbox
  },
  '/component/search': {
    component: Search
  },
  '/component/simpleGridDemo': {
    component: SimpleGridDemo
  },
  '/productList': {
    component: ProductList
  },
  '/login': {
    component: Login
  }
})

// router.on('/component/center', {
//   component: require('./demos/Center')
// })

// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(transition.to.path)) {
      router.go({
        replace: true,
        path: transition.to.path.replace('/demo', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }
})

router.afterEach(function (transition) {
  if (transition.to.path !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(transition.from.path)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})

router.start(App, '#app')
