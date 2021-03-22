<template>
  <div class="scroll-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'List',
  data() {
    return {
      bs: null
    }
  },
  mounted() {
    this.$refs.scroll.style.height = window.innerHeight - 56 + 'px'
    this.init()
  },
  beforeDestroy() {
    this.bs.destroy()
  },

  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true
      })
      this.bs.on('scrollStart', () => {})
      this.bs.on('scroll', ({ y }) => {
        console.log('y: ', y)
      })
      this.bs.on('scrollEnd', pos => {
        console.log('pos: ', pos)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.core-container {
  .scroll-wrapper {
    position: relative;
    overflow: hidden;
    .scroll-item {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      text-align: center;
    }
  }
}
</style>
