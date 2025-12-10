require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const cookieParser= require('cookie-parser');
const path = require('path');

const indexRouter = require('./routes/index');
const profRoutes = require('./routes/prof.routes');
const studRoutes = require('./routes/student.routes');
const postRoutes = require('./routes/post.route');
const downloadRoutes = require('./routes/download.route');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);
app.use('/stu', studRoutes);
app.use('/prof', profRoutes);
app.use('/pdfs', postRoutes);
app.use('/dl', downloadRoutes);

let port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Runnin on ${port}!!!`);
});
