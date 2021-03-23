<template>
  <list>
    <mu-list textline="two-line">
      <div v-for="(item, index) in repoList" :key="index">
        <horizontal-slide :slideId="item.id">
          <mu-list-item class="list-item" avatar :ripple="false" button>
            <mu-list-item-action>
              <mu-avatar>
                <mu-icon v-if="item.type === 'Book'" value="folder"></mu-icon>
                <mu-icon
                  style="display: contents"
                  v-if="item.type === 'Resource'"
                  value=":iconfont icon-Assets"
                  size="20"
                ></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{ item.name }}</mu-list-item-title>
              <mu-list-item-sub-title v-if="item.name !== item.description">
                {{ item.description }}
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-list-item-after-text>
                {{ item.updated_at | formatDate }}
              </mu-list-item-after-text>
              <mu-icon v-if="item.public === 0" value="lock" size="15" color="#bbb"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </horizontal-slide>
      </div>
    </mu-list>
  </list>
</template>

<script>
import { List, HorizontalSlide } from '@/components'

import dayjs from '@/utils/dayjs'
import { mapActions, mapState } from 'vuex'

export default {
  name: '',
  filters: {
    formatDate(date) {
      return dayjs(date).format('MM/DD HH:mm')
    }
  },
  components: {
    List,
    HorizontalSlide
  },
  props: {},
  data() {
    return {
      selects: []
    }
  },
  computed: {
    ...mapState({
      repoList: state => state.repo.repoList
    })
  },
  watch: {},
  mounted() {},
  created() {
    this.getRepoList()
  },
  methods: {
    ...mapActions(['getRepoList'])
  }
}
</script>

<style scoped lang="less">
.list-item {
  width: 100vw;
  display: inline-block;
}
.mu-item-after-text {
  white-space: nowrap;
}
</style>
