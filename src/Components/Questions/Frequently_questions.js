import MUIDataTable from 'mui-datatables'
import React from 'react'
import { useParams } from 'react-router-dom';

const Frequently_questions = () => {
    const [rows, setRows] = React.useState([]);
    const { id } = useParams();
    const [questions, setQuestions] = React.useState([]);
    const userRole = "admin";
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
            // customBodyRender: (value) => {
            //   const capitalizedValue =
            //     // value.charAt(0).toUpperCase() + value.slice(1);
            //   // return <span>{capitalizedValue}</span>;
            // },
          },
        },
        {
          name: "type",
          label: "TYPE",
          options: {
            filter: true,
            sort: false,
            customBodyRender: (value) => {
              let color;
              if (value !== undefined && value !== null) {
                switch (value.toLowerCase()) {
                  case "easy":
                    color = "green";
                    break;
                  case "medium":
                    color = "#ffc107";
                    break;
                  case "hard":
                    color = "red";
                    break;
                  default:
                    color = "black";
                    break;
                }
                return <span style={{ color }}>{value}</span>;
              } else {
                return <span style={{ color: "black" }}>Undefined or null</span>;
              }
            },
          },
        },
        {
          name: "company",
          label: "COMPANY",
          options: {
            filter: true,
            sort: false,
            // customBodyRender: (value) => {
    
            //   return (
            //     value && (
            //       <span>{value.charAt(0).toUpperCase()}</span>
            //     )
            //   );
            // },
          },
        },
    
        {
          name: "action",
          label: "ACTION",
          options: {
            customBodyRender: (value, tableMeta) => (
              <>
                {userRole === "admin" && (
                  <>
                    {/* <EditIcon
                      style={{ color: "green", cursor: "pointer", marginRight: 10 }}
                      onClick={() => handleEditClick(tableMeta.rowData[0])}
                      /> */}
    
                    {/* <DeleteIcon
                      style={{
                        color: "red",
                        cursor: "pointer",
                        marginLeft: "20px",
                      }}
                      onClick={(event) =>
                        deleteQuestions(event, tableMeta.rowData[0])
                      }
                    /> */}
                  </>
                )}
              </>
            ),
          },
        },
      ];

      const options = {
        filterType: "checkbox",
        onRowClick: (rowData, rowMeta) => {
          const anserId = rowData[0];
          console.log(anserId);
    
          window.location.href = `/answer/${anserId}`;
        },
      };
      function createData(id, question, type, company, answer) {
        return { id, question, type, company, answer };
      }
    
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
  return (
    <div>
        <MUIDataTable
        title={"Employee List"}
        data={rows}
        columns={columns}
        options={options}
        />
    </div>
  )
}

export default Frequently_questions