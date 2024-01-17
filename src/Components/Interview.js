import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";

import axios from "axios";
import { useDispatch } from "react-redux";
import { getResponseId } from "./Redux/Actions/InterviewActions";

const MUItable = () => {
  const dispatch = useDispatch();
  
  const columns = [
    {
      name: "interview_round",
      label: "INTERVIEW_ROUND",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "result",
      label: "RESULT",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          const color = value.toLowerCase() === "pass" ? "green" : "red";
          return <span style={{ color }}>{capitalizedValue}</span>;
        },
      },
    },

    {
      name: "actual_interviewee",
      label: "ACTUAL_INTERVIEW",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          // Check if value is not null or undefined before accessing 'charAt'
          const capitalizedValue = value ? value.toUpperCase():""
          return <span>{capitalizedValue}</span>;
        },
      },
    }
,    
    {
      name: "interviewee",
      label: "INTERVIEW",
      options: {
        filter: true,
        sort: false,
        // customBodyRender: (value) => {
        //   const capitalizedValue =
        //     value.toUpperCase() + value.slice(1);
        //   return <span>{capitalizedValue}</span>;
        // },
      },
    },
    {
      name: "technology",
      label: "TECHNOLOGY",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return value.map((tech, i) => <Chip key={i} label={tech} />);
        },
      },
    },

    {
      name: "interviewer",
      label: "INTERVIEWER",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },

    {
      name: "feedback",
      label: "FEEDBACK",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },

    {
      name: "remark",
      label: "REMARK",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "interview_mode",
      label: "INTERVIEW_MODE",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "date",
      label: "DATE",
      options: {
        filter: true,
        sort: false,
        // customBodyRender: (value) => {
        //   const capitalizedValue =
        //     value.charAt(0).toUpperCase() + value.slice(1);
        //   return <span>{capitalizedValue}</span>;
        // },
      },
    },
    {
      name: "created_at",
      label: "CREATED_AT",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
    {
      name: "updated_at",
      label: "UPDATED_AT",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          return <span>{capitalizedValue}</span>;
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const interviewId = rowData[0];
      if (interviewId) {
        window.location.href = `/questions/id`;
      }
    },
  };

  const handlechipDelete = () => {
    debugger;
  };
  useEffect(()=>{
    console.log(process.env.REACT_APP_BASE_URL)
  })
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    let response;
    if (id === "id") {
      response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/`
      );
    } else {
      response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/interview_tracking/interview/?company_id=${id}`
      );
    }
    setData(response.data);
    console.log("response :", response.data);
  };

  // const localId = window.localStorage.getItem("id");

  // useEffect(() => {
  //     dispatch(getResponseId(localId))
  // }, [localId]);

  useEffect(()=>{
    fetchData()
  })

  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default MUItable;
