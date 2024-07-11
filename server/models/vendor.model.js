const mongoose = require('mongoose')



const vendorSchema = mongoose.Schema({
    owner:{type:String,required:true},
    displayPic:{type:String,required:true},
    bussinessName:{type:String,required:true},
    service:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    experience:{type:String,required:true},
    serviceCoverage:{type:String,required:true},
    Bio:{type:String,required:true, length:400},
    bussinessHour:{type:String},
    contact:{type:String,required:true}
})


const vendorModel = mongoose.model('vendor_collection', vendorSchema)



module.exports = vendorModel