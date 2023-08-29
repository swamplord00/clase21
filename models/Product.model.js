const mongoose= require('mongoose')

const ProductSchema= new mongoose.Schema({
    titulo:{
        type:String,
        required:true,
    },
    
    catalogo_tipo_id:{
        type:String,
        required:false,
        default:"Otros"

    },
    catalogo_genero_id:{
        type:String,
        required:false,
        default:"Unisex"

    },
    catalogo_estilo_id:{
        type:String,
        required:false,
        default:"NO"
    },
    catalogo:{
        type:String,
        required:true
    },
    stock:{
        type:Array,
        required:false,
        default:[
            {},
        ]

        // inventario:[{
        //     tamanio:String,
        //     qty:Number,
        //     dimensiones:String,
        //     color:String,
        // }],
    },
    precio:{
        type:Number,
        required:true,
    },
    temporada:{
        type:String,
        required:false,
        default:"AllSeason"
    },
    valoracion:{
        type:Number,
        required:false,
        default:0
    },
    vendidos:{
        type:Number,
        required:false,
        default:0
    },
    img:{
        type:Object,
        required:false,
        // images:[
        //     {thumbnail:String,ImageZoom:String}
        // ]
        default:{
            thumbnail:'https://uhcl-ir.tdl.org/bitstream/handle/10657.1/1567/not-available.jpg.jpg?sequence=1&isAllowed=y',
            imageZoom:'https://uhcl-ir.tdl.org/bitstream/handle/10657.1/1567/not-available.jpg.jpg?sequence=1&isAllowed=y',
        }
    },
    activo:{
        type:Boolean,
        required:false,
        default:false
    },
    marca:{
        type:String,
        required:false,
        default:'Genérica'
    }
    
    

})


const Product=mongoose.model('Product',ProductSchema)


module.exports=Product