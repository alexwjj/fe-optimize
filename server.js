const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression');
const path = require('path');


app.use(compression());
app.use(express.static('build'));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${listener.address().port}`);
});
