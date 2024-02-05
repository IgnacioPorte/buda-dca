import client from "./index";
import { differenceInMonths, startOfMonth } from "date-fns";

async function getBTCCLPPriceForDates(startDate: Date, endDate: Date) {
  const months = differenceInMonths(
    startOfMonth(endDate),
    startOfMonth(startDate)
  );
  const prices = [];

  for (let i = 0; i <= months; i++) {
    const date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
    const timestamp = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12
    );
    const url = "/markets/btc-clp/trades";
    const params = { timestamp, limit: 1 };
    const response = await client.get(url, { params });
    prices.push({
      date: date.toISOString().split("T")[0],
      price: response.data.trades.entries[0][2],
    });
  }
  return prices;
}

export { getBTCCLPPriceForDates };
