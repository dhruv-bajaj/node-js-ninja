const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes')

const mongoose = require('mongoose');
const Blog = require("./models/blog");

const dbURI = 'mongodb://admin:password@127.0.0.1:27017/sample?authSource=admin';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((res) => {
        console.log("Connected to database");
        app.listen(3000, (req, res) => {
            console.log("Listening on port 3000");
        })
    }).catch(err => {
        console.log(err);
    })

//third party middleware morgan(used for logging)
const morgan = require('morgan');

//register view engine
app.set('view engine', 'ejs');

// ejs look for views folder. Map if want to use some other folder
//app.set('views','myviews')


app.use(morgan('dev'));

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    console.log('New request made:');
    console.log('Host', req.hostname);
    console.log('Path:', req.path);
    console.log('Method', req.method);
    next();
})



app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    });
});

app.use(blogRoutes);

//scoping allows us to apply handlers beginning with a common scope eg
//app.use('/blogs',blogRoutes)
// Means now /blogs is basically /blogs/blogs, we can remove /blogs from handlers
 
app.use((req, res) => {
    res.status(404).render("404", {
        title: 'Error Page'
    });
})