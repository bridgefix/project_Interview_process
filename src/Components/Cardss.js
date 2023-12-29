import React from "react";

const Cardss = () => {
  const companyName = "Company ABC";
  const jobTitle = "Junior Developer";
  const technology = "React, Node.js";
  const timeAgo = "2 days ago";
  const applied = 25;
  const capacity = 50;

  return (
    <div style={{ marginTop: "30px", marginLeft: "50px" }}>
      <div className="content">
        <div className="container mt-5 mb-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-mailchimp"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">{companyName}</h6> <span>{timeAgo}</span>
                    </div>
                  </div>
                  <div className="badge">
                    <span>{technology}</span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">
                    {jobTitle}
                  </h3>
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
                        {applied} Applied <span className="text2">of {capacity} capacity</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-mailchimp"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">{companyName}</h6> <span>{timeAgo}</span>
                    </div>
                  </div>
                  <div className="badge">
                    <span>{technology}</span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">
                    {jobTitle}
                  </h3>
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
                        {applied} Applied <span className="text2">of {capacity} capacity</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="icon">
                      <i className="bx bxl-mailchimp"></i>
                    </div>
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">{companyName}</h6> <span>{timeAgo}</span>
                    </div>
                  </div>
                  <div className="badge">
                    <span>{technology}</span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">
                    {jobTitle}
                  </h3>
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
                        {applied} Applied <span className="text2">of {capacity} capacity</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardss;
