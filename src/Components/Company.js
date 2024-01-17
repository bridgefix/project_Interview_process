import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Company = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

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
      name: "companylogo",
      label: "COMPANY LOGO",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          return <Avatar variant="rounded" src={value} alt="Comapny Logo" />;
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
          const companyId = data[tableMeta.rowIndex].id;
          return (
            <Link
              to={`/interview/${companyId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>{capitalizedValue}</span>
            </Link>
          );
        },
      },
    },
    {
      name: "contact_email",
      label: "CONTACT_EMAIL",
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
      name: "location",
      label: "LOCATION",
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
      const technologyId = rowData[0];
      console.log(technologyId);
      debugger;
      window.location.href = `/questions/${technologyId}`;
    },
  };

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/interview_tracking/company/`
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

export default Company;
