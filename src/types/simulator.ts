export type ArrivalProbability = { hour: number; probability: number };

export type ChargingDemandProbability = { probability: number; km: number };

export type SimulatorInput = {
  numberOfChargePoints: number;
  arrivalProbability: number;
  consumptionOfCars: number;
  chargingPowerPerChargePoint: number;
};
