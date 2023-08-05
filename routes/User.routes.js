const express=require('express')

const router= express.Router()

const{ signup, getUsers, updateUser, deleteUser, login}=require('../controllers/User.controller')

router.get('/', getUsers)

router.post('/',signup)

router.put('/',updateUser)

router.delete('/',deleteUser)

router.post('/login',login)

module.exports=router;