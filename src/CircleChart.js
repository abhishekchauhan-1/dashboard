import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function CircleChart() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Custumers",
        data: [1, 4, 2],
        backgroundColor: [ "#FB607F","#1AA7EC" ,"grey"], // Use "rgba" to set the black color with transparency
        borderWidth: 3, 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    cutout: 90, // Adjust the cutout value to make the inner circle thinner
  };

  const textCenter = {
    id: "textCenter",
    beforeDraw: (chart) => {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      ctx.restore();

      const fontSize = (height / 200).toFixed(2); // Adjust the font size as needed
      ctx.font = `bold ${fontSize}em 'Poppins', sans-serif`;
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // Adjust the transparency and color
      ctx.textBaseline = "middle";

      const text1 = "68%";
      const text2 = "Total New";
      const text3 = "Customers";
      const textX1 = Math.round((width - ctx.measureText(text1).width) / 2);
      const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
      const textX3 = Math.round((width - ctx.measureText(text3).width) / 2);
      const textY = height / 2;

      ctx.fillText(text1, textX1, textY - 15); 
      ctx.fillText(text2, textX2, textY + 10);
      ctx.fillText(text3, textX3, textY + 28);
      ctx.save();
    },
  };

  return (
    <div style={{ width: "75%", height: "75%", padding: "15%",paddingTop:"15%",position:"absolute"}}>
      <Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>
    </div>
  );
}

export default CircleChart;
