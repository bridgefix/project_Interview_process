import React from "react";
import Donutchart from "./Donutchart";
import Cardss from "./Cardss";
import ApexChart from "./Apexchart";
import UpcomingInterviews from "./UpcomingInterviews";

const Dashbroad = () => {
  return (
    <div className="container" style={{marginTop:"60px"}}>
      <div className="row">
        <div className="col-lg-12">
          {/* <Cardss /> */}
          
        <UpcomingInterviews/>
        </div>

      </div>
      <div style={{ marginTop: "30px", marginLeft: "100px" }}>
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <ApexChart />
          </div>
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <Donutchart />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px", marginLeft: "100px" }}>
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            {/* <Donutchart /> */}
          </div>
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            {/* <ApexChart /> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashbroad;
