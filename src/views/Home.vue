<template>
  <div class="home">
    <Header />
    <div class="view-wrap" :style="contentHeight">
      <router-view />
    </div>
    <Drawer />
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
    contentHeight() {
      const maxHeight = window.innerHeight - 56 + 'px'
      return { maxHeight, height: maxHeight, overflow: 'hidden' }
    }
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
