const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/fpiDB';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', ()=>{
    console.log(`Mongoose connected to ${dbURI}`);
   });
mongoose.connection.on('error', (err)=>{
    console.log('Mongoose connection error:', err);
   });
mongoose.connection.on('disconnected', ()=>{
    console.log(' Mongoose disconnected');
   });
   
const gracefulShutdown = (msg,callback)=>{
    mongoose.connection.close(()=>{
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
    });
   };

// For app termination
process.on('SIGINT',()=>{
    gracefulShutdown('app termination', ()=>{
    process.exit(0);
    });
   });

require('../models/userSchema')