import express from "express";
import dotenv from 'dotenv';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs/promises';
import mongoose from "mongoose";
import Image from "./models/Image.js";
import { fileURLToPath } from 'url'; 

dotenv.config(); 

const port = process.env.PORT || 3000;
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});


const uploadDir = path.join(__dirname, 'uploads');
await fs.mkdir(uploadDir, { recursive: true }).catch(err =>
    console.error('Error creating uploads directory:', err)
);

const upload = multer({
    dest: uploadDir,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        allowedTypes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Unsupported file type'), false);
    },
});

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).send('No file uploaded.');

  
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'uploads',
            transformation: [{ width: 800, height: 800, crop: 'limit' }],
        });

        
        const image = new Image({ public_id: result.public_id, url: result.secure_url });
        await image.save();

      
        await fs.unlink(req.file.path);

        res.redirect('/portfolio');
    } catch (error) {
        console.error('Error uploading file:', error);
        if (req.file?.path) await fs.unlink(req.file.path).catch(err => console.error('File cleanup error:', err));
        res.status(500).send('File upload failed.');
    }
});


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => res.send("Hello World!"));

app.get('/fetch-images', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).send('Error fetching images from the database.');
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
