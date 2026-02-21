const express = require('express')
const { createUser, getUsers, profileUpdate, login } = require('../controller/userController')
const tokenValidations = require('../middlewares/tokenValidation')
const validate = require('../middlewares/validate')
const { createUserSchema, loginUserSchema } = require('../validations/userSchemas')



const userRoute = express.Router()


userRoute.post('/adduser', validate(createUserSchema), createUser)
userRoute.get('/alluser', getUsers)
userRoute.post('/login', validate(loginUserSchema), login)
userRoute.put('/profile', tokenValidations, profileUpdate)




module.exports = userRoute


