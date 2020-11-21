const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.post('/user', ctx => {
    const { role } = ctx.request.headers
    const { name, email } = ctx.request.body

    if (!name || !email) {
        ctx.body = {
            code: 404,
            msg: "name or email cannot be empty"
        }
    } else if (role !== 'admin') {
        ctx.body = {
            code: 401,
            msg: "unauthorized post"
        }
    } else {
        ctx.body = {
            code: 200,
            msg: "upload success",
            data: { name, email }
        }
    }
})

app.use(koaBody())
app.use(router.routes())
app.listen(3000)