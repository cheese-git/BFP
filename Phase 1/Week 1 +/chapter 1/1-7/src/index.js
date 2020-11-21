const Koa = require('koa')
const statics = require('koa-static')
const path = require('path')

const app = new Koa()


app.use(statics(path.join(__dirname, '../public')))
app.listen(3000)