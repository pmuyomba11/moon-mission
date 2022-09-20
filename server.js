const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    res.send('working...')
})


//adding listener
app.listen(4000, ()=>{
    console.log("Server is running....");
})