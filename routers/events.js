const express = require('express')
const router = express.Router();

const event = require('../models/event')

router.get('/',async(req,res)=>{

    try
    {
        const events = await event.find()
        res.json(events)
        // res.send('Get request..');
        console.log('get request');    

    }catch(err)
    {
        res.send('Error'+err)
    }
    
})

router.get('/:id',async(req,res)=>{

    try
    {
        const oneevent = await event.findById(req.params.id)
        res.json(oneevent)
        // res.send('Get request..');
        console.log('get request');    

    }catch(err)
    {
        res.send('Error'+err)
    }
    
})

router.post('/',async(req,res)=>{
    const newevent = new event({

        eventName : req.body.eventName,
        eventType : req.body.eventType,
        city : req.body.city,
        Venue : req.body.Venue,
        time : req.body.time,
        isVirtual : req.body.isVirtual,
        startDate :  req.body.startDate,
        endDate :  req.body.endDate,
        RegistrationPrice : req.body.RegistrationPrice,
        guestName : req.body.guestName,
    })

    try
    {
       const e1 = await newevent.save()
       res.json(e1)
    }catch(err){
        res.send('Error')
    }
})


router.patch('/:id',async(req,res) => {

    try{
        
        const editevent = await event.findById(req.params.id)
         
        editevent.eventName = req.body.eventName
        editevent.eventType = req.body.eventType
        editevent.city = req.body.city
        editevent.Venue = req.body.Venue
        editevent.time = req.body.time
        editevent.isVirtual = req.body.isVirtual
        editevent.startDate = req.body.startDate
        editevent.endDate = req.body.endDate
        editevent.RegistrationPrice = req.body.RegistrationPrice
        editevent.guestName = req.body.guestName

        const e1 = await editevent.save()
        res.json(e1)


    }catch(err){
        res.send('Error')
    }

})



router.delete('/:id',async(req,res) => {

    try{
        
        const editevent = await event.findById(req.params.id)
        const e1 = await editevent.remove()
        res.json(e1)

    }catch(err){
        res.send('Error')
    }

})

module.exports = router