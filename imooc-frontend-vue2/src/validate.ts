import { localize, extend } from "vee-validate"
import { required, email, max, min, length } from "vee-validate/dist/rules"
import zh_CN from 'vee-validate/dist/locale/zh_CN.json'

localize({
    zh_CN
})
localize('zh_CN')

// rules
extend('required', required)
extend('email', email)
extend('max', max)
extend('min', min)
extend('length', length)

