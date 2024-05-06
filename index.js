const express = require("express");

app = express();

app.get('/', (req, res) => {
    res.send('This is an active Server');
});

app.listen(3000, () =>{
    console.log("Server is Active")
});