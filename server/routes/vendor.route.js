const express = require('express')
const { addVendor, getVendor } = require('../controllers/vendor.controller')

const router = express.Router()

router.post('/vendors', addVendor)
router.get('/vendors', getVendor)




module.exports = router