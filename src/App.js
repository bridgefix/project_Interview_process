import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./Components/Table";
import Ptable from "./Components/Ptable";
import './App.css'
import Technology from "./Components/Technology";
import Company from "./Components/Company";
import Interview from "./Components/Interview";
import Details from "./Components/Details";

import Dashbroad from "./Components/Dashbroad";
import Questionstable from "./Components/Questionstable";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashbroad/>}/>
              <Route path="/table" element={<Table />}></Route>
              <Route path="/ptable/:id" element={<Ptable />}></Route>
              <Route path="/technology" element={<Technology/>}/>
              <Route path="/company" element={<Company/>}/>
              <Route path="/interview/:id" element={<Interview/>}/>
              <Route path="/details" element={<Details/>}/>
              <Route  path="/questions/:id" element={<Questionstable/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
