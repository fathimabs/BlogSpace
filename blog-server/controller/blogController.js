const express = require('express')
const Blog = require('../models/blogModel')

const addBlog = async (req, res) => {

    try {
        let { title, content } = req.body

        if (!title || !content) {
            return res.status(400).json({ message: "All fields required" })
        }

        let blog = new Blog({
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
        let blogData = await Blog.find()
        res.status(200).json(blogData)
    } catch (error) {
        res.status(500).json({ message: "Error" })
    }
}

const getBlogByUser = async (req, res) => {

    try {
        let userId = req.user.id
        console.log(userId);

        let blogs = await Blog.find({ author: userId })

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
        let blogId = req.params.id
        // console.log(blogId);

        let userId = req.user.id
        let { title, content } = req.body

        let blog = await Blog.findById(blogId)
        // console.log(blog.author);

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
        let blogId = req.params.id
        let userId = req.user.id

        let blog = await Blog.findById(blogId)

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
