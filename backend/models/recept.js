const mongoose = require("mongoose");

const receptSchema = new mongoose.Schema({
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

const Recept = mongoose.model("Recept", receptSchema);
module.exports = Recept;