const express = require('express')
const router = express.Router()
const boardRouter = require('./board/index')
const { Auth } = require('../middlewares/auth')

router.get('/talk',(req,res)=>{
    res.render('talk')
})

router.use('/board',Auth,boardRouter)

module.exports = router