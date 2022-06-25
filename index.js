const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/eventfinder'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected..')
})

app.use(express.json())

const eventRouter = require('./routers/events')
app.use('/events',eventRouter)

app.listen(9000,()=>{
    console.log('Server started')
})

