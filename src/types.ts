type HistoricalPrice = {
  price: number;
  date: string;
};

type MonthlyDCAInvestment = {
  price: number;
  date: string;
  fiatInvestment: number;
  cryptoPortfolio: number;
  portfolioFiatValue: number;
  gain: number;
  gainPercentage: number;
};


export type { HistoricalPrice, MonthlyDCAInvestment };