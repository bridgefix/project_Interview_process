import React from "react";
import ReactApexChart from "react-apexcharts";
function Apexchart() {
  const series = [
    {
      name: "pass",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "fail",
      data: [10, 56, 35, 51, 49, 62, 69, 91],
    },
  ];
  const options = {
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
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#F3F3F3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width="500"
      />
    </div>
  );
}

export default Apexchart;
