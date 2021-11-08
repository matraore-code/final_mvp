const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');

const usersRoutes = require('./routes/users-routes');
const notesRoutes = require('./routes/notes-routes');
const rappelsRoutes = require('./routes/rappels-routes');
const countriesRoutes = require('./routes/countries-routes');
const mailerRoutes = require('./routes/mailer-routes');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/countries', countriesRoutes);

app.use('/api/users', usersRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/rappels', rappelsRoutes);
app.use('/api/sendEmail', mailerRoutes);

app.use((req, res, next) => {
    throw new HttpError("Could Not Find This Route!", 404);
});

app.use((error, req, res, next) => {
    if (req.file) {
        fs.unlink(req.file.path, err => {
            console.log(err);
        });
    }
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An Unknown Error Occured!' });
})

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n49i9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
).then(() => {
    app.listen(process.env.PORT || 5000);
}).catch((err) => {
    console.log(err);
});