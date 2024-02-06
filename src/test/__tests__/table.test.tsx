import Table from "@/components/dcaTable";
import { test, expect, describe } from "vitest";
import { MonthlyDCAInvestment } from "@/types";
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

describe("Table Component Tests", () => {
  test("renders without crashing", () => {
    expect(render(<Table data={[]} />)).toMatchSnapshot();
  });

  test("renders chart with data", () => {
    const table = render(<Table data={mockData} />);
    expect(table).toMatchSnapshot();
    expect(table.getByText("2021-01")).toBeDefined();
    expect(table.getByText("25.00%")).toBeDefined();
  });
});
