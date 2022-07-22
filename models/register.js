const mongoose = require('mongoose');
const schema = mongoose.Schema({
    
    user:{
        type: 'String',
        required: true,
        unique:true
    },
    email:{
        type: 'String',
        required: true,
        unique:true
    },
    password:{
        type: 'String',
        required: true,
        unique:false,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});

const User = mongoose.model('user', schema);
module.exports = User;