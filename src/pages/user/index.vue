<template>
  <view class="user">
      <view class="login">
        <nut-form>
          <nut-form-item label="用户名">
            <nut-input placeholder="请输入用户名"/>
          </nut-form-item>
          <nut-form-item label="密码">
            <nut-input placeholder="请输入密码" type="password"/>
          </nut-form-item>
        </nut-form>
      </view>
    <div id="login">
      <nut-button  style="width: 80%" @click="detailOnClick" type="primary">登录</nut-button>
    </div>
  </view>
</template>

<script setup lang="ts">
import './index.less'
import { useRouter } from "vue-router";

const router = useRouter()

function detailOnClick () {
  router.push('/detail')
}

</script>
