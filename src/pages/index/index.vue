<template>
  <view class="index">
    <p class="p-2">hello</p>
    <nut-button  type="primary" @click="loginOnClick">点我登录</nut-button>
  </view>
</template>

<script setup lang="ts">
import './index.less'
import Taro from "@tarojs/taro";
import { useRouter } from "vue-router";

const router = useRouter()
function loginOnClick () {
  Taro.navigateTo({url: '/pages/login/index'})
}

</script>
