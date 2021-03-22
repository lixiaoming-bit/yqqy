<template>
  <div class="home">
    <Header />
    <Drawer />
    <router-view />
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
