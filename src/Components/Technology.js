import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {getResponseTechnology } from "./Redux/Actions/InterviewActions";

const MUItable = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch=useDispatch()
  const interviewData = useSelector((state) => state.interviewData);


  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
        display: "excluded",
      },
    },
    {
      name: "logo",
      label: "TECHNOLOGY LOGO",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return <Avatar variant="rounded" src={value} alt="Technology Logo" />;
        },
      },
    },
    {
      name: "name",
      label: "NAME",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          const technologyId = data[tableMeta.rowIndex].id;
          return (
            <Link
              to={`/questions/${technologyId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>{capitalizedValue}</span>
            </Link>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    onRowClick: (rowData, rowMeta) => {
      const technologyId = rowData[0];
      console.log(technologyId);
    
      window.location.href = `/questions/${technologyId}`;
    },
  };

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/interview_tracking/technology/`
    );
  
    setData(response.data);
  };

  // useEffect(() => {
  //   dispatch(getResponseTechnology(id));
  // }, [dispatch, id]);

    
  useEffect(()=>{
    fetchData()  })
  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default MUItable;
