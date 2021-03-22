<template>
  <mu-appbar style="width: 100%" color="teal">
    <mu-button icon slot="left" @click="handleToggle">
      <mu-icon value="menu" size="22"></mu-icon>
    </mu-button>
    <div class="header-content-wrap" ref="btn" @click="open = !open">
      <div class="title">轻语</div>
      <div class="triangle"></div>
    </div>
    <mu-popover cover :open.sync="open" :trigger="trigger" v-elevation="1">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Refresh</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Send feedback</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Settings</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Help</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Sign out</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-popover>
    <mu-button icon slot="right">
      <mu-icon value="search" size="22"></mu-icon>
    </mu-button>
  </mu-appbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Header',
  filters: {},
  components: {},
  props: {},
  data() {
    return {
      open: false,
      trigger: null
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer
    })
  },
  watch: {},
  mounted() {
    this.trigger = this.$refs.btn
  },
  created() {},
  methods: {
    ...mapMutations(['TOGGLE_DRAWER']),
    handleToggle() {
      this.TOGGLE_DRAWER(!this.drawer)
    }
  }
}
</script>

<style scoped lang="less">
.header-content-wrap {
  position: relative;
  line-height: 50px;
  width: 80px;
  .title {
    font-size: 16px;
  }
  .triangle {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 0px;
    width: 0px;
    border-radius: 4px;
    border-top: 5px solid transparent;
    border-left: 5px solid #fff;
    border-bottom: 5px solid transparent;
    transform: rotate(45deg);
  }
}
</style>
