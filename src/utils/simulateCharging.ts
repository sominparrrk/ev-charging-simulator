import { arrivalProbabilitiesData } from '../lib/arrivalProbabilitiesData';
import { chargingDemandProbabilitiesData } from '../lib/chargingDemandProbabilitiesData';

export const DEFAULT_NUM_CHARGEPOINTS = 20;
export const DEFAULT_CHARGE_POWER = 11; // kW
export const DEFAULT_CHARGING_NEEDS = 18; // kWh
export const DEFAULT_MULTIPLIER = 100; // %

const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = HOURS_IN_DAY * 60;
const TICKS_PER_DAY = MINUTES_IN_DAY / 15; // 96 ticks
const TOTAL_TICKS = TICKS_PER_DAY * 365; // 35040 ticks

export const getArrivalProbability = (
  hour: number,
  arrivalProbabilityMultiplier: number
) => {
  const arrivalProbability = arrivalProbabilitiesData.find(
    (a) => a.hour === hour
  );
  const multipliedArrivalProbability = arrivalProbability
    ? arrivalProbability.probability * (1 + arrivalProbabilityMultiplier / 100)
    : 0;
  return multipliedArrivalProbability;
};

export const getChargingDemandProbability = () => {
  const random = Math.random();
  let cumulativeProbability = 0;
  for (const demand of chargingDemandProbabilitiesData) {
    cumulativeProbability += demand.probability;
    if (random <= cumulativeProbability) {
      return demand.km;
    }
  }
  return 0;
};

export const simulateCharging = (
  numChargepoints: number,
  arrivalProbabilityMultiplier: number,
  chargePower: number,
  chargingNeeds: number
) => {
  const theoreticalMaxPowerDemand = numChargepoints * chargePower;
  let totalEnergyConsumed = 0; // kWh
  let actualMaxPowerDemand = 0; // kW
  let chargePoints = Array(numChargepoints).fill(0);

  for (let tick = 0; tick < TOTAL_TICKS; tick++) {
    const currentHour = Math.floor((tick % TICKS_PER_DAY) / 4);

    chargePoints = chargePoints.map((timer) => Math.max(0, timer - 1));

    let currentPowerDemand = 0;

    for (let i = 0; i < chargePoints.length; i++) {
      if (
        chargePoints[i] === 0 &&
        Math.random() <
          getArrivalProbability(currentHour, arrivalProbabilityMultiplier)
      ) {
        const kmToCharge = getChargingDemandProbability();
        if (kmToCharge > 0) {
          const energyNeededKWh = (kmToCharge / 100) * chargingNeeds; // 18 kWh / 100 km
          const chargingTimeTicks = Math.ceil(
            (energyNeededKWh / chargePower) * 4
          );
          totalEnergyConsumed += energyNeededKWh;
          chargePoints[i] = chargingTimeTicks;
          currentPowerDemand += chargePower;
        }
      }
    }

    if (currentPowerDemand > actualMaxPowerDemand) {
      actualMaxPowerDemand = currentPowerDemand;
    }
  }

  const concurrencyFactor =
    (actualMaxPowerDemand / theoreticalMaxPowerDemand) * 100;

  return {
    totalEnergyConsumed,
    theoreticalMaxPowerDemand,
    actualMaxPowerDemand,
    concurrencyFactor,
  };
};

// Task 1: Run the simulation for 20 chargepoints
const result = simulateCharging(
  DEFAULT_NUM_CHARGEPOINTS,
  DEFAULT_MULTIPLIER,
  DEFAULT_CHARGE_POWER,
  DEFAULT_CHARGING_NEEDS
);
console.log(
  `Total Energy Consumed: ${result.totalEnergyConsumed.toFixed(2)} kWh`
);
console.log(
  `Theoretical Max Power Demand: ${result.theoreticalMaxPowerDemand} kW`
);
console.log(`Actual Max Power Demand: ${result.actualMaxPowerDemand} kW`);
console.log(`Concurrency Factor: ${result.concurrencyFactor.toFixed(2)} %`);

// Bonus: Run the simulation for 1 to 30 chargepoints
// When the number of chargepoints increases, the concurrency factor tends to decrease
for (let i = 1; i <= 30; i++) {
  const { concurrencyFactor } = simulateCharging(
    i,
    DEFAULT_MULTIPLIER,
    DEFAULT_CHARGE_POWER,
    DEFAULT_CHARGING_NEEDS
  );
  console.log(
    `Chargepoints: ${i}, Concurrency Factor: ${concurrencyFactor.toFixed(2)} %`
  );
}
