const express=require('express')
const router=express.Router()

const{createProduct, getProducts}=require('../controllers/Product.controller')

router.get('/',getProducts)
router.post('/createProduct',createProduct)

module.exports=router