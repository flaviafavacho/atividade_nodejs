//requiring module
const express = require('express');

//creating express object
const app = express();

//Handling GET request
app.get('/',(req, res) => {
    res.send('Primeiro exercício com API'
        +'running on this server')
    res.end()
    
})

//Port Number
const PORT = process.env.PORT ||5000;

//Server setup
app.listen(PORT,console.log(
    'Server started on port $ {PORT}'));