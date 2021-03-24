<template>
  <mu-form :model="form" class="mu-demo-form" label-position="top" label-width="100" ref="form">
    <mu-form-item prop="repoName" label="名称" :rules="repoName">
      <mu-text-field v-model="form.repoName"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="repoDescription" label="描述信息" :rules="repoDescription">
      <mu-text-field
        multi-line
        :rows="2"
        :rows-max="4"
        v-model="form.repoDescription"
      ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="slug" label="slug" :rules="slug">
      <mu-text-field v-model="form.slug"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="repoType" label="类型" :rules="repoType">
      <mu-select v-model="form.repoType">
        <mu-option
          v-for="item in repoTypeList"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        ></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item prop="publicPermissions" label="权限" :rules="publicPermissions">
      <mu-select v-model="form.publicPermissions">
        <mu-option
          v-for="item in options"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        ></mu-option>
      </mu-select>
    </mu-form-item>
  </mu-form>
</template>

<script>
import { randomString } from '@/utils/custom'

import { DOCUMENT_TYPE, RIGHTS_PROFILE } from '@/config'
export default {
  name: '',
  filters: {},
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      repoName: [
        { validate: val => !!val, message: '请输入库名称' },
        { validate: val => val.length <= 20, message: '库名长度小于20' }
      ],
      slug: [
        { validate: val => !!val, message: '请输入slug' },
        { validate: val => val.length <= 20, message: 'slug长度小于20' },
        { validate: val => /^[A-Za-z0-9]+$/.test(val), message: 'slug为中文英文的混合，更利于推广' }
      ],
      repoDescription: [{ validate: val => val.length <= 120, message: '库名长度小于120' }],
      repoType: [{ validate: val => val !== '' || val !== undefined, message: '请选择类型' }],
      publicPermissions: [
        { validate: val => val !== '' || val !== undefined, message: '请选择权限' }
      ],
      form: {
        repoName: '',
        slug: randomString(6),
        repoType: 'Book',
        repoDescription: '',
        publicPermissions: 0
      },
      options: RIGHTS_PROFILE.slice(),
      repoTypeList: DOCUMENT_TYPE.slice()
    }
  },
  methods: {
    validate() {
      return new Promise(resolve => {
        this.$refs.form.validate().then(valid => resolve({ valid, form: this.form }))
      })
    }
  }
}
</script>

<style scoped lang="less"></style>
