import { calculateDCAInvestment } from "@/utils/dca";
import { HistoricalPrice, MonthlyDCAInvestment } from "@/types";

describe("calculateDCAInvestment", () => {
  const quantity = 20;
  const data: HistoricalPrice[] = [
    {
      date: "2021-01-01",
      price: 100,
    },
    {
      date: "2021-01-02",
      price: 200,
    },
    {
      date: "2021-01-03",
      price: 400,
    },
  ];

  const expectedDCA: MonthlyDCAInvestment[] = [
    {
      cryptoPortfolio: 0.2,
      date: "2021-01-01",
      fiatInvestment: 20,
      gain: 0,
      gainPercentage: 0,
      portfolioFiatValue: 20,
      price: 100,
    },
    {
      cryptoPortfolio: 0.30000000000000004,
      date: "2021-01-02",
      fiatInvestment: 40,
      gain: 20.000000000000007,
      gainPercentage: 50.00000000000002,
      portfolioFiatValue: 60.00000000000001,
      price: 200,
    },
    {
      cryptoPortfolio: 0.35000000000000003,
      date: "2021-01-03",
      fiatInvestment: 60,
      gain: 80,
      gainPercentage: 133.33333333333331,
      portfolioFiatValue: 140,
      price: 400,
    },
  ];

  const data2: HistoricalPrice[] = [
    {
      date: "2021-01-01",
      price: 100,
    },
    {
      date: "2021-01-02",
      price: 120,
    },
    {
      date: "2021-01-03",
      price: 140,
    },
    {
      date: "2021-01-04",
      price: 160,
    },
    {
      date: "2021-01-05",
      price: 180,
    },
  ];

  const expectedDCA2: MonthlyDCAInvestment[] = [
    {
      cryptoPortfolio: 0.2,
      date: "2021-01-01",
      fiatInvestment: 20,
      gain: 0,
      gainPercentage: 0,
      portfolioFiatValue: 20,
      price: 100,
    },
    {
      cryptoPortfolio: 0.3666666666666667,
      date: "2021-01-02",
      fiatInvestment: 40,
      gain: 4,
      gainPercentage: 10,
      portfolioFiatValue: 44,
      price: 120,
    },
    {
      cryptoPortfolio: 0.5095238095238095,
      date: "2021-01-03",
      fiatInvestment: 60,
      gain: 11.333333333333329,
      gainPercentage: 18.88888888888888,
      portfolioFiatValue: 71.33333333333333,
      price: 140,
    },
    {
      cryptoPortfolio: 0.6345238095238095,
      date: "2021-01-04",
      fiatInvestment: 80,
      gain: 21.52380952380952,
      gainPercentage: 26.904761904761898,
      portfolioFiatValue: 101.52380952380952,
      price: 160,
    },
    {
      cryptoPortfolio: 0.7456349206349207,
      date: "2021-01-05",
      fiatInvestment: 100,
      gain: 34.21428571428572,
      gainPercentage: 34.21428571428572,
      portfolioFiatValue: 134.21428571428572,
      price: 180,
    },
  ];

  it("should return empty array if data is empty", () => {
    const investment = calculateDCAInvestment([], quantity);
    expect(investment).toStrictEqual([]);
  });

  it("Calculate simple DCA", () => {
    const investment = calculateDCAInvestment(data, quantity);
    expect(investment).toStrictEqual(expectedDCA);
  });

  it("Caculate DCA complex", () => {
    const investment = calculateDCAInvestment(data2, quantity);
    expect(investment).toStrictEqual(expectedDCA2);
  });
});
