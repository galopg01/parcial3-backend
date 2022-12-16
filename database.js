const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const uri = process.env.MONGODB_URI;

async function connectMongoose(){
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Mongoose connected'))
}

async function initialLoad(){
    await connectMongoose();
}

initialLoad();