<template>
  <mu-appbar style="width: 100%" color="teal">
    <mu-button icon slot="left" @click="handleToggle">
      <mu-icon value="menu" size="22"></mu-icon>
    </mu-button>
    <div class="header-content-wrap" ref="btn" @click="open = !open">
      <div class="title">{{ knowledgeDefaltLabel }}</div>
      <div class="triangle"></div>
    </div>
    <mu-popover cover :open.sync="open" :trigger="trigger" v-elevation="1">
      <!-- v-click-outside="handlePopoverOutside" -->
      <mu-list>
        <mu-list-item
          button
          v-for="item in typeList"
          :key="item.id"
          style="width: 130px"
          @click="handleTypeChange(item)"
        >
          <mu-icon :value="DOCUMENT_TYPE_ICON[item.key]" style="margin-right: 15px"></mu-icon>
          <mu-list-item-title>{{ item.label }}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-popover>
    <mu-button icon slot="right">
      <mu-icon value="refresh" size="22" @click="handleRefresh"></mu-icon>
    </mu-button>
    <mu-button icon slot="right">
      <mu-icon value="search" size="22"></mu-icon>
    </mu-button>
  </mu-appbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import { DOCUMENT_TYPE, DOCUMENT_TYPE_ICON } from '@/config'
export default {
  name: 'Header',
  filters: {},
  components: {},
  props: {},
  data() {
    return {
      DOCUMENT_TYPE_ICON,
      open: false,
      trigger: null
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer,
      knowledgeDefaltLabel: state => state.app.globalConfig?.knowledgeDefaltType?.label || '所有'
    }),
    typeList() {
      return [{ id: 1234, label: '所有', value: 'all', key: 'all' }, ...DOCUMENT_TYPE]
    }
  },
  watch: {},
  mounted() {
    this.trigger = this.$refs.btn
  },
  created() {},
  methods: {
    ...mapMutations(['TOGGLE_DRAWER', 'REFRESH', 'SET_GLOBAL_CONFIG']),
    handleToggle() {
      this.TOGGLE_DRAWER(!this.drawer)
    },
    handleRefresh() {
      this.REFRESH(true)
    },
    handleTypeChange({ value, label }) {
      this.SET_GLOBAL_CONFIG({
        knowledgeDefaltType: { value, label }
      })
      this.open = false
    },
    handlePopoverOutside() {
      this.open = false
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
