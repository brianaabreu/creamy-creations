import mongoose from 'mongoose';
import PostMessage from '../models/contact.js';

export const createContact = async (req, res) => {
    const message = req.body;

    const newMessage = new PostMessage(message);
    
    try {
        await newMessage.save();
        res.status(201).json(newMessage)

    } catch (error) {
        res.status(409).json({message: error.message});
    }
    
}

