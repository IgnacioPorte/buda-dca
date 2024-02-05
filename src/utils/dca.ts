const calculateDCAInvestment = (data: any, quantity: number) => {
  data.sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  let fiatInvestment = 0;
  let cryptoPortfolio = 0;
  let portfolioFiatValue = 0;
  let gain = 0;
  let gainPercentage = 0;

  const result = data.map((d: any) => {
    fiatInvestment += quantity;
    cryptoPortfolio += quantity / d.price;
    portfolioFiatValue = cryptoPortfolio * d.price;
    gain = portfolioFiatValue - fiatInvestment;
    gainPercentage = (gain / fiatInvestment) * 100;
    return {
      price: d.price,
      date: d.date,
      fiatInvestment,
      cryptoPortfolio,
      portfolioFiatValue,
      gain,
      gainPercentage,
    };
  });
  return result;
};

export { calculateDCAInvestment };
