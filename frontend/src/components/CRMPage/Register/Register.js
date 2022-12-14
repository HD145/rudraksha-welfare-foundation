import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./Register.module.css";
// import Home from "../Home/Home";
import CRMNavbar from "../CRMNavbar/CRMNavbar"
import "./formReg.css"
import styles1 from "./Login.module.css";
import logo from "../Reports/logo";


const Register = () => {
  const [data,setData]=useState({
    empId:"",
    password:""
  })
  const [error, setError] = useState("");
  const [btndisable, setDisable] = useState(false);

  const navigate = useHistory();

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("rudraksha"))) {
  //     navigate.push("/crm");
  //   }
  // }, []);



  const handleSubmit = async (e) => {
    // e.preventDefault();
    setError("");
    setDisable(true);
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/createEmployeeCredentials`,
    data,
    {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("rudraksha")
        )}`,
      },
    }
    ).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      setDisable(false);
      console.log(error);
      setError(error.message);
    })
  };
  const upData=(e)=>{
e.preventDefault();
setData({
    ...data,
    [e.target.name]:e.target.value
})
  }
  return (
    <>
    <CRMNavbar/>
    {/* <div className={styles.login__main} className="mt-5">
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <h3>Register</h3>

        <div className="mb-3">
          <label>Employee Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Id"
            name="empId"
            value={data.empId}
            onChange={upData}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={data.password}
            onChange={upData}
          />
        </div>

        <div className="d-grid mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={btndisable}
          >
            Submit
          </button>
        </div>
       
    
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </div> */}

    <div className="container-fluid" style={{"height":"100vh", "backgroundImage":`url("https://www.cio.com/wp-content/uploads/2021/12/it-security_lock_cybersecurity_breach_alignment-100801286-orig.jpg?quality=50&strip=all&w=1024")`, "background-repeat": "no-repeat","background-size":"cover" }}>
    <div className="container">
    <div className={styles1.login__main}>
      <form className={styles1.login__form} onSubmit={handleSubmit} style={{"margin-top":"5rem"}}>
        <div className="container"style={{"display":"flex"}}>
          <img src={require('../../../Images/LogoLoad.jpeg')} style={{'width':"5rem" ,"margin-left":"-2rem"}}></img>
        <h3 style={{"margin":"21px"}}><u className="my-2">REGISTRATION</u></h3>
        </div>
      <hr></hr>
        <div className="mb-3">
          <label>Enter Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="empId"
            value={data.empId}
            onChange={upData}
          />
        </div>

        <div className="mb-3">
          <label>Enter Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={data.password}
            onChange={upData}
          />
        </div>

        <div className="d-grid mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={btndisable}
          >
            Submit
          </button>
        </div>
       
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};
export default Register;
