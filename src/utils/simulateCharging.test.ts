import { chargingDemandProbabilitiesData } from '../lib/chargingDemandProbabilitiesData';
import {
  DEFAULT_CHARGE_POWER,
  DEFAULT_CHARGING_NEEDS,
  DEFAULT_MULTIPLIER,
  DEFAULT_NUM_CHARGEPOINTS,
  getArrivalProbability,
  simulateCharging,
} from './simulateCharging';

describe('simulateCharging function', () => {
  it('should return expected result for 20 chargepoints', () => {
    const result = simulateCharging(
      DEFAULT_NUM_CHARGEPOINTS,
      DEFAULT_MULTIPLIER,
      DEFAULT_CHARGING_NEEDS,
      DEFAULT_CHARGE_POWER
    );

    expect(result.theoreticalMaxPowerDemand).toBe(
      DEFAULT_NUM_CHARGEPOINTS * DEFAULT_CHARGE_POWER
    );
    expect(result.actualMaxPowerDemand).toBeLessThanOrEqual(
      result.theoreticalMaxPowerDemand
    );
    expect(Math.floor(result.concurrencyFactor)).toBeGreaterThanOrEqual(35);
    expect(Math.floor(result.concurrencyFactor)).toBeLessThanOrEqual(55);
    expect(result.actualMaxPowerDemand).toBeGreaterThanOrEqual(77);
    expect(result.actualMaxPowerDemand).toBeLessThanOrEqual(121);
  });

  it('should calculate arrival probability correctly', () => {
    const mockHour = 0;
    const probabilityWithoutMultiply = getArrivalProbability(mockHour, 0);
    const probabilityWithMultiply = getArrivalProbability(mockHour, 100);

    expect(probabilityWithoutMultiply).toBe(0.0094);
    expect(probabilityWithMultiply).toBe(0.0188);
  });

  it('should calculate charging demand probability correctly', () => {
    const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.3);
    const chargingDemand = chargingDemandProbabilitiesData.find(
      (d) => d.km === 100
    );

    expect(chargingDemand?.km).toBe(100);
    randomSpy.mockRestore();
  });
});
