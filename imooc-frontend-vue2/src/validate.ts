import { localize, extend } from "vee-validate"
import { required, email, max, min, length } from "vee-validate/dist/rules"
import zh_CN from 'vee-validate/dist/locale/zh_CN.json'

localize({
    zh_CN
})
localize('zh_CN')

// rules
extend('required', { ...required, message: "请输入{_field_}" })
extend('email', { ...email, message: "请输入正确的邮箱格式" })
extend('max', max)
extend('min', {
    ...min,
    message: "不符合最小长度要求"
})
extend('length', { ...length, message: "{_field_}长度要求{length}" })

