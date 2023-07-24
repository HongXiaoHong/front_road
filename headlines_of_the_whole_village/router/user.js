const express = require('express')
// 创建路由对象
const router = express.Router()


router.get('/test', (req, res) => {

    console.log("test")
    res.send('test OK')
})

// 注册新用户
router.post('/reguser', (req, res) => {

    console.log("reguser")
    res.send('reguser OK')
})

// 登录
router.post('/login', (req, res) => {
    console.log("login")
    res.send('login OK')
})

module.exports = router