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
        categories: ["manish", "Anand", "Dependra", "monika"],
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
          // options: {
          //   ...prevChartData.options,
          //   xaxis: {
          //     categories: data.categories || [],
          //   },
          // },
        };
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    finalresult();
  }, []);

  console.log(chartData.options);

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
