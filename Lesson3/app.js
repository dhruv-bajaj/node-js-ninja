const express = require('express');

//express app
//invoking the function to create instance of express
const app = express();

//listen for requests, returns an instance of server
app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000")
});

app.get('/',(req,res)=>{
    // send method itself detects the type of response
    // No need to set Content-Type header
    //It also sets the status code, but we can also send it if we want
    //Have to send options object which specify from where path is relative
    res.sendFile("./index.html",{root:__dirname});
})

app.get('/about',(req,res)=>{
    // send method itself detects the type of response
    // No need to set Content-Type header
    //It also sets the status code, but we can also send it if we want
    res.send("<p>About Page</p>");
})
app.get('/about-me',(req,res)=>{
    // send method itself detects the type of response
    // No need to set Content-Type header
    //It also sets the status code, but we can also send it if we want
    res.redirect('/about')
})

//use method to fire middleware functions in express
// if we don't have a match from top to bottom till here, this function will be called
app.use((req,res)=>{
    res.status(404).sendFile('./404.html',{root:__dirname});
})