const express = require('express');
const router = express.Router();

const {authentication, onlyAdmin} = require('../middlewares/auth');

const courierModel = require('../models/courier.model');

router.post('/reports-monthly-courier', async(req, res) => {
    const {month, year} = req.body;
    try{ 
        let count = 0;
        let mnth = '';
        const couriers = await courierModel.find();
        let courierDetails = [];
        let final = [];
        if(couriers.length > 0){
            couriers.forEach(async(courier) => {
                if(courier.from.getMonth() === Number(month) && courier.from.getFullYear() === Number(year)){
                    courierDetails.push(courier);
                    mnth = courier.from.toLocaleString('default', { month: 'long' });
                    count++;
                }
            });
        }
        final.push({label: mnth, value: count, color: "#D61C4E"});
        res.status(200).json({
            success: true,
            data: {
                final,
                courierDetails
            },
            message: 'All Courier for the Month - ' + (Number(month) + 1)
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            data: "Something Went Wrong !!",
            message: "Something Went Wrong !!"
        });
    }
});

router.post('/reports-quarterly-courier', async(req, res) => {
    const {quarter, year} = req.body;
    try{
        const couriers = await courierModel.find();
        let courierDetails = [];

        const quarter0 = {
            "January": 0, 
            "February": 0, 
            "March": 0, 
        };
        
        const quarter1 = {
            "April": 0,
            "May": 0, 
            "June": 0,
        };
        
        const quarter2 = {
            "July": 0, 
            "August": 0,
            "September": 0,
        }

        const quarter3 = {
            "October": 0, 
            "November": 0, 
            "December": 0
        }

        if(couriers.length > 0){
            couriers.forEach(async(courier) => {
                if(Number(quarter) === 0){
                    if((courier.from.getMonth() === 0 || courier.from.getMonth() === 1 || courier.from.getMonth() === 2) && courier.from.getFullYear() === Number(year)){
                        courierDetails.push(courier);
                        let mnth = courier.from.toLocaleString('default', { month: 'long' });
                        if(mnth in quarter0){
                            quarter0[mnth] += 1;
                        }
                    }
                }
                if(Number(quarter) === 1){
                    if((courier.from.getMonth() === 3 || courier.from.getMonth() === 4 || courier.from.getMonth() === 5) && courier.from.getFullYear() === Number(year)){
                        courierDetails.push(courier);
                        let mnth = courier.from.toLocaleString('default', { month: 'long' });
                        if(mnth in quarter1){
                            quarter1[mnth] += 1;
                        }
                    }
                }
                if(Number(quarter) === 2){
                    if((courier.from.getMonth() === 6 || courier.from.getMonth() === 7 || courier.from.getMonth() === 8) && courier.from.getFullYear() === Number(year)){
                        courierDetails.push(courier);
                        let mnth = courier.from.toLocaleString('default', { month: 'long' });
                        if(mnth in quarter2){
                            quarter2[mnth] += 1;
                        }
                    }
                }
                if(Number(quarter) === 3){
                    if((courier.from.getMonth() === 9 || courier.from.getMonth() === 10 || courier.from.getMonth() === 11) && courier.from.getFullYear() === Number(year)){
                        courierDetails.push(courier);
                        let mnth = courier.from.toLocaleString('default', { month: 'long' });
                        if(mnth in quarter3){
                            quarter3[mnth] += 1;
                        }
                    }
                }
            })
        }

        let final = [];
        let colors = ["#D61C4E", "#FEB139", "#CEE5D0", "#1F4690"];
        let col = 0;

        if(Number(quarter) === 0){
            for(let key in quarter0){
                if(quarter0.hasOwnProperty(key)){
                    final.push({
                        label: key,
                        value: quarter0[key],
                        color: colors[col]
                    });
                    col++;
                }
            }
            return res.status(200).json({
                success: true,
                data: final,
                message: "Data is ready for - Q" + (Number(quarter)+1)
            });
        } 
        else if(Number(quarter) === 1){
            for(let key in quarter1){
                if(quarter1.hasOwnProperty(key)){
                    final.push({
                        label: key,
                        value: quarter1[key],
                        color: colors[col]
                    });
                    col++;
                }
            }
            return res.status(200).json({
                success: true,
                data: final,
                message: "Data is ready for - Q" + (Number(quarter)+1)
            });
        }
        else if(Number(quarter) === 2){
            for(let key in quarter2){
                if(quarter2.hasOwnProperty(key)){
                    final.push({
                        label: key,
                        value: quarter2[key],
                        color: colors[col]
                    });
                    col++;
                }
            }
            return res.status(200).json({
                success: true,
                data: final,
                message: "Data is ready for - Q" + (Number(quarter)+1)
            });
        }
        else if(Number(quarter) === 3){
            for(let key in quarter3){
                if(quarter3.hasOwnProperty(key)){
                    final.push({
                        label: key,
                        value: quarter3[key],
                        color: colors[col]
                    });
                    col++;
                }
            }
            return res.status(200).json({
                success: true,
                data: final,
                message: "Data is ready for - Q" + (Number(quarter)+1)
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            data: "Something Went Wrong !!",
            message: "Something Went Wrong !!"
        });
    }
});

router.post('/reports-halfYearly-courier', async(req, res) => {
    const {half, year} = req.body;

    const half0 = {
        "January": 0, 
        "February": 0, 
        "March": 0, 
        "April": 0,
        "May": 0, 
        "June": 0
    };

    const half1 = {
        "July": 0, 
        "August": 0,
        "September": 0, 
        "October": 0, 
        "November": 0, 
        "December": 0
    };

    try{
        const couriers = await courierModel.find();
        let courierDetails = [];

        if(couriers.length > 0){
            couriers.forEach(async(courier) => {
                if(Number(half) === 0){
                    if((courier.from.getMonth() === 0 || courier.from.getMonth() === 1 || courier.from.getMonth() === 2 || courier.from.getMonth() === 3 || courier.from.getMonth() === 4 || courier.from.getMonth() === 5) && courier.from.getFullYear() === Number(year)){
                        courierDetails.push(courier);
                        let mnth = courier.from.toLocaleString('default', { month: 'long' });
                        if(mnth in half0){
                            half0[mnth] += 1;
                        }
                    }
                }

                if(Number(half) === 1){
                    if((courier.from.getMonth() === 6 || courier.from.getMonth() === 7 || courier.from.getMonth() === 8 || courier.from.getMonth() === 9 || courier.from.getMonth() === 10 || courier.from.getMonth() === 11) && courier.from.getFullYear() === Number(year)){
                        courierDetails.push(courier);
                        let mnth = courier.from.toLocaleString('default', { month: 'long' });
                        if(mnth in half1){
                            half1[mnth] += 1;
                        }
                    }
                }
            });
        }

        let final = [];
        let colors = ["#395B64", "#A5C9CA", "#D61C4E", "#FEB139", "#CEE5D0", "#1F4690", "#898AA6", "#FFC4C4"];
        let col = 0;

        if(Number(half) === 0){
            for(let key in half0){
                if(half0.hasOwnProperty(key)){
                    final.push({
                        label: key,
                        value: half0[key],
                        color: colors[col]
                    });
                    col++;
                }
            }
            return res.status(200).json({
                success: true,
                data: final,
                message: "Data is ready for - HY-" + (Number(half)+1)
            });

        } else if(Number(half) === 1) {
            for(let key in half1){
                if(half1.hasOwnProperty(key)){
                    final.push({
                        label: key,
                        value: half1[key],
                        color: colors[col]
                    });
                    col++;
                }
            }
            return res.status(200).json({
                success: true,
                data: final,
                message: "Data is ready for - HY-" + (Number(half)+1)
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            data: "Something Went Wrong !!",
            message: "Something Went Wrong !!"
        });
    }
});

router.post('/reports-yearly-courier', async(req, res) => {
    const {year} = req.body;

    const months = {
        "January": 0, 
        "February": 0, 
        "March": 0, 
        "April": 0, 
        "May": 0, 
        "June": 0,
        "July": 0, 
        "August": 0, 
        "September": 0, 
        "October": 0, 
        "November": 0, 
        "December": 0
    }

    try{
        const couriers = await courierModel.find();
        let courierDetails = [];
        if(couriers.length > 0){
            couriers.forEach(async(courier) => {
                if(courier.from.getFullYear() === Number(year)){
                    let mnth = courier.from.toLocaleString('default', { month: 'long' });
                    if(mnth in months){
                        months[mnth] += 1;
                    }
                }
            });
        }

        let final = [];
        let colors = ["#395B64", "#A5C9CA", "#D61C4E", "#FEB139", "#CEE5D0", "#1F4690", "#898AA6", "#FFC4C4", "#876445", "#7A4069", "#2C3639", "#3EC70B"];
        let col = 0;

        for(let key in months){
            if(months.hasOwnProperty(key)){
                final.push({
                    label: key,
                    value: months[key],
                    color: colors[col]
                });
                col++;
            }
        }

        res.status(200).json({
            success: true,
            data: final,
            message: 'All Courier for the Year - ' + year
        });

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