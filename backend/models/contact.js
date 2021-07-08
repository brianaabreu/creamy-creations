import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
});


const PostMessage = mongoose.model('PostMessage', contactSchema);

export default PostMessage