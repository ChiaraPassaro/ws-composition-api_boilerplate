/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-async-promise-executor': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
