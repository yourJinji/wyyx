import Vue from 'vue'
import VeeValidate,{Validator}from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号码',
    code: '短信验证码',
    email:'邮箱',
    pwd:'密码',

  }
});
Validator.extend('phone', {
  getMessage: () => `请输入正确的手机号码`,
  validate: (value) => {
    return /[1]\d{10}/.test(value)
  }
});
Validator.extend('code', {
  getMessage: () => `请输入正确的短信验证码`,
  validate: (value) => {
    return /[a-z0-9A-Z]{6}/.test(value)
  }
});
Validator.extend('email', {
  getMessage: () => `请输入正确的邮箱`,
  validate: (value) => {
    return /^[A-Za-z1-9]{3,11}$/.test(value)
  }
});
Validator.extend('pwd', {
  getMessage: () => `请输入正确的密码`,
  validate: (value) => {
    return /[0-9]{3,6}/.test(value)
  }
});

