const express = require('express')
const { createUser, getUsers,  profileUpdate, login } = require('../controller/userController')
const tokenValidations = require('../middlewares/tokenValidation')



const userRoute = express.Router()


userRoute.post('/adduser', createUser)
userRoute.get('/alluser', getUsers)
userRoute.post('/login',login)
userRoute.put('/profile', tokenValidations, profileUpdate)




module.exports = userRoute


