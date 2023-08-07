const mongoose= require('mongoose')

const ProductSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        validate: {
            validator:function(v){
                return /^[a-zA-Z0-9 ]{3,30}$/.test(v)
            },
        }
    },
    sku:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,

    },
    stock:{
        type:Number,
        require:true,

    },
    

})