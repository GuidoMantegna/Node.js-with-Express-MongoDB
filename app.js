// This require return as a function
const express = require('express');

// Express App
// Then, we invoke this function to create an istance of an 
// Express App wich is storage in a const.
const app = express();

// Get mongoose
const mongoose = require('mongoose') //We can use this mongoose object to connect to the DB

const blogRoutes = require('./routes/blogRoutes')

// Connect to MongoDB
const dbURI = 'mongodb+srv://guidosPizza:argengina@cluster0.qk0am.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose is an async. func. and it returns a promise. 
// So, if we get a response, we are going to listen for port 3000
    .then( result => app.listen(3000) )
    .catch( err => console.log(err) )

// Register view engine
// app.set() Let us configure some application settings
// Automatically ejs will look into 'views' folder
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); // Just in case we want to create another folder for the views


/* Middleware & static files */
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }))

// Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/about', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});


// Blog routes
app.use('/blogs', blogRoutes)

// 404 page
app.use( (req, res) => {
    res.status(404).render('404', { title: '404' });
})