// import React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { MDBDataTable } from "mdbreact";
// import ReactReadMoreReadLess from "react-read-more-read-less";

// const CustomTable = () => {

//   const accordionData = [
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is java?",
//       answer: "Java JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is Python?",
//       answer: "python is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is Java?",
//       answer: "Java is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//   ];

//   const tableData = {

//     columns: [
//       {
//         label: "Questions",
//         field: "name",
//         sort: "asc",
//         width: 150,
//       },
//     ],
//     rows: accordionData.map((item, index) => ({
//       name: (
//         <Accordion key={index}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index + 1}a-content`}
//             id={`panel${index + 1}a-header`}
//           >
//             <Typography>{item.question}</Typography>
//           </AccordionSummary>

//           <AccordionDetails>
//             <ReactReadMoreReadLess
//               charLimit={20}
//               readMoreText={"Read more ▼"}
//               readLessText={"Read less ▲"}
//             >
//               {item.answer}
//             </ReactReadMoreReadLess>
//           </AccordionDetails>
//         </Accordion>
//       ),
//       position: item.answer,
//     })),
//   };

//   return (
//     <div style={{ marginTop: "30px", marginLeft: "50px" }}>
//         <h3 style={{display:"flex",alignItems:"center"}}>Details</h3>
//       <MDBDataTable striped bordered small data={tableData} />
//     </div>
//   );
// };

// export default CustomTable;

import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MDBDataTable } from "mdbreact";
import ReactReadMoreReadLess from "react-read-more-read-less";
import axios from "axios";

const CustomTable = () => {
  const [companies, setCompanies] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");

  useEffect(() => {
    axios.get('https://your-api-url/companies')
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching companies:', error);
      });

    axios.get('https://your-api-url/technologies')
      .then((response) => {
        setTechnologies(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching technologies:', error);
      });
  }, []);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
   
  };

  const handleTechnologyChange = (event) => {
    setSelectedTechnology(event.target.value);
   
  };

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
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="company">Company:</label>
        <select id="company" onChange={handleCompanyChange} value={selectedCompany}>
          <option value="">Select a company</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
        <label htmlFor="technology" style={{ marginLeft: "10px" }}>Technology:</label>
        <select id="technology" onChange={handleTechnologyChange} value={selectedTechnology}>
          <option value="">Select a technology</option>
          {technologies.map((technology, index) => (
            <option key={index} value={technology}>
              {technology}
            </option>
          ))}
        </select>
      </div>
      <h3 style={{ display: "flex", alignItems: "center" }}>Details</h3>
      <MDBDataTable striped bordered small data={tableData} />
    </div>
  );
};

export default CustomTable;
