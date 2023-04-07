import express from 'express';
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../model/post.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

// get all posts

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ _id: -1 })
        res.status(200).json({ success: true, data: posts })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
})

// create a post

router.post('/', async (req, res) => {
    try {
        const { name, prompt, photo } = req.body
        const photoUrl = await cloudinary.uploader.upload(photo)
        const newPost = new Post({
            name,
            prompt,
            photo: photoUrl.secure_url
        })
        await newPost.save()
        res.status(201).json({ success: true, data: newPost })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
})

export default router