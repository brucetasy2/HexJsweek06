// REF :   https://eslint.vuejs.org/
//        https://blog.csdn.net/CHS007chs/article/details/95486063
//        https://juejin.im/post/5d1c249ff265da1b5e730e99
//        https://www.itread01.com/content/1546132525.html
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,    // 强制执行一致的换行样式，windows(crlf) 和mac(lf)  0 = off, 1 = warn, 2 = error 
    'import/extensions': 'off', // 取消對副檔名的驗證
  },
};