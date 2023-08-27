const mongoose=require('mongoose')

const Product=mongoose.model('Product')

const createProduct=async(req,res)=>{
    const {titulo,id,precio,img}=req.body
    console.log(req.body)

    if(img=={}){
        img={
            thumbnail:'https://uhcl-ir.tdl.org/bitstream/handle/10657.1/1567/not-available.jpg.jpg?sequence=1&isAllowed=y',
            imageZoom:'https://uhcl-ir.tdl.org/bitstream/handle/10657.1/1567/not-available.jpg.jpg?sequence=1&isAllowed=y',
        }
    }
    try {
        const product=new Product({
            titulo,
            id,
            precio,
            img
        })
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
            datail:resp
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