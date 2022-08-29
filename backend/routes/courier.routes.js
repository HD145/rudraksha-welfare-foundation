const express = require('express');
const router = express.Router();

const {authentication, onlyAdmin} = require('../middlewares/auth');

const courierModel = require('../models/courier.model');

router.post('/addCourier', async(req, res) => {
    try{
        const newCourier = new courierModel({
            ...req.body
        });
        const saveCourier = await newCourier.save();
        res.status(201).json({
            success: true,
            data: saveCourier,
            message: 'Courier Added to the DB'
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            data: "Something Went Wrong !!",
            message: "Something Went Wrong !!"
        });
    }
});

module.exports = router;