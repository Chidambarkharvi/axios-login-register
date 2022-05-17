import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Reg.css";

function Register() {
  const navigate = useNavigate();
  const id = uuidv4();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password == cpassword) {
      const user = {
        name: name,
        email: email,
        password: password,
        cpassword: cpassword,
        id: id,
      };
      console.log(user, "user");
      await axios.post("http://localhost:3005/user", user);
      alert("successfully registered")
      navigate("/"); 
        } else {
      alert("password and cpassword must be same");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>

        <div className="form-group">
          <input
            onChange={(e) => setname(e.target.value)}
            name="name"
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <input
            onChange={(e) => setemail(e.target.value)}
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <input
            onChange={(e) => setpassword(e.target.value)}
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <input
            onChange={(e) => setcpassword(e.target.value)}
            name="cpassword"
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <NavLink to="/">log in?</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;