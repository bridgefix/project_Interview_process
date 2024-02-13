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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../CSS/Upcoming.css";
const UpcomingInterviews = () => {
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const getCards = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`,
        config
      )
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
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ color: "#51585e" }}>UPCOMING INTERVIEWS</span>
        </h4>
        <hr />
        {upcomingInterviews.length > 3 ? (
          <article>
            <div>
              <ul>
                {upcomingInterviews.map((interview, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <img
                        src={img}
                        alt="Businessman working on a laptop"
                        // width="400px"
                        // height="350px"

                        style={{
                          width: "200px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      />
                      <div className="row ">
                        {/* <div className="col-lg-12   col-sm-3 blockimg"></div> */}
                        <div className="col-lg-12  col-sm-9">
                          <div>
                            <AutorenewIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "#51585e",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Round :- {interview.interview_round}
                            </span>
                          </div>
                          <div>
                            <ScheduleIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "coral",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Date :- {interview.date}
                            </span>
                          </div>
                          <div>
                            <AccountCircleIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "#ffc107",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Actual_interview:- {interview.actual_interviewee}
                            </span>
                          </div>
                          <div>
                            <AccountBoxIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "cadetblue",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Interview:- {interview.interviewee}
                            </span>
                          </div>
                          <div>
                            <InterpreterModeIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: -"#dc1f29",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Scheduled by:- {interview.sheduled_by}
                            </span>
                          </div>
                          <div>
                            <LanguageIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "#5f78a0",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Technologies:-{" "}
                              {interview.technology.map((tech, i) => (
                                <span key={i}>
                                  {tech}
                                  {i < interview.technology.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </article>
        ) : (
          <div className="mainCard">
            <div className="ul" style={{display:"flex"}}>
              {/* <ul > */}
                {upcomingInterviews.map((interview, index) => (
                  <React.Fragment key={index}>
                    <div className="li" style={{padding:"20px"}}>
                      <img
                        src={img}
                        alt="Businessman working on a laptop"
                        // width="400px"
                        // height="350px"

                        style={{
                          width: "200px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      />
                      <div className="row ">
                        {/* <div className="col-lg-12   col-sm-3 blockimg"></div> */}
                        <div className="col-lg-12  col-sm-9">
                          <div>
                            <AutorenewIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "#51585e",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Round :- {interview.interview_round}
                            </span>
                          </div>
                          <div>
                            <ScheduleIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "coral",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Date :- {interview.date}
                            </span>
                          </div>
                          <div>
                            <AccountCircleIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "#ffc107",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Actual_interview:- {interview.actual_interviewee}
                            </span>
                          </div>
                          <div>
                            <AccountBoxIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "cadetblue",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Interview:- {interview.interviewee}
                            </span>
                          </div>
                          <div>
                            <InterpreterModeIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: -"#dc1f29",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Scheduled by:- {interview.sheduled_by}
                            </span>
                          </div>
                          <div>
                            <LanguageIcon
                              style={{
                                // width: "100px",
                                // height: "45px",
                                color: "#5f78a0",
                              }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              Technologies:-{" "}
                              {interview.technology.map((tech, i) => (
                                <span key={i}>
                                  {tech}
                                  {i < interview.technology.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              {/* </ul> */}
            </div>
          </div>
        )}
      </div>
      <div className="row"></div>
    </div>
  );
};

export default UpcomingInterviews;
