const express = require('express')
const router = express.Router()
const boardController = require('./board.controller')

router.get('/list',boardController.list)

router.get('/view/:idx',boardController.view) // /view/:idx -> 파라미터 매개변수

router.get('/write',boardController.write)

router.get('/modify',boardController.modify)

module.exports = router