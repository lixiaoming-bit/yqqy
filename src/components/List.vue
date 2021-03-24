<template>
  <div class="pulldown-container" v-click-outside="handleClickOutSide">
    <div class="pulldown-wrapper" ref="scroll">
      <div class="pulldown-scroller">
        <div class="pulldown-inner">
          <div v-show="beforePullDown">下拉刷新</div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>正在加载</span>
            </div>
            <div v-show="!isPullingDown">
              <span>刷新成功</span>
            </div>
          </div>
        </div>
        <div class="scroll-content">
          <slot />
        </div>
        <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt">下拉加载更多</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">正在加载</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'
import NestedScroll from '@better-scroll/nested-scroll'

BScroll.use(Pullup)
BScroll.use(PullDown)
BScroll.use(NestedScroll)

import { mapActions, mapMutations, mapState } from 'vuex'

const TIME_BOUNCE = 800
const THRESHOLD = 70
const STOP = 56

export default {
  name: 'List',
  data() {
    return {
      bs: null,
      isPullUpLoad: false,
      beforePullDown: true,
      isPullingDown: false
    }
  },
  mounted() {
    // this.$refs.scroll.style.height = window.innerHeight - 56 + 'px'
    this.init()
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  computed: {
    ...mapState({
      _bs: state => state.app.currentScrollSlide.bs
    })
  },
  methods: {
    ...mapMutations(['SET_SCROLL_ACTION']),
    ...mapActions(['getRepoList', 'deleteRepo', 'editRepo']),
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        nestedScroll: true,
        probeType: 0,
        useTransition: false,
        tap: 'tap',
        pullDownRefresh: {
          bounceTime: TIME_BOUNCE,
          threshold: THRESHOLD,
          stop: STOP
        },
        pullUpLoad: true
      })
      this.bs.on('pullingDown', this._pullingDownHandler)
      this.bs.on('pullingUp', this._pullingUpHandler)
    },
    handleClickOutSide() {
      if (this._bs) this._bs.scrollTo(0)
      this.SET_SCROLL_ACTION({ slideId: 0, bs: null })
    },
    async _pullingDownHandler() {
      this.beforePullDown = false
      this.isPullingDown = true
      // await this.getRepoList()
      setTimeout(() => {
        this._finishPullDown()
        this.isPullingDown = false
      }, 300)
    },
    _finishPullDown() {
      this.bs.finishPullDown()
      setTimeout(() => {
        this.beforePullDown = true
        this.bs.refresh()
      }, TIME_BOUNCE + 100)
    },
    async _pullingUpHandler() {
      this.isPullUpLoad = true
      // await this.getRepoList()
      setTimeout(() => {
        this.bs.finishPullUp()
        this.bs.refresh()
        this.isPullUpLoad = false
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
.pulldown-container {
  .pulldown-wrapper {
    position: relative;
    height: calc(100vh - 56px);
    position: relative;
    overflow: hidden;
    .pulldown-inner {
      background: #f5f6f7;
      color: #666;
      z-index: 1;
      position: absolute;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      transform: translateY(-100%) translateZ(0);
      text-align: center;
    }
    .pullup-tips {
      background: #f5f6f7;
      padding: 20px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
