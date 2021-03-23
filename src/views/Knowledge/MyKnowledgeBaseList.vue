<template>
  <list>
    <mu-list textline="two-line">
      <div v-for="(item, index) in repoList" :key="index">
        <horizontal-slide :slideId="item.id" @action="v => handleAction(v, item)">
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
      form: {
        repoName: '',
        repoDescription: '',
        public: 0
      },
      options: [
        { id: 0, key: 0, value: 0, label: '私密' },
        { id: 1, key: 1, value: 1, label: '所有人可见' },
        { id: 2, key: 2, value: 2, label: '空间成员可见' },
        { id: 3, key: 3, value: 3, label: '空间所有人（含外部联系人）可见' },
        { id: 4, key: 4, value: 4, label: '知识库成员可见' }
      ],
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
    ...mapActions(['getRepoList', 'deleteRepo', 'editRepo']),
    handleAction(text, { name }) {
      // id
      if (text === 'delete') {
        this.$confirm(`确定要删除${name}？`, '提示', {
          type: 'warning'
        }).then(({ result }) => {
          if (result) {
            // this.deleteRepo(id)
          }
        })
      }
      if (text === 'edit') {
        const VNode = (
          <mu-form model={this.form} class="mu-demo-form" label-position="top" label-width="100">
            <mu-form-item prop="repoName" label="仓库名称">
              <mu-text-field value={this.form.repoName}></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="repoDescription" label="描述信息">
              <mu-text-field
                multi-line
                rows={3}
                rows-max={6}
                value={this.form.textarea}
              ></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="select" label="私密性">
              <mu-select s={this.form.public}>
                {this.options.map(item => {
                  return <mu-option key={item.id} label={item.label} value={item.value}></mu-option>
                })}
              </mu-select>
            </mu-form-item>
          </mu-form>
        )
        this.$alert(VNode, '提示', {}).then(({ result, value }) => {
          console.log('value: ', value)
          if (result) {
            console.log('result: ', result)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.mu-list {
  padding-bottom: 0;
  padding-top: 8px;
}
.list-item {
  width: 100vw;
  display: inline-block;
}
.mu-item-after-text {
  white-space: nowrap;
}
</style>
