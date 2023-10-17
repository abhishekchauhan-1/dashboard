import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChartView() {
  const currentMonth = new Date().getMonth();
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [chartData] = useState({
    labels: monthLabels,
    datasets: [
      {
        label: "",
        data: [3, 6, 5, 4, 5, 4, 2, 5, 3, 5, 1, 4, 5],
        backgroundColor: monthLabels.map((_, index) =>
          index === currentMonth ? "#03002e" : "lightgray"
        ),
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Bar data={chartData} options={options}></Bar>
    </>
  );
}

export default ChartView;
