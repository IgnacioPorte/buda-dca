import { useEffect, useState } from "react";

import { Skeleton } from "./ui/skeleton";

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { MonthlyDCAInvestment } from "@/types";

import Bitcoin from "@/assets/bitcoin.png";
import Fiat from "@/assets/money.png";

Chart.register(...registerables);

function LinearChart({ data }: { data: MonthlyDCAInvestment[] }) {
  const [pointImageBitcoin, setPointImage] = useState<HTMLImageElement | null>(
    null,
  );
  const [pointImageFiat, setPointFiat] = useState<HTMLImageElement | null>(
    null,
  );

  useEffect(() => {
    const imgBitcoin = new Image(16, 16);
    imgBitcoin.onload = () => setPointImage(imgBitcoin);
    imgBitcoin.src = Bitcoin;
    const imgFiat = new Image(16, 16);
    imgFiat.onload = () => setPointFiat(imgFiat);
    imgFiat.src = Fiat;
  }, []);

  const labels = data.map((item: MonthlyDCAInvestment) => item.date);
  const fiatInvestmentData = data.map(
    (item: MonthlyDCAInvestment) => item.fiatInvestment,
  );
  const portfolioFiatValueData = data.map(
    (item: MonthlyDCAInvestment) => item.portfolioFiatValue,
  );

  const visData = {
    labels,
    datasets: [
      {
        label: "Valor del portafolio",
        data: portfolioFiatValueData,
        borderColor: "#F7B86B",
        backgroundColor: "rgba(247, 184, 107, 0.5)",
        yAxisID: "y",
        pointStyle: () => {
          if (pointImageBitcoin) {
            return pointImageBitcoin;
          }
          return "circle";
        },
      },
      {
        label: "Monto invertido",
        data: fiatInvestmentData,
        borderColor: "#48C99E",
        backgroundColor: "rgba(72, 201, 158, 0.5)",
        yAxisID: "y",
        pointStyle: () => {
          if (pointImageFiat) {
            return pointImageFiat;
          }
          return "circle";
        },
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

  return (
    <div className="md:w-2/3 w-full flex flex-col items-center">
      {data.length === 0 ? (
        <Skeleton className="h-full w-full rounded-xl" />
      ) : (
        <Line data={visData} options={options} style={{ minHeight: 400 }} />
      )}
    </div>
  );
}

export default LinearChart;
