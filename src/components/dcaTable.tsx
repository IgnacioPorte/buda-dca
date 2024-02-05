import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function dcaTable({ data }: any) {
  return (
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
        {data.map((item: any, index: number) => (
          <TableRow key={index} className="hover:bg-gray-50">
            <TableCell className="whitespace-nowrap text-sm text-primary">
              {item.date.substring(0, 7)}
            </TableCell>
            <TableCell className="whitespace-nowrap text-sm text-primary">
              {item.fiatInvestment.toFixed(2)}
            </TableCell>
            <TableCell className="whitespace-nowrap text-sm text-primary">
              {item.portfolioFiatValue.toFixed(2)}
            </TableCell>
            <TableCell className="whitespace-nowrap text-sm text-primary">
              {item.gain.toFixed(2)}
            </TableCell>
            <TableCell className="whitespace-nowrap text-sm text-primary">
              {item.gainPercentage.toFixed(2)}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default dcaTable;