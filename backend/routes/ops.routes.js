const express = require('express');
const router = express.Router();
const Ops = require("../models/ops");
const Recept = require("../models/recept");
const Employee = require("../models/employee");
const {onlyAdmin} = require("../middlewares/auth")

router.post("/createOps", async(req, res) => {
    const {empId} = req.body;
    try {
        const emp = await Employee.findOne({_id: empId});
        const ops = await Ops.findOne({empId});

        if(emp){
            if(!ops){
                const newOps = new Ops({
                    empId,
                    email: emp.email,
                    fullName: emp.firstname + " " + emp.middlename + " " + emp.lastname,
                    username: emp.username
                });
                const saveOps = await newOps.save();
                res.status(201).json({
                    success: true,
                    data: saveOps,
                    message: "Ops Created !!"
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: "Ops Already exists",
                    message: "Try Adding another"
                })
            }
        } else {
            res.status(400).json({
                success: false,
                data: `No Employee Found with ID: ${empId}`,
                message: "Wrong Employee ID !!"
            })
        }
        
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            data: "Something went wrong",
            message: "Something went wrong"
        })
    }
});

router.post("/createRecept", async(req, res) => {
    const {empId} = req.body;
    try {
        const emp = await Employee.findOne({_id: empId});
        const recept = await Recept.findOne({empId});

        if(emp){
            if(!recept){
                const newRecept = new Recept({
                    empId,
                    email: emp.email,
                    fullName: emp.firstname + " " + emp.middlename + " " + emp.lastname,
                    username: emp.username
                });
                const saveRecept = await newRecept.save();
                res.status(201).json({
                    success: true,
                    data: saveRecept,
                    message: "Recept Created !!"
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: "Recept Already exists",
                    message: "Try Adding another"
                })
            }
        } else {
            res.status(400).json({
                success: false,
                data: `No Employee Found with ID: ${empId}`,
                message: "Wrong Employee ID !!"
            })
        }
        
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            data: "Something went wrong",
            message: "Something went wrong"
        })
    }
})

module.exports = router;