<template>
  <div>
    <header>
      <div class="back">
        <a href="#">
          <img src="../assets/images/back.png" alt="">
        </a>
      </div>
      <p>登录</p>
			<span>
				<a href="/html/register.html">注册</a>
			</span>
    </header>
    <!-- 头部 -->
    <div class="login">
      <toast :show.sync="loginSuccess" :time="1000"></toast>
      <alert :show.sync="loginFailed" title="登陆失败" @on-hide="onLoginFailedHide">请确认用户名密码是否正确</alert>
      <div class="user-name">
        <img src="../assets/images/user-name.png" alt="">
        <div class="login-input">
          <input v-model="loginModel.username" placeholder="邮箱/手机/用户名">
        </div>
      </div>
      <div class="password">
        <img src="../assets/images/password.png" alt="">
        <div class="login-input">
          <input type="text" v-model="loginModel.password" placeholder="admin">
        </div>
      </div>
      <div class="img-code">
        <div class="img-code-icon">
          <img src="../assets/images/img-code.png" alt="">
        </div>
        <div class="img-code-input">
          <input type="text" placeholder="图形验证码">
        </div>
        <div class="img-code-img">
          <img src="../assets/images/imgcode.jpg" alt="">
        </div>
        <a href="#">换一张</a>
      </div>
    </div>
    <div class="remember">
      <input type="checkbox">记住账号
      <a href="#">忘记密码？</a>
    </div>
    <div class="login-button">
      <a href="javascript:;" @click="login">
        登录
      </a>
    </div>
    <div class="login-button">
      <a href="javascript:;" @click="callApi">
        测试API
      </a>
    </div>
    <!-- 登录 -->
    <div class="other-way">
      <div class="other-way-title">
        <hr class="hr-left">
        <span>其他方式登录</span>
        <hr class="hr-right">
      </div>
      <div class="other-way-con">
        <div class="way-qq">
          <a href="#">
            <img src="../assets/images/qq.png" alt="">
          </a>
        </div>
        <div class="way-weixin">
          <a href="#">
            <img src="../assets/images/weixin.png" alt="">
          </a>
        </div>
        <div class="way-weibo">
          <a href="#">
            <img src="../assets/images/weibo.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 其他方式登录 -->
  </div>
</template>
<style lang="less" scoped>
  @import '../css/login.css';
  @import '../css/common.css';
</style>
<script>
  export default{
    data () {
      return {
        loginSuccess: false,
        loginFailed: false,
        show: false,
        registerUrl: 'http://127.0.0.1:8080/api/register',
//				loginUrl: 'oauth/token',
        loginUrl: 'http://127.0.0.1:8080/oauth/token',
        logoutUrl: 'http://127.0.0.1:8080/api/logout',
        apiUrl: 'http://127.0.0.1:8080/api/users',
        registerModel: {
          email: '',
          password: '',
          confirmPassword: ''
        },
        loginModel: {
          username: '',
          password: '',
          grant_type: 'password',
          scope: 'read write',
          client_id: 'shopapp',
          client_secret: 'my-secret-token-to-change-in-production'
        },
        msg: '',
        userName: '',
        result: ''
      }
    },

    ready: function () {
      this.userName = sessionStorage.getItem('userName')
    },
    methods: {
      register: function () {
        this.$http.post(this.registerUrl, this.registerModel)
            .then(function (response) {
              this.msg = '注册成功！'
            }, function (response) {
//              响应错误回调
              this.msg = response.json()
            })
      },
      login: function () {
        this.$http.post(this.loginUrl, this.loginModel)
            .then(function (response) {
              var body = response.json()
              console.log(response)
              this.userName = this.loginModel.username
              this.loginSuccess = true
              sessionStorage.setItem('accessToken', body.access_token)
              sessionStorage.setItem('userName', this.loginModel.username)
            }, function (response) {
              sessionStorage.setItem('accessToken', '')
              this.loginFailed = true
            })
      },
      logout: function () {
        debugger
        this.$http.post(this.logoutUrl)
            .then(function (response) {
              this.msg = '注销成功！'
              this.result = ''
              this.userName = ''
              this.loginModel.username = ''
              this.loginModel.password = ''

              sessionStorage.removeItem('userName')
              sessionStorage.removeItem('accessToken')
            }, function (response) {
//              响应错误回调
              this.msg = response.json()
            })
      },
      callApi: function () {
        var headers = {}
        headers.Authorization = 'Bearer ' + sessionStorage.getItem('accessToken')

        this.$http.get(this.apiUrl, {headers: headers})
            .then(function (response) {
              console.log(response)
            }, function (response) {
//              响应错误回调
              this.msg = response.json()
            })
      },
      requestError: function (response) {
        this.msg = response.json()
      },
      onLoginFailedShow () {
        console.log('on show')
      },
      onLoginFailedHide () {
        console.log('on hide')
      }
    },
    components: {
      'nvHead': require('../components/header'),
      'toast': require('vux/dist/components/toast'),
      'alert': require('vux/dist/components/alert')
    }
  }
</script>
