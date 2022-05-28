const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

// Chi tiết hơn -> để ở trên
router.use('/search', siteController.search)
router.use('/', siteController.index)

module.exports = router
