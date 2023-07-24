const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 跨域中间件
const cors = require('cors')
app.use(cors())

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 路由配置
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(10001, function () {
    console.log('api server running at http://127.0.0.1:10001')
})