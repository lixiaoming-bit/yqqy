module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'jsx-v-model',
    [
      'import',
      {
        libraryName: 'muse-ui',
        libraryDirectory: 'lib',
        camel2DashComponentName: false
      }
    ]
  ]
}
