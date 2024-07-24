const express = require('express')
const { addVendor, getVendor, getVendorByName, getVendorById } = require('../controllers/vendor.controller')

const router = express.Router()

router.post('/vendors', addVendor)
router.get('/vendors', getVendor)
router.get('/vendor/:owner', getVendorByName)
router.get('/vendors/vendor/:id', getVendorById)




module.exports = router