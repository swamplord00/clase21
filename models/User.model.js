const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
        validate: {
            validator:function(v){
                return /^[a-zA-Z0-9 ]{3,30}$/.test(v)
            },
        }
    },
    password:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
        index: true,
        validate: {
            validator:function(v){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
            },
        }
    },
    phone:{
        type: Number,
        require: false,
    },
    address:{
        type: String,
        require: false,
    },
    rol:{
        type: String,
        require: false,
        default:'USER'
    },
    premium:{
        type: Boolean,
        require: true,
        default: false
    },
    dob:{
        type: Date,
        require: false,
    },
    


},{
    timestamps:true
})

const User=mongoose.model('User',UserSchema)


module.exports=User