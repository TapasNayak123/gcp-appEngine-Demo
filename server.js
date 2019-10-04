const express = require('express');
const app = express();
var port = process.env.port || 3000;

app.get('/',(req,resp,next)=>{
    resp.send('<h1>Testing app in App engine</h1>')
});

app.listen(port,()=>{
    console.log(`App starts listening on port ${ port }`)
})
