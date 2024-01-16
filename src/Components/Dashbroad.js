import React from "react";
import Apexchart from "./Apexchart";
import Donutchart from "./Donutchart";
import Cardss from "./Cardss";

const Dashbroad = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Cardss />
        </div>
      </div>
      <div style={{ marginTop: "30px", marginLeft: "100px" }}>
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <Apexchart />
          </div>
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <Donutchart />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px", marginLeft: "100px" }}>
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            {/* <ApexChart/> */}
          </div>
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <Donutchart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbroad;
