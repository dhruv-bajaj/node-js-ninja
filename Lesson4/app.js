const express = require('express');
const app = express();

//third party middleware morgan(used for logging)
const morgan = require('morgan');

//register view engine
app.set('view engine','ejs');

// ejs look for views folder. Map if want to use some other folder
//app.set('views','myviews')

app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000");
})
app.use(morgan('dev'));

app.use(express.static('public'))

app.use((req,res,next)=>{
    console.log('New request made:');
    console.log('Host',req.hostname);
    console.log('Path:',req.path);
    console.log('Method',req.method);
    next();
})

app.get('/',(req,res)=>{
    const blogs = [
        {title:"WORLD CUP DAILY",body:"BRAZIL, PORTUGAL MOVE ON TO ROUND OF 16"},
        {title:"South Korea pulled off the second comeback of the day, but a goal from Ghana's Mohammed Kudus in the 68th minute kept it from completing it. Ghana will need a win against Uruguay on Friday (10 a.m. ET on FS1 and the FOX Sports app) to advance to the round of 16",body:"South Korea pulled off the second comeback of the day, but a goal from Ghana's Mohammed Kudus in the 68th minute kept it from completing it. Ghana will need a win against Uruguay on Friday (10 a.m. ET on FS1 and the FOX Sports app) to advance to the round of 16"},
        {title:"Brazil 1, Switzerland 0",body:"Brazil will win Group G regardless of what happens on Friday; Switzerland, meanwhile, needs to beat Serbia (2 p.m. ET on FS1 and the FOX Sports app) to advance as the runner-up in the group."}
    ]
    res.render('index',{title:'Home Page',blogs:blogs});
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'});
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create Blog Page'});
})
app.use((req,res)=>{
    res.status(404).render("404",{title:'Error Page'});
})
