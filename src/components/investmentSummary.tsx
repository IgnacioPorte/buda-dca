import { Skeleton } from "./ui/skeleton";

import clsx from "clsx";

import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

import { MonthlyDCAInvestment } from "@/types";

export default function investmentSummary({
  data,
}: {
  data: MonthlyDCAInvestment[];
}) {
  return (
    <div className="flex flex-row justify-center gap-5 my-2 flex-wrap">
      {data.length === 0 ? (
        <>
          <Skeleton className="h-24 w-3/4 sm:w-1/4 rounded-xl" />
          <Skeleton className="h-24 w-3/4 sm:w-1/4 rounded-xl" />
          <Skeleton className="h-24 w-3/4 sm:w-1/4 rounded-xl" />
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center border-2 border-gray-1 my-2 p-2 w-3/4 sm:w-1/4">
            <p className="text-2xl">Dinero Invertido</p>
            <p className="text-lg">
              {data[data.length - 1].fiatInvestment.toFixed(2)}
            </p>
          </div>
          <div className="border-2 border-gray-1 my-2 p-1 w-3/4 sm:w-1/4">
            <DoubleArrowRightIcon className="w-10 h-10 mx-auto" />
            <p
              className={clsx("text-sm text-center", {
                "text-green-500": data[data.length - 1].gain > 0,
                "text-red-500": data[data.length - 1].gain < 0,
              })}
            >
              {data[data.length - 1].gain > 0 ? "+" : ""}
              {data[data.length - 1].gain.toFixed(2)}
            </p>{" "}
            <p
              className={clsx("text-sm text-center ", {
                "text-green-500": data[data.length - 1].gain > 0,
                "text-red-500": data[data.length - 1].gain < 0,
              })}
            >
              {data[data.length - 1].gainPercentage.toFixed(2)}%
            </p>
          </div>
          <div className="flex flex-col justify-center border-2 border-gray-1 my-2 p-1 w-3/4 sm:w-1/4">
            <p className="text-2xl">Valor del portafolio</p>
            <p className="text-lg">
              {data[data.length - 1].portfolioFiatValue.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
