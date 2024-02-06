import LinearChart from "@/components/chart";
import { MonthlyDCAInvestment } from "@/types";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

const mockData: MonthlyDCAInvestment[] = [
  {
    cryptoPortfolio: 0.1,
    date: "2021-01",
    fiatInvestment: 100,
    gain: 0,
    gainPercentage: 0,
    portfolioFiatValue: 150,
    price: 150,
  },
  {
    cryptoPortfolio: 0.2,
    date: "2021-02",
    fiatInvestment: 200,
    gain: 50,
    gainPercentage: 25,
    portfolioFiatValue: 250,
    price: 250,
  },
];

describe("LinearChart Component Tests", () => {
  test("renders without crashing", () => {
    expect(render(<LinearChart data={[]} />)).toMatchSnapshot();
  });

  test("renders chart with data", () => {
    expect(<LinearChart data={mockData} />).toMatchSnapshot();
  });
});
