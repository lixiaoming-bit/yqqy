<template>
  <custom-drawer>
    <div class="home">
      <Header />
      <!-- <div class="view-wrap" :style="contentHeight"></div> -->
      <router-view />
      <Drawer />
    </div>
  </custom-drawer>
</template>

<script>
import { Header, Drawer, CustomDrawer } from '@/components'

import { getUserInfo } from '@/api/user'
import { mapMutations } from 'vuex'

import BScroll from '@better-scroll/core'
import Movable from '@better-scroll/movable'

BScroll.use(Movable)

export default {
  name: 'Home',
  components: {
    Header,
    Drawer,
    CustomDrawer
  },
  created() {
    // 获取用户信息
    this._getUserInfo()
  },
  methods: {
    ...mapMutations(['SET_ACTION']),
    handleAdd() {
      const data = { current: 'knowledgeList', action: 'add' }
      this.SET_ACTION(data)
    },
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
.home {
  height: 100vh;
}
.fab-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
