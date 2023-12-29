import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MDBDataTable } from "mdbreact";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Details = () => {

  const accordionData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is java?",
      answer: "Java JavaScript library for building user interfaces.",
    },
    {
      question: "What is Python?",
      answer: "python is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Java?",
      answer: "Java is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
  ];

  const tableData = {

    columns: [
      {
        label: "Questions",
        field: "name",
        sort: "asc",
        width: 150,
      },
    ],
    rows: accordionData.map((item, index) => ({
      name: (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <ReactReadMoreReadLess
              charLimit={20}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
              {item.answer}
            </ReactReadMoreReadLess>
          </AccordionDetails>
        </Accordion>
      ),
      position: item.answer,
    })),
  };

  return (
    <div style={{ marginTop: "30px", marginLeft: "50px" }}>
        <h3 style={{display:"flex",alignItems:"center"}}>Details</h3>
      <MDBDataTable striped bordered small data={tableData} />
    </div>
  );
};

export default Details;
