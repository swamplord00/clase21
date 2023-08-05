const mongoose=require('mongoose')

const User=mongoose.model('User')

const signup= async (req,res)=>{
    try {
        const user= new User(req.body)
        const resp=await user.save()
        return res.status(201).json({
            message: 'User created',
            detail: resp,

        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            detail: error,
        })
    }
}

const getUsers= async(req,res)=>{
    try {
        const resp=await User.find()
        return res.status(200).json({
            message:'OK',
            detail:resp,
        })
    } catch (error) {
         return res.status(500).json({
            message: 'Internal Server Error',
            detail: error,
         })
    }
}
const updateUser=async (req,res)=>{
    const{_id,userUpdated}=req.body
    console.log(_id,userUpdated)
    try {
        const resp=await User.findByIdAndUpdate(_id,userUpdated, {new:true})
        return res.status(200).json({
            messege:"ok",
            detail:resp,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            detail:error,
        })
    }
}
const deleteUser=async (req,res)=>{
    const{_id}=req.body
    console.log(_id)
    try {
        const resp=await User.findByIdAndDelete(_id)
        return res.status(200).json({
            messege:"ok",
            detail:resp,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            detail:error,
        })
    }
}

module.exports={
    signup,
    getUsers,
    updateUser,
    deleteUser,
}