const mongoose = require('mongoose');
// const dbgr = require('debug')('development:mongoose');

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB Connected!");
}).catch((err)=>{
    console.log('Error in', err);
});

module.exports = mongoose.connection;