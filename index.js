const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/v1',(req,res)=>{
    res.json({
        message:""
    })
})
app.post('/api/v2',(req,res)=>{

});
const port =3002;
app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`)
})
