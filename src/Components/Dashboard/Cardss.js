import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getResponseInterview } from "../Redux/Actions/InterviewActions";
import { useParams } from "react-router-dom";

const Cardss = () => {
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);

  const getCards = () => {
    axios
      .get("https://api.bridgefix.co/api/interview_tracking/interview/")
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
    <div style={{ marginTop: "30px", marginLeft: "50px" }}>
      <div className="content">
        <div className="container mt-5 mb-3">
          <div className="row">
            {upcomingInterviews.map((interview, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          <i className="bx bxl-mailchimp"></i>
                        </div>
                        <div className="ms-2 c-details">
                          <h6 className="mb-0">
                            <span>
                              <b>UpComingInterviews</b>
                            </span>
                            <br />
                            <br />
                            Round:- {interview.interview_round}
                            <br />
                            <br />
                            Date:-{interview.date}
                            <br />
                            <br />
                            Actual_interview:_{interview.actual_interviewee}
                            <br />
                            <br />
                            Interviewee:-{interview.interviewee}
                          </h6>
                          <span></span>
                        </div>
                      </div>
                      <div className="badge">
                        <span>{interview.interviewer}</span>
                      </div>
                    </div>
                    {/* <div className="mt-5">
                      <h3 className="heading">{interview.interview_mode}</h3>
                      <div className="mt-5">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${(applied / capacity) * 100}%` }}
                            aria-valuenow={applied}
                            aria-valuemin={0}
                            aria-valuemax={capacity}
                          ></div>
                        </div>
                        <div className="mt-3">
                          <span className="text1">
                            {applied} Applied{" "}
                            <span className="text2">
                              of {capacity} capacity
                            </span>
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardss;
