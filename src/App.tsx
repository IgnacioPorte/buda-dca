import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/datePicker";
import { Button } from "./components/ui/button";
import Chart from "@/components/chart";
import Table from "./components/dcaTable";
import InvestmentSummary from "@/components/investmentSummary";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

import { getBTCCLPPriceForDates } from "@/api/trades";

import { startOfMonth, subMonths } from "date-fns";
import { calculateDCAInvestment } from "./utils/dca";
import clsx from "clsx";

import Bitcoin from "@/assets/bitcoin.png";
import "./App.css";

import { MonthlyDCAInvestment } from "@/types";

function App() {
  const [startDate, setStartDate] = useState(
    startOfMonth(subMonths(new Date(), 12)),
  );
  const [endDate, setEndDate] = useState(startOfMonth(new Date()));
  const [quantity, setQuantity] = useState(10000);
  const [data, setData] = useState<MonthlyDCAInvestment[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const { toast } = useToast();

  const showToast = (message: string) => {
    toast({
      variant: "destructive",
      duration: 4000,
      title: message,
    });
  };

  async function fetchPricesAndCalculateDCA() {
    if (quantity <= 0) {
      return showToast("Por favor ingresa una cantidad positiva.");
    }

    if (startDate >= endDate) {
      return showToast(
        "La fecha de inicio debe ser anterior a la fecha de término.",
      );
    }
    setIsFetching(true);
    try {
      const prices = await getBTCCLPPriceForDates(startDate, endDate);
      setData(calculateDCAInvestment(prices, quantity));
    } catch (error) {
      showToast("Error al obtener los datos, por favor intenta nuevamente.");
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchPricesAndCalculateDCA();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-5">
        <img
          src={Bitcoin}
          alt="Bitcoin"
          className={clsx("w-20 h-20", { "animate-spin": isFetching })}
        />
        <h1 className="text-4xl font-bold text-center my-5">
          DCA Crypto Calculadora 🚀
        </h1>
      </div>

      <InvestmentSummary data={data} />
      <div className="flex flex-row justify-center gap-10 flex-wrap mt-2">
        <div className="my-10 flex flex-col gap-2 md:w-1/4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-lg  text-left">Cantidad invertida en Bitcoin</p>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-lg text-center">$</p>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <p>
                <span className="text-lg  text-left">CLP</span>
              </p>
            </div>
          </div>

          <p className="text-lg  text-left">Fecha de inicio</p>
          <DatePicker selectedDate={startDate} onDateChange={setStartDate} />

          <p className="text-lg  text-left">Fecha de fin</p>
          <DatePicker selectedDate={endDate} onDateChange={setEndDate} />

          <Button
            onClick={fetchPricesAndCalculateDCA}
            className="mt-5"
            disabled={isFetching}
          >
            Calcular
          </Button>
        </div>
        <Chart data={data} />
        <Table data={data} />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
