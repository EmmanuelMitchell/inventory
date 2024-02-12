import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getRevenue } from "../../API";
import { Card } from "antd";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Order Revenue",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => Math.random() * 1000), //faker.datatype.number({ min: 0, max: 1000 })
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => Math.random() * 1000),
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export default function Chartjs() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = (res) =>
        res.carts.map((cart) => {
          return cart.discountedTotal;
        });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  });
  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />;
    </Card>
  );
}
