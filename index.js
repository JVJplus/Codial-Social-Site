const express = require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port = 585;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());

//for ejs layouts 
app.use(expressLayouts);

//for static files
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/', require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(err){
        if(err){
                console.log(`Error in starting the server ${err}`);
        }
        
        console.log(`Server is running on port ${port}`);
}); 









/* 
        TODO:
        * Case Sensitive Routing
*/