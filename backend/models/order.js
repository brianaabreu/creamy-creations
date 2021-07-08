import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({ 
        name: String,
    flavor: String,
    topping: String
},{ versionKey: false })

const orderItems = mongoose.model('orderItems', menuSchema);

export default orderItems