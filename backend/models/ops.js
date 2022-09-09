const mongoose = require("mongoose");

const opsSchema = new mongoose.Schema({
    empId: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Employee",
        unique: true,
    },
    fullName: {
        type: String,
        require: true,
        ref: "Employee"
    },
    email: {
        type: String,
        require: true,
        unique: true,
        ref: "Employee"
    },
    username: {
        type: String,
        require: true,
        unique: true,
        ref: "Employee"
    }


}, {timestamps: true});

const Ops = mongoose.model("Ops", opsSchema);
module.exports = Ops;