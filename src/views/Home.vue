<template>
  <div class="home">
    <Header />
    <!-- <div class="view-wrap" :style="contentHeight"></div> -->
    <router-view />
    <Drawer />
    <!-- fab button -->
    <mu-button fab color="teal" class="fab-btn">
      <mu-icon value="add"></mu-icon>
    </mu-button>
  </div>
</template>

<script>
import { Header, Drawer } from '@/components'

import { getUserInfo } from '@/api/user'

export default {
  name: 'Home',
  components: {
    Header,
    Drawer
  },
  created() {
    // 获取用户信息
    this._getUserInfo()
  },
  computed: {
    // contentHeight() {
    //   const maxHeight = window.innerHeight - 56 + 'px'
    //   return { maxHeight, height: maxHeight, overflow: 'hidden' }
    // }
  },
  methods: {
    async _getUserInfo() {
      try {
        const res = await getUserInfo()
        console.log(res)
      } catch (err) {
        console.log('err: ', err)
      }
    }
  }
}
</script>
<style scoped lang="less">
.fab-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
