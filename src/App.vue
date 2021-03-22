<template>
  <div id="app">
    <transition name="left-slide" mode="in-out">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition name="left-slide" mode="in-out">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'App',
  created() {
    this.checkCache()
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    ...mapActions(['getUserInfo']),
    checkCache() {
      console.log('this.$ls: ', this.$ls)
      const TOKEN = this.$ls.get('TOKEN')
      if (!TOKEN) {
        this.$router.push({ path: '/login' })
        return
      }
      this.SET_TOKEN(TOKEN)
      this.getUserInfo().then(res => {
        if (res) {
          // this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.left-slide-enter,
.right-slide-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(100%);
}
.left-slide-leave-to,
.right-slide-enter {
  opacity: 0;
  position: absolute;
  transform: translateX(-100%);
}
.left-slide-enter-active,
.left-slide-leave-active,
.right-slide-enter-active,
.right-slide-leave-active {
  transition: opacity linear 0.25s, transform linear 0.4s;
}
</style>
