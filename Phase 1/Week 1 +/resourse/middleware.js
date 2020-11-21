const Koa = require('koa')

const app = new Koa()

const middleware0 = function (ctx, next) {
    console.log('middleware0')
    next()
    console.log('middleware0 over')
}
const middleware1 = function (ctx, next) {
    console.log('middleware1')
    // next()
    console.log('middleware1 over')
}

const middleware2 = function (ctx, next) {
    console.log('middleware2')
    console.log('middleware2 over')
}

app.use(middleware0)
app.use(middleware1)
app.use(middleware2)

app.listen(3000)