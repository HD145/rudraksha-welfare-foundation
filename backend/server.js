const express = require("express");
const app = express();
const cors = require("cors");
// const recordRoutes= require('../backend/routes/api');
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/api"));

// app.use('/RMSData', recRoutes);

// get driver connection
// const dbo = require("./database/connection");
// const recordRoutes = require("./routes/api");
// app.use("/RMSData", recordRoutes);

//routes for crm page
const employeeRoutes = require("./routes/employee");
const vendorRoutes = require("./routes/vendor");
const eventRoutes = require("./routes/event");
const costsheetRoutes = require("./routes/costsheet");
const loginRoutes = require("./routes/login");
const receptionRoutes = require("./routes/reception");
const attendanceRoutes = require("./routes/attendance");
const leaveRoutes = require("./routes/Lms");
app.use("/api/employee", employeeRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/costsheet", costsheetRoutes);
app.use("/api/", loginRoutes);
app.use("/api", require("./routes/admin.routes"));
app.use("/api/reception", receptionRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/lms", leaveRoutes);
//http://localhost:5000/api/employees/getEmployees

app.use("/api/reports", require("./reports/employeeDetails"))

const ConnectDB = require("./database/connection");
//connection to db
ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Not Connected to database");
  });
