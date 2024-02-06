import React, { useEffect, useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import LanguageIcon from "@mui/icons-material/Language";
import img from "../Images/business-man-in-a-suit-working-on-laptop-vector-16226678-removebg-preview.png";
import axios from "axios";
// import img1 from '../Images/Screenshot_2024-02-05_125219-removebg-preview.png'/

const UpcomingInterviews = () => {
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const getCards = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`,config)
      .then((response) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const upcomingInterviewsData = response.data.filter(
          (interview) => new Date(interview.date) >= today
        );
        setUpcomingInterviews(upcomingInterviewsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <div className="row">
        <h4 style={{display:"flex",justifyContent:"center"}}><span style={{color:"#51585e"}}>UPCOMING INTERVIEWS</span></h4><hr/>
        
        {upcomingInterviews.map((interview, index) => (
          <React.Fragment key={index}>
            <div className="col-lg-4">
              <img
                src={img}
                alt="Businessman working on a laptop"
                height="350px"
                width="auto"
              />
            </div>
            <div
              className="col-lg-8"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <AutorenewIcon
                  style={{
                    width: "100px",
                    height: "45px",
                    paddingLeft: "40px",
                    marginTop: "20px",
                    marginLeft: "-125px",
                    color: "#51585e",
                  }}
                />
                Round:-{interview.interview_round}
              </div>
              <div>
                <ScheduleIcon
                  style={{
                    width: "100px",
                    height: "45px",
                    marginLeft: "-50px",
                    color: "coral",
                  }}
                />
                Date:-{interview.date}
              </div>
              <div>
                <AccountCircleIcon
                  style={{
                    width: "100px",
                    height: "45px",
                    marginLeft: "-12px",
                    color: "#ffc107",
                  }}
                />
                Actual_interview:-{interview.actual_interviewee}
              </div>
              <div>
                <AccountBoxIcon
                  style={{
                    width: "100px",
                    height: "45px",
                    marginLeft: "-12px",
                    color: "cadetblue",
                  }}
                />
                Interview:-{interview.interviewee}
              </div>
              <div>
                <InterpreterModeIcon
                  style={{
                    width: "100px",
                    height: "45px",
                    marginLeft: "-50px",
                    color: -"#dc1f29",
                  }}
                />
                Scheduled by:-{interview.sheduled_by}
              </div>
              <div>
                <LanguageIcon
                  style={{
                    width: "100px",
                    height: "45px",
                    marginLeft: "-92px",
                    color: "#5f78a0",
                  }}
                />
                Technologies:{" "}
                {interview.technology.map((tech, i) => (
                  <span key={i}>
                    {tech}
                    {i < interview.technology.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UpcomingInterviews;
