const randomArray = Array.from(
  { length: 20 },
  () => Math.floor(Math.random() * (30 - 5 + 1)) + 5
);

export const defaultMockData = {
  totalEnergyConsumed: Math.random() * 10000,
  theoreticalMaxPowerDemand: Math.random() * 100,
  actualMaxPowerDemand: Math.random() * 10,
  concurrencyFactor: Math.random() * 10,
  dailyUsagePerChargePoint: [randomArray],
};
