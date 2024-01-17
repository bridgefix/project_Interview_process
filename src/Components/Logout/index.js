import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Logout() {
  const Navigate = useNavigate();
  const cliked = () => {
    window.localStorage.clear();
    Navigate("/");
  };
  return (
    <div>
      <AccountCircleIcon
        style={{ borderRadius: "30px", backgroundColor: "white" }}
        onClick={cliked}
      />
    </div>
  );
}
