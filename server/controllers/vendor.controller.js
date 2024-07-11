
const vendorModel = require('../models/vendor.model')


const addVendor = async (req, res)=>{
  try {
    const vendor = await vendorModel.create(req.body)
  res.status(200).json({
    message:'Vendor added successfully',
    status:true,
    data: vendor
  })
  } catch(err) {
    res.status(500).json({message:'error adding vendor', errorMessage: err.message, status:true})
  }
}

const getVendor = async (req, res) =>{
    try{
        const vendor = await vendorModel.find()
        res.status(200).json({
            message:'Vendor fetched successfully',
            status:true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({message:'error fetching vendor', errorMessage: err.message, status:false})

    }
}

const getVendorByName = async (req, res) => {
    try{
        const vendor = await vendorModel.findOne({owner: req.params.owner})
        console.log(vendor);
        if(vendor){
            res.status(200).json({
                message:'Vendor fetched successfully',
                status:true,
                data: vendor
            })
        } else {
            res.status(404).json({
                message:'Vendor not found',
                status:false
            })
        }
    } catch (err) {
        res.status(500).json({message:'error fetching vendor', errorMessage: err.message, status:false})
    }
}





module.exports = {addVendor, getVendor, getVendorByName}