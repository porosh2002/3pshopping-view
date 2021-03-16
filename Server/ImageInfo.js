const mongoose = require('mongoose');
const ImageInfoSchema = new mongoose.Schema({
    ImageName:{
        type:String,
        required:true,
    },
    ID:{
        type:String,
        required:true
    }
});
const ImageInfoModel = mongoose.model('ImageInfo',ImageInfoSchema);
module.exports = ImageInfoModel;