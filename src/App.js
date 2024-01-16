import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./Components/Table";

import "./App.css";
import Technology from "./Components/Technology";
import Company from "./Components/Company";
import Interview from "./Components/Interview";
// import Details from "./Components/Details";

import Dashbroad from "./Components/Dashbroad";
import Questionstable from "./Components/Questionstable";
import DrawerAppBar from "./Components/Nabarr";

import Answerr from "./Components/Answerr";

import Signin from "./Components/Signin.js";

import MUItable from "./Components/MUItable.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="row">
          {/* <div className="col-sm-2">
            <Sidebar />
          </div> */}
          <div className="col-sm-12">
            {/* <Navbar /> */}
            <DrawerAppBar />
            <Routes>
            
              <Route path="/" element={<Signin />} />
             
              <Route path="/dashbroad" element={<Dashbroad />} />
              {/* <Route path="/" element={<Ptable/>}/> */}
              <Route path="/table" element={<Table />}></Route>
              {/* <Route path="/ptable/:id" element={<Ptable />}></Route> */}
              <Route path="/technology" element={<Technology />} />
              <Route path="/company" element={<Company />} />

              <Route path="/interview/:id" element={<Interview />} />
              {/* <Route path="/questions/:id" element={<MUItable />} />/ */}
              {/* <Route path="/details" element={<Details/>}/> */}
              <Route path="/questions/:id" element={<Questionstable />} />/
              <Route path="/answer/:id" element={<Answerr />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
