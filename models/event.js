const { Double, Int32 } = require('mongodb')
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({

    eventName: {
        type: String,
        required: true
    },

    eventType: {
        type: String,
        requuired: true
    },

    city : {
        type: String,
        requuired: true
    },

    Venue : {
        type: String,
        requuired: true
    },

    time: {
        type: String,
        requuired: true
    },

    isVirtual: {
        type: Boolean,
        required: true,
        default :false
    },

    startDate: {
        type: String,
        required: true
    },

    endDate: {
        type: String,
        required: true
    },

    RegistrationPrice:{
        type: String,
        required: true
    },

    guestName:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('event',eventSchema)