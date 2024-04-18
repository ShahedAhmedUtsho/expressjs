const express = require('express');
const phones = require('./phones.json')
const app = express() ;
const port = 1000 ;
const cors =require('cors');
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello from  server')
})
app.get('/phones',(req,res)=>{
  res.send(phones)
})

  app.get('/phones/:id',(req,res)=>{
    const id = req.params.id ;
    const phone = phones.find(phone => phone.id == id) || {};
    res.send(phone)
  })


app.get('/again',(req,res)=>{
    res.send('hello from my from lalala again')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






