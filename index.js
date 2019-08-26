const express = require('express');
const app=express();
const port = 585;

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