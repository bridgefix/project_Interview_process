import React, { useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // const handleLogin = async () => {
  //   const response = await axios.post("http://127.0.0.1:8000/api/login/", {
  //     email: email,
  //     password: password,
  //   });

  // };

  function handleLogin(e) {
    e.preventDefault();
    if (email === "" && password === "") {
      alert("Please Fill Your Email and Password");
    } else if (email === "") {
      alert("Email is Required!Please Fill Your Email");
    } else if (password === "") {
      alert("Password is Required!Please Fill Your Password");
    } else {
      let data = new FormData();

      data.append("email", email);
      data.append("password", password);

      axios
        .post(`http://127.0.0.1:8000/api/login/`, data)
        .then((res) => {
          // window.localStorage.setItem("token", res.data.access);
          Navigate("/dashbroad");
        })
        .catch((err) => {
          console.log(err);
          alert("Your email and password Invalid,please try agian.");
        });
    }
  }

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePassword}
            />
            {/* <Link to="/dashbroad">
              <button onClick={handleLogin}>login</button>
            </Link> */}
            <button className="btn btn-outline-dark" onClick={handleLogin}>
              <Link
                to="/dashbroad"
                style={{ textDecoration: "none" }}
              ></Link>
            login
            </button>

            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
