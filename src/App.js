import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Technology from "./Components/Technology";
import Company from "./Components/Company";
import Interview from "./Components/Interview";

import Dashbroad from "./Components/Dashboard/Dashbroad.js";
import Questionstable from "./Components/Questions/Questionstable.js";
import DrawerAppBar from "./Components/Nabarr";

import Answerr from "./Components/Questions/Answerr.js";

import Signin from "./Components/Signin.js";
import Questionsaddd from "./Components/Questions/Questionsaddd.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="row">
          <div className="col-sm-12">
            <DrawerAppBar />
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/dashbroad" element={<Dashbroad />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/company" element={<Company />} />
              <Route path="/interview/:id" element={<Interview />} />
              <Route path="/questions/:id" element={<Questionstable />} />/
              <Route path="/answer/:id" element={<Answerr />} />
              <Route path="/questionsadd" element={<Questionsaddd/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
