const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    Image:{
        type:Buffer,
        required:true,
    },
    ID:{
        type:String,
        required:true
    }
});
const ImageModel = mongoose.model('Image',ImageSchema);
module.exports = ImageModel;