<template>
  <mu-drawer :open="drawer" :docked="false" left @close="handleClickOutside">
    <!-- 头像部分 -->
    <div class="avatar-wrapper">
      <div>
        <img
          class="avatar"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-b5da6c1b2a3fb6799e19e181fd6e77ab_hd.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618908397&t=4ba806c4a04f5a3782d6fc424643e582"
        />
        <mu-icon class="vip" value=":iconfont icon-vip" size="24" color="#e98f36"></mu-icon>
      </div>
      <div class="user-name">李晓明</div>
      <div class="user-slogan">这个人很懒什么也没有留下...</div>
    </div>
    <mu-list>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon
            class="icon-drawer"
            value=":iconfont icon-zcpt-zhishikuguanli"
            size="24"
          ></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的知识库</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-guanzhu" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的关注</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-ziyuan" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的粉丝</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-tuandui" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的团队</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-shoucang" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的收藏</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-taolun" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的讨论</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-theme" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>主题风格</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-yewanduoyun" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>暗夜主题</mu-list-item-title>
        <mu-list-item-action>
          <mu-switch></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon class="icon-drawer" value=":iconfont icon-login-out" size="24"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>退出</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Drawer',
  filters: {},
  components: {},
  props: {},
  data() {
    return {
      open: this.drawer
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer
    })
  },
  watch: {
    open(val) {
      console.log('val: ', val)
      this.TOGGLE_DRAWER(val)
    }
  },
  mounted() {},
  created() {},
  methods: {
    ...mapMutations(['TOGGLE_DRAWER']),
    handleClickOutside() {
      this.TOGGLE_DRAWER(!this.drawer)
    },
    handleClose(value) {
      console.log('value: ', value)
    }
  }
}
</script>

<style scoped lang="less">
.icon-drawer {
  display: contents;
}
.avatar-wrapper {
  height: 180px;
  padding: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  .avatar {
    height: 60px;
    width: 60px;
    border-radius: 4px;
  }
  .vip {
    vertical-align: top;
    padding-left: 10px;
  }
  .user-name {
    margin-top: 15px;
    font-size: 15px;
    color: #666;
  }
  .user-slogan {
    margin-top: 8px;
    color: #999;
    font-size: 13px;
  }
}
</style>
