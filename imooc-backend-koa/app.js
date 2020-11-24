const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const svgCaptcha = require('svg-captcha')

const app = new Koa()
const router = new Router()

router.get('/captcha', ctx => {
    const { data, text } = svgCaptcha.create({
        noise: Math.floor(Math.random() * 5),
        color: true
    })
    ctx.body = {
        code: 200,
        data
    }
})

app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)