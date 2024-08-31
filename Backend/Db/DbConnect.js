const mongoose = require('mongoose')
const connectDb = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017')
        console.log('Conneted to Mongo');
        
    }
    catch{
        console.log(error)
    }
}

module.exports = connectDb