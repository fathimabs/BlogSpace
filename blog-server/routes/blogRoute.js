const express = require('express')
const tokenValidations = require('../middlewares/tokenValidation')
const { addBlog, getBlogs, getBlogByUser, blogUpdate, blogDelete } = require('../controller/blogController')

const blogRoute = express.Router()


blogRoute.post('/add-blog', tokenValidations, addBlog)
blogRoute.get('/all-blog', getBlogs)
blogRoute.get('/my-blogs', tokenValidations, getBlogByUser)
blogRoute.put('/update-blog/:id', tokenValidations, blogUpdate)
blogRoute.delete('/delete-blog/:id', tokenValidations,blogDelete)

module.exports = blogRoute


