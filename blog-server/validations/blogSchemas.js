const Joi = require('joi')


const addBlogSchema = Joi.object({
    title: Joi.string().min(3).max(120).required(),
    content: Joi.string().min(10).required()
})

const updateBlogSchema = Joi.object({
    title: Joi.string().min(3).max(120),
    content: Joi.string().min(10)
})

module.exports = { addBlogSchema, updateBlogSchema }