import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from 'sweetalert2';
import RenderHtml from "./RenderHtml";


export default function BasicTable() {
  const { id } = useParams();
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState({});
  const navigate=useNavigate();
  const [updatedData, setUpdatedData] = useState({
    title: "",
    answer: "",
  });

  
 
  const fetchAnswer = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/question/${parseInt(id)}/`)
      .then((response) => {
        setQuestions(response.data);
        setAnswers(response.data);
        setUpdatedData({
          title: response.data.title,
          answer: response.data.answer,
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };


  const DeleteAnswer = () => {
    confirmDelete();
  };
  
  const deleteAnswer = () => {
    axios.delete(`${process.env.REACT_APP_BASE_URL}/interview_tracking/question/${id}/`)
      .then((response) => {
        setQuestions({});
        setAnswers({});
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };
  

  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAnswer(); 
        navigate("/questions/id");  
        
      }
    });
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const UpdateAnswer = () => {
  //   axios.patch(`${process.env.REACT_APP_BASE_URL}/interview_tracking/question/${id}/`, updatedData)
  //     .then((response) => {
  //       setQuestions(response.data);
  //       setAnswers(response.data);
  //       Swal.fire({
  //         icon: "success",
  //         title: "Question updated successfully!",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error updating data: ", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Something went wrong while updating the question!",
  //       });
  //     });
  // };

  

  useEffect(() => {
    fetchAnswer();
  }, [id]);
  

  return (
    <>
      <div className="col-lg-12 container" style={{ background: "white" }}>
        <h2 style={{ marginTop: "30px", fontSize: "25px", paddingTop: "30px" }}>
          Questions
        </h2>
        <p style={{ fontSize: "22px" }}>
          {questions && <>{questions.title}</>}
          <div style={{textAlign:"right"}}>

          {/* <EditIcon
            style={{ color: "green", cursor: "pointer" }} onClick={UpdateAnswer}
          /> */}
          <DeleteIcon
            style={{ color: "red", cursor: "pointer" }}
            onClick={DeleteAnswer}
          />
          </div>
        </p>
        <h2 style={{ marginTop: "30px", fontSize: "25px", paddingTop: "30px" }}>
          Answer
        </h2>
        <hr />
        <RenderHtml htmlContent={answers.answer}/>
        <hr />
      </div>
      <div className="col-lg-12  container">
        <h2
          style={{
            marginTop: "30px",
            fontSize: "25px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        ></h2>
        <Comments />
      </div>
    </>
  );
}
