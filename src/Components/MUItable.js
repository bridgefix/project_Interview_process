import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const MUItable = () => {
  const [rows, setRows] = React.useState([]);
  const { id } = useParams();
  const [companies, setCompanies] = React.useState([]);
  const [selectedCompany, setSelectedCompany] = React.useState("");
  const [technologies, setTechnologies] = React.useState([]);
  const [selectedTechnology, setSelectedTechnology] = React.useState(
    id == "id" ? "" : id
  );
  const [questions, setQuestions] = React.useState([]);

  const columns = [
    {
      name: "id",
      label: "NAME",
      options: {
        filter: true,
        sort: true,
        display: "excluded",
      },
    },
    {
      name: "question",
      label: "QUESTIONS LIST",
      options: {
        filter: true,
        sort: true,
        // customBodyRender: (value) => {
        //   return <Avatar variant="rounded" src={value} alt="Comapny Logo" />;
        // },
      },
    },
    {
      name: "type",
      label: "TYPE",
      options: {
        filter: true,
        sort: false,
        // customBodyRender: (value, tableMeta) => {
        //   const companyId = data[tableMeta.rowIndex].id;
        //   return (
        //     <Link
        //       to={`/interview/${companyId}`}
        //       style={{ textDecoration: "none", color: "black" }}
        //     >
        //       {value}
        //     </Link>
        //   );
        // },
      },
    },
    {
      name: "company",
      label: "COMPANY",
      options: {
        filter: true,
        sort: false,
      
      },
    },
   
    

  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const anserId = rowData[0];
      console.log(anserId);
      debugger;
      window.location.href = `/answer/${anserId}`;
    },
  };

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     "http://127.0.0.1:8000/api/interview_tracking/company/"
  //   );
  //   setData(response.data);
  // };
  const handleChangeCompany = (event) => {
    setSelectedCompany(event.target.value);
  };

  
function createData(id,question, type, company, answer) {
  return {id, question, type, company, answer };
}

  const fetchTechnologies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/technology/"
      );
      setTechnologies(response.data);
    } catch (error) {
      console.error("Error fetching technologies:", error);
    }
  };
  const handleChangeTecchnology = (event) => {
    setSelectedTechnology(event.target.value);
    fetchData(selectedCompany, event.target.value);
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/company/"
      );
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
    fetchCompanies();
    fetchTechnologies();
    setSelectedTechnology(id == "id" ? "" : id);
  }, [id]);

  const fetchData = async () => {
    try {
      let response;
      if (selectedTechnology !== "") {
        response = await axios.get(
          `http://127.0.0.1:8000/api/interview_tracking/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
        );
      } else {
        response = await axios.get(
          `http://127.0.0.1:8000/api/interview_tracking/question/?company_id=${selectedCompany}`
        );
      }

      if (selectedCompany === null) {
        if (id === "id") {
          if (selectedTechnology === null) {
            // ;
            response = await axios.get(
              "http://127.0.0.1:8000/api/interview_tracking/question/"
            );
          } else {
            // ;
            response = await axios.get(
              `http://127.0.0.1:8000/api/interview_tracking/question/?technology_id=${selectedTechnology}`
            );
          }
        } else {
          if (selectedTechnology === null) {
            // ;
            response = await axios.get(
              `http://127.0.0.1:8000/api/interview_tracking/question/?technology_id=${id}`
            );
          } else {
            // ;
            response = await axios.get(
              `http://127.0.0.1:8000/api/interview_tracking/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
            );
          }
        }
      } else {
        if (selectedTechnology === null) {
          // ;
          response = await axios.get(
            `http://127.0.0.1:8000/api/interview_tracking/question/?company_id=${selectedCompany}`
          );
        } else {
          // ;
          response = await axios.get(
            `http://127.0.0.1:8000/api/interview_tracking/question/?company_id=${selectedCompany}&technology_id=${selectedTechnology}`
          );
        }
      }
      setQuestions(
        response.data.map((item) => ({
          id: item.id,
          question: item.title,
          answer: item.answer,
          type: item.difficulty,
          company: item.company,
        }))
      );
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  React.useEffect(() => {
    setRows(
      questions.map((question) =>
        createData(
          question.id,
          question.question,
          question.type,
          question.company
        )
      )
    );
  }, [questions]);

  React.useEffect(() => {
    fetchData(selectedCompany, selectedTechnology);
  }, [selectedCompany, selectedTechnology]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div  className="container">
        <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{ marginTop: "30px", marginLeft: "50px" }}
      >
        <InputLabel id="demo-select-small-label">Company</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedCompany}
          label="Company"
          onChange={handleChangeCompany}
        >
          <MenuItem value="">{/* <em>None</em> */}</MenuItem>
          {companies.map((company) => (
            <MenuItem key={company.id} value={company.id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        style={{ marginTop: "30px", marginLeft: "50px" }}
      >
        <InputLabel id="demo-select-small-label">Technology</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedTechnology}
          label="Company"
          onChange={handleChangeTecchnology}
        >
          <MenuItem value="">{/* <em>None</em> */}</MenuItem>
          {technologies.map((technology) => (
            <MenuItem key={technology.id} value={technology.id}>
              {technology.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <MUIDataTable
        title={"Employee List"}
        data={rows}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default MUItable;