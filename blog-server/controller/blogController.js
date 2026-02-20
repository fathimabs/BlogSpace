const express = require('express')
const Blog = require('../models/blogModel')

const addBlog = async (req, res) => {

    try {
        const { title, content } = req.body

        if (!title || !content) {
            return res.status(400).json({ message: "All fields required" })
        }

        const blog = new Blog({
            title,
            content,
            author: req.user.id
        });

        await blog.save()

        res.status(201).json({
            message: "Blog Added Successfully",
            blog
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

const getBlogs = async (req, res) => {

    try {
        const blogData = await Blog.find()

        res.status(200).json(blogData)

    } catch (error) {
        res.status(500).json({ message: "Error" })
    }
}

const getBlogByUser = async (req, res) => {

    try {
        const userId = req.user.id

        const blogs = await Blog.find({ author: userId })

        res.status(200).json({
            count: blogs.length,
            blogs
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

const blogUpdate = async (req, res) => {


    try {
        const blogId = req.params.id

        const userId = req.user.id

        const { title, content } = req.body

        const blog = await Blog.findById(blogId)

        if (!blog) {

            return res.status(404).json({ message: "Blog Not Found" })
        }

        if (userId !== blog.author.toString()) {

            return res.status(403).json({ message: "Not allowed to update this blog" })
        }

        if (title) blog.title = title
        if (content) blog.content = content

        await blog.save()

        res.status(200).json({
            message: "Blog Updated successfully",
            blog
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

const blogDelete = async (req, res) => {

    try {
        const blogId = req.params.id

        const userId = req.user.id

        const blog = await Blog.findById(blogId)

        if (!blog) {
            return res.status(404).json({ message: "Blog Not Found" })
        }
        if (userId !== blog.author.toString()) {

            return res.status(403).json({ message: "Not allowed to delete this blog" })
        }

        await blog.deleteOne()
        res.status(200).json({ message: "Blog deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}


module.exports = { addBlog, getBlogs, getBlogByUser, blogUpdate, blogDelete }
