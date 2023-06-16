const mongoose = require('mongoose');
//TODO... Chnage the name of the Database
const connStr = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/testovName';

module.exports = async (app) => {
    try {
        await mongoose.connect(connStr, {
            useUnifiedTopology: true,
            useNewUrlParser: true 
        })
        console.log('Database connected');
    } catch(err) {
        console.error('Error initializing database');
        console.error(err.message);
        process.exit(1);    
    }
}