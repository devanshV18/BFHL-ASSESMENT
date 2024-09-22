const express = require('express')
const {postMethod, getMethod} = require('../controllers/controllers')

const router = express.Router()

router.post('/bfhl', postMethod)
router.get('/bfhl', getMethod)

module.exports = router