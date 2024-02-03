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
import { DatePicker } from "@/components/ui/datePicker";

function App() {
  return (
    <>
      <img src={Bitcoin} alt="Bitcoin" className="animate-spin w-20 h-20 mx-auto my-10" />

      <h1 className="text-4xl font-bold text-center">DCA Crypto Calculadora</h1>
      <h2 className="text-2xl text-center my-10">
        Rendimiento histórico del DCA al comprar Bitcoin (BTC) mensualmente con
        2 US Dollar durante los últimos 1095 días.
      </h2>
      <div>{/* dinero invertido */}</div>
      <div>
        <div className="my-10 w-1/5 flex flex-col gap-2">
          <h3 className="text-lg  text-left">Criptomoneda</h3>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bitcoin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Bitcoin</SelectItem>
              <SelectItem value="dark">Ethereum</SelectItem>
              <SelectItem value="system">Litecoin</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg  text-left">Cantidad</h3>
            <div className="flex flex-row">
              <Input type="number" placeholder="0.00" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">USD</SelectItem>
                  <SelectItem value="dark">EUR</SelectItem>
                  <SelectItem value="system">MXN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <h3 className="text-lg  text-left">Frecuencia</h3>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Mensual" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Mensual</SelectItem>
              <SelectItem value="dark">Semanal</SelectItem>
              <SelectItem value="system">Diario</SelectItem>
            </SelectContent>
          </Select>

          <h3 className="text-lg  text-left">Fecha de inicio</h3>

          <DatePicker />

          <h3 className="text-lg  text-left">Fecha de fin</h3>
          <DatePicker />
        </div>
        <div className="w-1/2">{/* chart */}</div>
      </div>
    </>
  );
}

export default App;
