const mongoose = require('mongoose');
const config = require("../config/env.config")
let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

const connectWithRetry = () => {
    console.log('MongoDB connection with retry');
    mongoose.connect(config.mongo_uri, options).then(()=>{
        console.log('MongoDB is connected');
    }).catch(err=>{
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        console.log(err);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;
