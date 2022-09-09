const Employee = require("../models/employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Username and password are mandatory fields!");
    } else {

      const emp = await Employee.findOne({ username });

      if (!emp) {
        throw new Error("No employee with that username!");
      }

      const passwordMatch = await bcrypt.compare(password, emp.password);
      
      if (!passwordMatch) {
        throw new Error("Passwords doesn't match!");
      }

      const token = jwt.sign(
        { username: emp.email, id: emp._id },
        process.env.secret
      );

      res.status(200).json({
        success: true,
        token: token,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
      message: "Something went wrong, try again later!",
    });
  }
};

const createEmployeeCredentials = async (req, res, next) => {
  try {
    const { empId, password } = req.body;
    if (!empId || !password) {
      return res.json({
        success: false,
        error: "Employee Id and password are mandatory fields",
        message: "Something went wrong, try again later!",
      });
    }
    const result = await Employee.findByIdAndUpdate(
      empId,
      {
        password: await bcrypt.hash(password, 12),
      },
      {
        new: true,
      }
    );
    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error.message,
      message: "Something went wrong, try again later!",
    });
  }
};

module.exports = {
  signIn,
  createEmployeeCredentials,
};
