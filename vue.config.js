const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        // 默认Vue已经帮我们配置好'@':'src'了
        'assets':'@assets',
        'common':'@common',
        'components':'@components',
        'network':'@network',
        'views':'@views'
      }
    }
  }
})
