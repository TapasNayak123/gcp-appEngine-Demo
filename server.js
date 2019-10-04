const express = require('express');
const app = express();

app.get('/',(req,resp,next)=>{
    resp.send('<h1>Testing app in App engine</h1>')
});

app.listen(1234,()=>{
    console.log("App starts listening on port 1234")
})
