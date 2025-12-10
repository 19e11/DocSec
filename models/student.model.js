const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    enroll:{
        type: String,
        required: true,
    },
    pass:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
    },
    downloaded:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post' 
    }],
});

const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;