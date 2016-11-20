
// 设置成是模块化 js, 编译后会被 define 包裹。
fis.match('node_modules/**.{js,es6,jsx}', {
  isMod: true
});

fis.match('/src/**.{js,jsx,es6,vue}', {
  isMod: true
});

// vue组件本身配置
fis.match('src/vue/**.vue', {
  isMod: true,
  rExt: 'js',
  useSameNameRequire: true,
  parser: fis.plugin('vue-component', {
    cssScopeFlag: 'vuec'
  })
});
 
// vue组件中产出的css处理。
fis.match('src/(vue/**.css)', {
  release: 'css/$1'
});
 
// vue组件中的less片段处理
fis.match('src/vue/**.vue:less', {
  rExt: 'css',
  parser: fis.plugin('less-2.x'),
  release: 'css/$1' // 这个无效
});

// 注意：因为组件中的样式片段编译只是编译内容，所以上面的release配置是无效的。要配置其release，需要针对生成的css文件：
fis.match('src/vue/(**.css)', {
  release: '/vue-style/$1'
});

// vue组件中js片段处理。
fis.match('src/**.vue:js', {
  parser: [
     fis.plugin( 'es6' )
  ]
})

fis.hook('commonjs', {
  baseUrl: './',
  paths: {
    vue: '/node_modules/vue/dist/vue.js'
  },
  extList: [
    '.js',  '.vue', '.coffee', '.es6', '.jsx'
  ]
});

fis.unhook('components');

fis.hook('node_modules');

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    useInlineMap: true //是否将sourcemap作为内嵌脚本输出
  })
});