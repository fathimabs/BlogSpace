const Joi = require('joi')

const createUserSchema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
})

module.exports = { createUserSchema, loginUserSchema }