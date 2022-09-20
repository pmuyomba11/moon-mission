const express = require('express')
const app = express()
const marsMissions = require('./models/marsMissions.js')




//Index route....
app.get('/marsMissions', (req, res) => {
    res.render('index.ejs', {
      allMarsMissions: marsMissions  
    })
})

//Show route
app.get('/marsMissions/:id',(req,res)=>{
    res.send('Show Page')
})


//adding listener
app.listen(4000, () => {
    console.log("Server is running....");
})