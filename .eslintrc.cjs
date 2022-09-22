module.exports = {
  // 设置我们的运行环境为浏览器 + es2021 + node ,否则eslint在遇到 Promise，window等全局对象时会报错
  env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true,
  },
  // 继承eslint推荐的规则集，vue基本的规则集，typescript的规则集
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended', // 新增，必须放在最后面,
    'prettier', // 避免vue 与 prettier冲突'
  ],
  // 新增，解析vue文件
  parser: 'vue-eslint-parser',
  // 支持ts的最新语法
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  // 添加vue和@typescript-eslint插件，增强eslint的能力
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 解析vue模板错误规则
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false,
        'missing-semicolon-after-character-reference': false,
      },
    ],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ], // 允许使用短路、三目
    'no-param-reassign': ['error', { props: false }], // 函数形参可修改
    'no-new-object': 'off', // 关闭不可以new对象的规则
    'no-explicit-any': 'off', // 可以使用any，但请尽量不使用any
    'vue/v-on-event-hyphenation': 'off', // 关闭事件命名样式需要用连字符
    '@typescript-eslint/no-var-req/uires': 'off', // 可以require
    '@typescript-eslint/no-explicit-any': 'off', // 允许any
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'off', //关闭组件命名规则
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    indent: ['off', 2], // 缩进
  },
  overrides: [
    {
      files: ['**/tests/*.{j,t}s?(x)', '**/tests/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
    },
  ],
};
