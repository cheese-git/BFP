const Koa = require('koa')
const Router = require('koa-router')
const svgCaptcha = require('svg-captcha')

const app = new Koa()
const router = new Router()

router.get('/captcha', ctx => {
    const { data, text } = svgCaptcha.create()
    ctx.body = {
        code: 200,
        data
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)