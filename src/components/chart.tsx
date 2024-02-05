import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { MonthlyDCAInvestment } from "@/types";

Chart.register(...registerables);

function chart({ data }: { data: MonthlyDCAInvestment[] }) {
  const labels = data.map((item: MonthlyDCAInvestment) => item.date);
  const fiatInvestmentData = data.map((item: MonthlyDCAInvestment) => item.fiatInvestment);
  const portfolioFiatValueData = data.map(
    (item: MonthlyDCAInvestment) => item.portfolioFiatValue
  );

  const visData = {
    labels,
    datasets: [
      {
        label: "Monto invertido",
        data: fiatInvestmentData,
        borderColor: "#48C99E",
        backgroundColor: "rgba(72, 201, 158, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Valor del portafolio",
        data: portfolioFiatValueData,
        borderColor: "#F7B86B",
        backgroundColor: "rgba(247, 184, 107, 0.5)",
        yAxisID: "y",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "$ CLP",
        },
      },
    },
  };

  return <Line data={visData} options={options} style={{ minHeight: 400 }} />;
}

export default chart;
