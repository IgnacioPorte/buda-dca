import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Skeleton } from "./ui/skeleton";

import clsx from "clsx";

import { MonthlyDCAInvestment } from "@/types";

function dcaTable({ data }: { data: MonthlyDCAInvestment[] }) {
  return (
    <div className="flex flex-col gap-2 md:w-2/3 w-full min-h-56">
      {data.length === 0 ? (
        <Skeleton className="h-full w-full rounded-xl" />
      ) : (
        <Table>
          <TableCaption className="bg-gray-50 text-center p-4 text-sm text-primary">
            Resultados
          </TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-center text-sm font-bold text-primary tracking-wider">
                Fecha
              </TableHead>
              <TableHead className="text-center text-sm font-bold text-primary tracking-wider">
                Monto invertido
              </TableHead>
              <TableHead className="text-center text-sm font-bold text-primary tracking-wider">
                Valor del portafolio
              </TableHead>
              <TableHead className="text-center text-sm font-bold text-primary tracking-wider">
                Ganancia
              </TableHead>
              <TableHead className="text-center text-sm font-bold text-primary tracking-wider">
                Porcentaje de ganancia
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {data.map((item: MonthlyDCAInvestment, index: number) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="whitespace-nowrap text-sm text-primary">
                  {item.date.substring(0, 7)}
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-primary">
                  $ {item.fiatInvestment.toFixed(2)}
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-primary">
                  $ {item.portfolioFiatValue.toFixed(2)}
                </TableCell>
                <TableCell
                  className={clsx(
                    "whitespace-nowrap text-sm",
                    item.gain < 0 ? "text-red-500" : "text-green-500",
                  )}
                >
                  {item.gain.toFixed(2)}
                </TableCell>
                <TableCell
                  className={clsx(
                    "whitespace-nowrap text-sm",
                    item.gainPercentage < 0 ? "text-red-500" : "text-green-500",
                  )}
                >
                  {item.gainPercentage.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default dcaTable;
