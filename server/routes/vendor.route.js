const express = require('express')
const { addVendor, getVendor, getVendorByName } = require('../controllers/vendor.controller')

const router = express.Router()

router.post('/vendors', addVendor)
router.get('/vendors', getVendor)
router.get('/vendors/:owner', getVendorByName)




module.exports = router