const express = require('express');
const {createTodo,updateTodo} = require('./types')
const app = express();
app.use(express.json());

app.get('/api/v1',(req,res)=>{

})
app.post('/api/todo',(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
});

app.put('/api/update',(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'you sent the wrong inputs',
        })
        return;
    }
});
const port =3002;
app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`)
})
