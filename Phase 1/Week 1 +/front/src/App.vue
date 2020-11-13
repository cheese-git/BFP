<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">手机/邮箱</label>
          <div class="layui-input-block">
            <input type="text" class="layui-input" />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" class="layui-input" />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input type="text" class="layui-input" />
          </div>
        </div>
        <button type="button" class="layui-btn">立即登录</button>
        <a href="http://www.layui.com" class="reset-pwd">找回密码</a>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  background-color: #f2f2f2;
}

.layui-container {
  background-color: #fff;
}

input {
  width: 190px;
}

.reset-pwd {
  margin-left: 10px;
}
</style>
