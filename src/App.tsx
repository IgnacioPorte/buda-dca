import "./App.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Bitcoin from "@/assets/bitcoin.png";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/datePicker";
import { getBTCCLPPriceForDates } from "@/api/trades";
import { useEffect, useState } from "react";
import { subMonths, startOfMonth } from "date-fns";
import { Button } from "./components/ui/button";
import { calculateDCAInvestment } from "./utils/dca";

function App() {
  const [selectedCrypto, setCrypto] = useState("Bitcoin");
  const [currency, setCurrency] = useState("CLP");
  const [frequency, setFrequency] = useState("Mensual");
  const [startDate, setStartDate] = useState(
    startOfMonth(subMonths(new Date(), 6))
  );
  const [endDate, setEndDate] = useState(startOfMonth(new Date()));
  const [quantity, setQuantity] = useState(10000);
  const [data, setData] = useState<any[]>([]);

  const calculate = async () => {
    const prices = await getBTCCLPPriceForDates(startDate, endDate);
    setData(calculateDCAInvestment(prices, quantity));
  };

  useEffect(() => {
    calculate();
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-5">
        <img src={Bitcoin} alt="Bitcoin" className="animate-spin w-20 h-20" />
        <h1 className="text-4xl font-bold text-center my-5">
          DCA Crypto Calculadora
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-10 flex-wrap mt-2">
        <div className="my-10 flex flex-col gap-2 md:w-1/4 w-full">
          <p className="text-lg  text-left">Criptomoneda</p>
          <Select value={selectedCrypto} onValueChange={setCrypto}>
            <SelectTrigger>
              <SelectValue placeholder="Bitcoin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bitcoin">Bitcoin</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col gap-2">
            <p className="text-lg  text-left">Cantidad</p>
            <div className="flex flex-row">
              <Input
                type="number"
                placeholder="10000"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger>
                  <SelectValue placeholder="CLP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CLP">CLP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="text-lg  text-left">Frecuencia</p>
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger>
              <SelectValue placeholder="Mensual" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mensual">Mensual</SelectItem>
            </SelectContent>
          </Select>

          <p className="text-lg  text-left">Fecha de inicio</p>
          <DatePicker selectedDate={startDate} onDateChange={setStartDate} />

          <p className="text-lg  text-left">Fecha de fin</p>
          <DatePicker selectedDate={endDate} onDateChange={setEndDate} />

          <Button onClick={calculate}>Calcular</Button>
        </div>
      </div>
    </>
  );
}

export default App;
