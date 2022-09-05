const mongoose = require('mongoose');

const courierSchema = new mongoose.Schema({
    action: {
        type: String
    },
    services: {
        type: String,
    },
    type: {
        type: String,
    },
    from: {
        type: String,
    },
    to: {
        type: String,
    },
    pickup: {
        type: String,
    },
    drop: {
        type: String,
    },
    phone: {
        type: String,
    },
    trackingid: {
        type: String,
    },
    cost: {
        type: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('Courier master table', courierSchema);