const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    let path = "./views/";
    switch(req.url){
        case '/':
            path = path + 'index.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        case '/about':
            path = path + 'about.html';
            res.statusCode=200;
            break;
        default:
            path += '404.html';
            res.statusCode=404;
            
    }

    //set header contend type
    // res.setHeader('Content-Type','text/plain');
    // res.write('Hello, how are you');
    // res.end();

    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello, how are you</h1>');
    // res.end();

    res.setHeader('Content-Type','text/html');
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
});


server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000');
})

const num = _.random(0,20);
console.log(num);

const greet = _.once(()=>{
    console.log("hello");
});
greet();
greet();