const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.get('/',(req,resp,next)=>{
    resp.send('<h1>Testing app in App engine 2n Version</h1>')
});

app.listen(port,()=>{
    console.log(`App starts listening on port ${ port }`)
})

module.exports = app;