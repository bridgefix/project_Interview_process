import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from 'sweetalert2'

function Modals(props) {
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [company, setCompany] = useState([]);
  const [selectCompany, setSelectCompany] = useState("");
  const [interview, setInterview] = useState([]);
  const [selectInterview, setSelectInterview] = useState("");
  const [technology, setTechnology] = useState([]);
  const [selectTechnology, setSelectTechnology] = useState("");

  const handleClose = () => {
    setShow(false);
    setQuestion("");
    setAnswer("");
    setCompany("");
    setTechnology("");
    setInterview("");
    setSelectedOption("");
  };

  const DataPost = async () => {
    const payload = {
      title: question,
      answer: answer,
      difficulty: selectedOption,
      company: selectCompany,
      interview: [parseInt(selectCompany)],
      technology: [parseInt(selectTechnology)],
    };
    props.DataPostFun(payload);

    // try {
    //   const response = await axios.post(
    //     `${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`,
    //     payload
    //   );
    //   handleClose();
    //   fetchQuestions();
    // } catch (error) {
    //   console.error("Error posting data: ", error);
    // }
  };

  useEffect(() => {
    if (props.dataPostState) {
      handleClose();
    }
  }, [props.dataPostState]);

  const fetchQuestions = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/question/`)
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const fetchInterview = () => {
    debugger
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`)
      .then((response) => {
        console.log("Interview data:", response.data);
        setInterview(response.data);
        debugger
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const fetchCompany = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/company/`)
      .then((response) => {
        console.log("Company data:", response.data);
        setCompany(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const fetchTechnology = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`)
      .then((response) => {
        console.log("Company data:", response.data);
        setTechnology(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    fetchInterview();
    fetchCompany();
    fetchTechnology();
    fetchQuestions();
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  // const handleSaveChanges = () => {
  //   const payload = {
  //     question: question,
  //     answer: answer,
  //     company: selectCompany,
  //     interview: selectInterview,
  //     technology: selectTechnology,
  //   };
  // };

  const staticOptions = [
    { value: "HARD", label: "HARD" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "EASY", label: "EASY" },
  ];

  return (
    <>
      <Button
        style={{
          backgroundColor: "whitesmoke",
          borderRadius: "ridge",
          color: "black",
        }}
        onClick={handleShow}
      >
        Add Questions
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD QUESTIONS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ModalForm.ControlInput1">
              <Form.Label>Questions</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Questions"
                autoFocus
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Type</Form.Label>
              <Form.Control
                as="select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">Select an option</option>
                {staticOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Company</Form.Label>
              <Form.Control
                as="select"
                value={selectCompany}
                onChange={(e) => setSelectCompany(e.target.value)}
              >
                <option value="">Select an option</option>
                {company.length > 0 &&
                  company.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Technology</Form.Label>
              <Form.Control
                as="select"
                value={selectTechnology}
                onChange={(e) => setSelectTechnology(e.target.value)}
              >
                <option value="">Select an option</option>
                {technology.length > 0 &&
                  technology.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <br />
             
            <Form.Group>
              <Form.Label>Select interview</Form.Label>
              <Form.Control
                as="select"
                value={selectInterview}
                onChange={(e) => setSelectInterview(e.target.value)}
                >
                <option value="">Select an option</option>

                {interview.length > 0 &&
                  interview.map((option) => (
                
                    <option key={option.id} value={option.id}>
                      {option.company}
                    </option>
                  ))}
                  
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={DataPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
