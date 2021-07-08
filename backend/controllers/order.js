import mongoose from 'mongoose';
import orderItems from '../models/order.js';

export const order = async (req, res) => {
    const items = req.body;

    const itemChoice = new orderItems(items);
    
    try {
        await itemChoice.save();
        res.status(201).json(itemChoice)

    } catch (error) {
        res.status(409).json({message: error.message});
    }
    
}


