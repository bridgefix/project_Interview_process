import React from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

class Donutchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
              },
            },
          },
        },
        colors: ["#2962ff", "#ffc107","#61dbfb"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };

    this.loadData();
  }

  async loadData() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/interview_tracking/dashbord/"
      );
      const data = response.data;
      const labels = data.question_count.map((item) => item.technology__name);
      const series = data.question_count.map((item) => item.count);

      this.setState({
        series: series,
        options: {
          ...this.state.options,
          labels: labels,
        },
      });

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={480}
        />
      </div>
    );
  }
}

export default Donutchart;
