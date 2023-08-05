const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: Number,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    rol:{
        type: String,
        require: true,
    },
    premium:{
        type: Boolean,
        require: true,
    },
    dob:{
        type: Date,
        require: false,
    },


})

mongoose.model('User',UserSchema)