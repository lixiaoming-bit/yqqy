<template>
  <list>
    <mu-list textline="two-line">
      <div v-for="(item, index) in processedRepoList" :key="index">
        <div @tap="handleCheckDetail(item)">
          <horizontal-slide :slideId="item.id" @action="v => handleAction(v, item)">
            <mu-list-item class="list-item" avatar :ripple="false" button>
              <mu-list-item-action>
                <mu-avatar>
                  <mu-icon :value="DOCUMENT_TYPE_ICON[item.type]"></mu-icon>
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
                <div>
                  <span v-if="item.public === 0">
                    <mu-icon
                      value="lock"
                      size="15"
                      color="#bbb"
                      style="vertical-align: middle"
                    ></mu-icon>
                  </span>
                  <span class="description-wrap" v-if="item.items_count !== 0">
                    <mu-icon
                      value="description"
                      size="15"
                      color="#bbb"
                      style="vertical-align: middle"
                    ></mu-icon>
                    <span class="description">
                      {{ item.items_count }}
                    </span>
                  </span>
                  <span class="description-wrap" v-if="item.watches_count !== 0">
                    <mu-icon
                      value="remove_red_eye"
                      size="16"
                      color="#bbb"
                      style="vertical-align: middle"
                    ></mu-icon>
                    <span class="description">
                      {{ item.watches_count }}
                    </span>
                  </span>
                </div>
              </mu-list-item-action>
            </mu-list-item>
          </horizontal-slide>
        </div>
      </div>
    </mu-list>
    <mu-drawer placement="top"></mu-drawer>
  </list>
</template>

<script>
import dayjs from '@/utils/dayjs'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import { List, HorizontalSlide } from '@/components'

import { DOCUMENT_TYPE_ICON } from '@/config'

import EditModal from './EditModal'
import AddModal from './AddModal'

export default {
  name: '',
  filters: {
    formatDate(date) {
      return dayjs(date).format('MM/DD HH:mm')
    }
  },
  components: {
    List,
    // eslint-disable-next-line vue/no-unused-components
    EditModal,
    // eslint-disable-next-line vue/no-unused-components
    AddModal,
    HorizontalSlide
  },
  props: {},
  data() {
    return {
      DOCUMENT_TYPE_ICON,
      selects: []
    }
  },
  computed: {
    ...mapGetters(['processedRepoList']),
    ...mapState({
      action: state => state.app.action,
      id: state => state.app.userInfo.id
    })
  },
  watch: {
    action: {
      handler: function (val) {
        if (val.current === 'knowledgeList' && val.action === 'add') {
          this._handleAdd()
        }
      }
    }
  },
  mounted() {},
  created() {
    this.getRepoList()
  },
  methods: {
    ...mapMutations(['SET_ACTION']),
    ...mapActions(['getRepoList', 'deleteRepo', 'editRepo', 'addRepo', 'editRepo']),
    handleAction(text, item) {
      const { name, description, id } = item
      const _public = item.public
      // id
      if (text === 'delete') {
        this.$confirm(`确定要删除${name}？`, '编辑', {
          type: 'warning'
        }).then(({ result }) => {
          if (result) {
            this.deleteRepo(id)
          }
        })
      }
      if (text === 'edit') {
        const data = { repoName: name, repoDescription: description, publicPermissions: _public }
        this.$confirm(() => <EditModal ref="editModal" defaultVal={data} />, '提示', {
          beforeClose: (result, instance, done) =>
            this._handleBeforeClose(id, result, instance, done)
        })
      }
    },
    handleCheckDetail({ id, type }) {
      console.log('123')
      this.$router.push({ name: 'MyKnowledgeDetail', params: { id, type } })
    },
    _handleBeforeClose(id, result, instance) {
      if (result) {
        // 校验
        this.$refs.editModal.validate().then(({ valid, form }) => {
          if (valid) {
            const { repoName, repoDescription, publicPermissions } = form
            const data = {
              name: repoName,
              description: repoDescription,
              public: publicPermissions
            }
            this.editRepo({ id, data })
            instance.close(result)
          }
        })
      } else {
        instance.close(result)
      }
    },
    _handleAdd() {
      this.$confirm(() => <AddModal ref="addModal" />, '新增', {
        beforeClose: this._handleAddBeforeClose
      })
    },
    _handleAddBeforeClose(result, instance) {
      if (result) {
        // 校验
        this.$refs.addModal.validate().then(({ valid, form }) => {
          console.log('valid: ', valid)
          console.log('valid: ', form)
          const { repoName, repoType, slug, repoDescription, publicPermissions } = form
          const data = {
            name: repoName,
            type: repoType,
            slug,
            description: repoDescription,
            public: publicPermissions
          }
          if (valid) {
            this.addRepo({ data, id: this.id })
            instance.close(result)
            this.SET_ACTION({})
          }
        })
      } else {
        instance.close(result)
        this.SET_ACTION({})
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
.description-wrap {
  margin-left: 12px;
  .description {
    font-size: 10px;
    color: #aaa;
    vertical-align: middle;
  }
}
</style>
