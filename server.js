

const app = require('express')();
app.get('/',(req,resp)=>{
 resp.send("hello from port 4000");
})

app.listen(4000, ()=>{
    console.log('Server started')
})

