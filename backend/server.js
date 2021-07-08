import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()


import contactRoutes from './routes/routes.js';
import OrderItems from './routes/routes.js';

express.urlencoded({extended: true })
express.json({extended: true })

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json({extended: true }));

app.use(cors());


app.use('/orders', OrderItems)
app.use('/contact', contactRoutes)


const CONNECTION_URL = 'mongodb+srv://brianaabreu:3439591b@cluster0.pct3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port:5000`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
