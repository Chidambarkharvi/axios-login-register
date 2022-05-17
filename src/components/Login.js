import React, { useState,useEffect } from "react";
import "./Login.css"
import "bootstrap/dist/css/bootstrap.css";
// import loginpic from "../images/login.jpg"
import { NavLink ,useNavigate} from "react-router-dom";
import axios from "axios"



function Login() {


  const navigate = useNavigate()

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [isEmailValid, setisEmailValid] = useState(false);
  const [emailError, setemailError] = useState("");
  let isValid;
  let isValidPass;
  const [isPasswordValid, setisPasswordValid] = useState(false);
  const [passwordError, setpasswordError] = useState("");



  const [users, setUser] = useState([

  ]);


  useEffect(() => {
    loadUsers();
  }, []);

  
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3005/user"); 
    console.log(result,"result") 
    console.log(result.data,"data") 
    setUser(result.data);
  };



  const loginUser = async (e) => {
    e.preventDefault();
    isValid = validateEmail(email);
    isValidPass = validatePassword(password);

    if (isValid && isValidPass) {
      // loadUsers();

      displayMessage()
   
    }
  };


  const displayMessage = () =>{
    const emailcheck = users.map((user)=> user.email)
    const passcheck = users.map((user)=> user.password)
    
    
 if(     emailcheck.includes(email) &&      passcheck.includes(password) ){
   window.alert("valid user")
   navigate("/home")

 }else{
   alert("invalid user") 
 }
   
  }

  const validateEmail = (email) => {
    const mailexp =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
    if (mailexp.test(email)) {
      setisEmailValid(true);
      setemailError("");
      return true;
    } else {
      setisEmailValid(false);
      setemailError("enter valid email");
      return false;
    }
  };

  const validatePassword = (password) => {
    const passwordExp = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}/;
    if (password.length > 3) {
      setisPasswordValid(true);
      setpasswordError("");
      return true;
    } else {
      setisPasswordValid(false);
      setpasswordError(" enter valid password");
      return false;
    }
  };
  const error = (val) => {
    return true;
  };


 


  return (
    <div>
      <section className="sign-in">
        <div className="container1 mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src=""  alt="login image" />
              </figure>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Login in</h2>

              <form
                method="get"
                className="register-form"
                id="register-form" 
                onSubmit={loginUser}
              >
                <div className="mb-3  form-group">
             
                  <input
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                    value={email}
                    type="email"
                    id="email"
                    title="email"
                    placeholder="Enter email"
                  />
                  {!isEmailValid ? (
                    <span
                      style={{
                        color: "red",
                        display: "block",
                        fontSize: "15px",
                      }}
                    >
                      {emailError}
                    </span>
                  ) : null}
                </div>
                <div className="mb-3 form-group">
             
                  <input
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                    value={password}
                    type="password"
                    title="password"
                    placeholder="Enter password"
                    id="password"
                  />
                  {!isPasswordValid ? (
                    <span
                      style={{
                        color: "red",
                        display: "block",
                        fontSize: "15px",
                      }}
                    >
                      {passwordError}
                    </span>
                  ) : null}
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    onClick={loginUser}
                    title="loginBtn"
                  />
                </div>
                <p className="forgot-password text-center">
                   New user ? <NavLink to="/register"> Register here?</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
   
      </section>
    </div>
  );
}

export default Login;