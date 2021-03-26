<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scrollwrap">
      <div class="ignore-content">
        <slot />
      </div>
      <div class="scroll-content">
        <mu-appbar style="width: 100%" color="teal">
          <div class="header-content-wrap">
            <div class="title">测试标题</div>
          </div>

          <mu-button icon slot="right">
            <mu-icon value="close" size="22"></mu-icon>
          </mu-button>
        </mu-appbar>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { mapState } from 'vuex'
export default {
  name: 'CustomDrawer',
  data() {
    return {
      bs: null
    }
  },
  computed: {
    ...mapState({
      open: state => state.repo.knowledgeDetail?.open || false
    })
  },
  watch: {
    open(val) {
      if (val) {
        this.bs.scrollTo(0, -this.height, 300, undefined)
      }
    }
  },
  mounted() {
    this.height = window.innerHeight
    this.init()
    this.bs.disable()
    // setTimeout(() => {
    //   this.bs.scrollTo(0, -667)
    // }, 2000)
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    init() {
      console.log(this.height)
      this.bs = new BScroll(this.$refs.scrollwrap, {
        scrollY: true,
        probeType: 0,
        specifiedIndexAsContent: 1
        // click: true,
      })
    }
  }
}
</script>

<style scoped lang="less">
.core-container {
  .scroll-wrapper {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    .ignore-content {
      height: 100vh;
      position: relative;
    }
    .scroll-content {
      height: 200vh;
    }
  }
}
</style>
