const express = require('express');
const app=express();
const port = 585;

app.listen(port, function(err){
        if(err){
                console.log(`Error in starting the server ${err}`);
        }

        console.log(`Server is running on port ${port}`);
});