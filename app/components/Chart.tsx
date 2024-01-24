"use client";
import React from "react";
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
import { faker } from "@faker-js/faker";

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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Tasks created and Tasks closed",
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Tasks Created",
      data: labels.map(() => faker.number.int({ min: 0, max: 10 })),
      backgroundColor: "#730437",
    },
    {
      label: "Tasks Closed",
      data: labels.map(() => faker.number.int({ min: 0, max: 20 })),
      backgroundColor: "#F90C71",
    },
  ],
};

const Chart = () => {
  return <Bar options={options} data={data} />;
};

export default Chart;
