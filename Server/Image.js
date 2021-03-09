const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    ImageName:{
        type:String,
        required:true,
        unique:true
    },
    Image:{
        type:Buffer,
        required:true,
        unique:true
    }
});
const ImageModel = mongoose.model('Image',ImageSchema);
module.exports = ImageModel;