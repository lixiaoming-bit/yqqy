<template>
  <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <slot />
        <mu-icon
          class="scroll-item"
          value="delete"
          style="border-right; 1px solid #f1f2f3"
          @tap="publish('delete')"
        ></mu-icon>
        <mu-icon class="scroll-item" value="edit" @tap="publish('edit')"></mu-icon>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import debounce from 'lodash.debounce'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      bs: null
    }
  },
  props: {
    slideId: {
      type: Number,
      default: 0,
      required: true
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    ...mapState({
      currentScrollSlide: state => state.app.currentScrollSlide
    })
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    ...mapMutations(['SET_SCROLL_ACTION']),
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        bounce: {
          left: false,
          right: true
        },
        probeType: 1 // listening scroll event
      })
      this.bs.on('beforeScrollStart', () => this._debouceHandler())
    },
    _debouceHandler: debounce(function() {
      const {bs,slideId} = this.currentScrollSlide
      if(slideId !== this.slideId) {

        if(bs) bs.scrollTo(0)

        const currentScrollSlide = {
          bs: this.bs,
          slideId: this.slideId
        }
        this.SET_SCROLL_ACTION(currentScrollSlide)
      }
    }, 100),
    publish (text) {
      this.$emit('action', text)
    }
  }
}
</script>

<style lang="less" scoped>
.mu-modal-inner {
  display: inline-block;
  vertical-align: super;
}
.horizontal-container {
  .scroll-wrapper {
    width: 100vw;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    .scroll-content {
      display: inline-block;
      border-bottom: 1px solid #d8d8d8;
    }
    .scroll-item {
      display: inline-block;
      text-align: center;
      width: 80px;
      color: #fff;
      line-height: 72px;
      font-size: 25px;
      background-color: #009688;
    }
  }
}
</style>
