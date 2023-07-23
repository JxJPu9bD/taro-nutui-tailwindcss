<template>
  <view class="detail">
    <p style="font-size: 12px">this is user detail view</p>
    <nut-button @click="args => router.back()">退出登录</nut-button>
  </view>
</template>

<script setup lang="ts">
import './index.less'
import Counter from '../../components/Counter.vue'
import { useRouter } from "vue-router";
const router = useRouter()

</script>
