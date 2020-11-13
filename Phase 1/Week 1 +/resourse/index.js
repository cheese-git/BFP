const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router

router.get('/', async ctx => {
    ctx.body = "hello"
})

router.get('/api', async ctx => {
    ctx.body = 'api'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)