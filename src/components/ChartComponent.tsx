import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Title
);

type Props = {
  selectedValue: any;
  selectedDate: any;
};

const ChartComponent = (props: Props) => {
  {
    console.log(props, "Ajasssy");
  }
  const data = {
    labels: props.selectedValue.labels,
    datasets: [
      {
        label: "Sales of the Week",
        data: props.selectedValue.data,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "rgb(255, 99, 132)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    height: 150,
  };

  return (
    <div style={{ transition: "none", padding: "1.5rem 0" }}>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default ChartComponent;
