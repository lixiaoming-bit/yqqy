<template>
  <div></div>
</template>

<script>
import { repoDetail } from '@/api/repo'
import { yaml2Json } from '@/utils/custom'
export default {
  name: 'MyKnowledgeDetail',
  filters: {},
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    if (!this.$route.params.id) {
      this.$router.push({ path: '/my-knowledge-base-list' })
      return
    }
    this._getRepoDetail()
  },
  methods: {
    async _getRepoDetail() {
      try {
        const { id, type } = this.$route.params
        const data = { id, type }
        const res = await repoDetail(data)
        console.log('res: ', res)
        yaml2Json(res.data.toc_yml)
      } catch (err) {
        console.log('err: ', err)
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
