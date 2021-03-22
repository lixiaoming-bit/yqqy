<template>
  <list>
    <mu-list textline="two-line">
      <mu-list-item avatar :ripple="false" button v-for="(item, index) in 100" :key="index">
        <mu-list-item-content>
          <mu-list-item-title>Ali Connors</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, 0.87)">
            Brunch this weekend?
          </mu-list-item-sub-title>
          <mu-list-item-sub-title>
            I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
          </mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </list>
</template>

<script>
import { List } from '@/components'
export default {
  name: '',
  filters: {},
  components: {
    List
  },
  props: {},
  data() {
    return {
      selects: []
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
