const mongoose= require('mongoose')

const ProductSchema= new mongoose.Schema({
    titulo:{
        type:String,
        required:true,
    },
    
    catalogo_tipo_id:{
        type:String,
        require:false,
        default:"Otros"

    },
    catalogo_genero_id:{
        type:String,
        require:false,
        default:"Unisex"

    },
    catalogo_estilo_id:{
        type:String,
        require:false,
        default:"NO"
    },
    stock:{
        type:Array,
        require:false,
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
        require:true,
    },
    temporada:{
        type:String,
        require:false,
        default:"AllSeason"
    },
    valoracion:{
        type:Number,
        require:false,
        default:0
    },
    vendidos:{
        type:Number,
        require:false,
        default:0
    },
    img:{
        type:Object,
        require:false,
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
        require:false,
        default:false
    },
    marca:{
        type:String,
        require:false,
        default:'Genérica'
    }
    
    

})


const Product=mongoose.model('Product',ProductSchema)


module.exports=Product