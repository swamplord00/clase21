const mongoose=require('mongoose')

const Product=mongoose.model('Product')

const createProduct=async(req,res)=>{
    const {titulo,catalogo_estilo_id,catalogo_tipo_id,catalogo_genero_id,stock,temporada,activo,marca,precio,img}=req.body
    console.log(req.body)
    
    try {
        const product=new Product({
            titulo,
            catalogo_estilo_id,
            catalogo_genero_id,
            catalogo_tipo_id,
            stock,
            temporada,
            activo,
            marca,
            precio,
            img,

        })
        console.log(product)
        const resp=await product.save()
        return res.status(201).json({
            message: "Product created",
            detail:resp
        })
        
    } catch (error) {
        return res.status(500).json({
            message:'Internal Server Error',
            detail:error,
        })
    }


}

const getProducts=async(req,res)=>{
    try {
        const resp=await Product.find()
        return res.status(200).json({
            message:'OK',
            detail:resp
        })
    } catch (error) {
        return res.status(500).json({
            message:'Internal Server Error',
            detail:error
        })
    }
}


module.exports={
    createProduct,
    getProducts,
}