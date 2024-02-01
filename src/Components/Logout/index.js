import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Logout() {
  const Navigate = useNavigate();
  const cliked = () => {
    window.localStorage.clear();
    Navigate("/");
  };
  return (
    <div>
      <button  style={{ border:"none",backgroundColor:"#477dad",color:"white" }}
        onClick={cliked}>Logout</button>
    </div>
  );
}
