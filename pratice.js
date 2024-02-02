// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// function Apexchart() {

//   const [chartData, setChartData] = useState({
//     series: [],
//     options: {
//       chart: {
//         height: 350,
//         type: "line",
//         zoom: {
//           enabled: false,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "straight",
//       },
//       title: {
//         text: "Employee Results by Month",
//         align: "left",
//       },
//       grid: {
//         row: {
//           colors: ["#F3F3F3", "transparent"],
//           opacity: 0.5,
//         },
//       },
//       xaxis: {
//         categories: ["jan","feb","marc","april","may","june","july","agust","sept","oct"," nove","dec"],
//       },
//     },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/interview_tracking/dashbord/");
//         const data = response.data;

//         const passData = data.result_percentage.map((item) => item.pass_percentage);
//         const failData = data.result_percentage.map((item) => item.fail_percentage);

  
//         setChartData({
//           series: [
//             { name: "pass", data: passData },
//             { name: "fail", data: failData },
//           ],
//           options: {
//             ...chartData.options,
//             xaxis: {
//               categories: data.categories,
//             },
//           },
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); 

//   const [options,setOptions] = useState([]);
//   const [series,setSeries] = useState([]);

//   useEffect(()=>{
//     // var { options, series } = chartData;
//     setOptions(chartData.options);
//     setSeries(chartData.series);
//   },[])

//   // debugger

//   return (
//     <div>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="bar"
//         width="500"
//       />
//     </div>
//   );
// }

// export default Apexchart;


import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function Apexchart() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "pass",
        data: [],
      },
      {
        name: "fail",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Employee results by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#F3F3F3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["jan", "feb", "march"],
      },
    },
  });

  const finalresult = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/dashbord/"
      );
      const data = response.data;
      console.log("data is:-", data);
      const passData = data.result_percentage?.map(
        (item) => item.pass_percentage
      );
      const failData = data.result_percentage?.map(
        (item) => item.fail_percentage
      );

      setChartData((prevChartData) => {
        console.log("Previous Chart Data:", prevChartData);
        return {
          ...prevChartData,
          series: [
            { name: "pass", data: passData },
            { name: "fail", data: failData },
          ],
          options: {
            ...prevChartData.options,
            xaxis: {
              categories: data.categories || [],
            },
          },
        };
      });
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    finalresult();
  }, []);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      />
    </div>
  );
}

export default Apexchart;
