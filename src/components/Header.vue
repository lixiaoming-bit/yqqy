<template>
  <mu-appbar style="width: 100%" color="teal">
    <mu-button icon slot="left" @click="handleToggle">
      <mu-icon value="menu" size="22"></mu-icon>
    </mu-button>
    <span class="title">轻语</span>
    <!-- <mu-menu cover>
      <mu-list slot="content">
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
    </mu-menu> -->
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
    return {}
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer
    })
  },
  watch: {},
  mounted() {},
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
.title {
  font-size: 16px;
}
</style>
