const express = require('express'); //access express library
                                    //common js modules
                                    //Node.js system to share modules
                                    //
                                    //note: import express from 'express';
                                    //      uses ES2015 modules system
                                    //      Node.js does not support natively
                                    //      support this

const app = express();              //generates app
                                    //route handlers will be associated w/ app

app.get('/', (req, res) => {
  res.send({ hi: 'Ariel' });
});

const PORT = process.env.PORT || 5000;      //heroku dynamic port binding at runtime
                                    //does not appear in development env
app.listen(PORT);                   //defines port
