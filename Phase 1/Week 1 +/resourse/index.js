const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router

router.prefix('/api')

router.get('/', async ctx => {
    ctx.body = "hello"
})

router.get('/api', async ctx => {
    const { query } = ctx.request
    ctx.body = query
})

router.get('/async', async ctx => {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello')
        }, 2000)
    })

    ctx.body = result
})

router.post('/post', async ctx => {
    const { body } = ctx.request
    console.log(body)
    ctx.body = {
        ...body
    }
})

// app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)