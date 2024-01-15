import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";

export default function BasicTable() {
  const { id } = useParams();
  const [answers, setAnswers] = useState();
  const [questions,setQuestions]=useState();

  const fetchAnswer = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/question/${id}/`)
      .then((response) => {
        setAnswers(response.data);
        setQuestions(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  console.log(setAnswers);

  useEffect(() => {
    fetchAnswer();
    
  }, [id]);

  return (
    <>
      <div className="col-lg-12 container" style={{ background: "white" }}>
        <h2 style={{ marginTop: "30px", fontSize: "25px", paddingTop: "30px" }}>Questions</h2>
        <p style={{ fontSize: "22px" }}>{questions && <>{questions.title}</>}</p>
        <h2 style={{ marginTop: "30px", fontSize: "25px", paddingTop: "30px" }}>
          Answer
        </h2>
        <hr />
        <p style={{ fontSize: "17px" }}>{answers && <>{answers.answer}</>}</p>
        <hr />
        
      </div>
      <div className="col-lg-12  container">
      <h2 style={{ marginTop: "30px", fontSize: "25px", paddingTop: "10px" ,textAlign:"center"}}>
        </h2>
        <Comments />

          
      </div>
    
       
    </>
  );
}
