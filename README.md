# EV Charging Simulator

> The EV Charging Simulator models the energy consumption, power demand, and usage patterns of electric vehicle charge points over a year, using probabilistic simulations of vehicle arrivals and charging needs.

## Table of Contents

- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [UI Sketch](#ui-sketch)
- [Folder Tree](#folder-tree)

## Installation

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sominparrrk/ev-charging-simulator.git
   cd ev-charging-simulator
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Running the App

To start the development server:

```bash
yarn start
```

Open http://localhost:3000 with your browser to see the app

## Testing

### Running Tests

To run the tests:

```bash
yarn test
```

## Tech Stack

- React 18
- TypeScript
- Jest
- React Testing Library
- Tailwind CSS
- [Recharts](https://recharts.org/)

## Features

- Calculatation of
  - Total energy consumption in kWh
  - Theoretical maximum power demand
  - Actual maximum power demand (=the maximum sum of all chargepoints powerdemands at a given 15-minute interval)
  - Concurrency factor (The ratio of actual to maximum power demand)
- Visualisation (Chart) of
  - Total energy charged per day per chargepoint
  - The deviation of the concurrency factor

## UI Sketch

![overview](https://github.com/user-attachments/assets/dcfef62b-1fae-4410-9e57-15b47a3b07f2)
![input-area](https://github.com/user-attachments/assets/70fb5a8b-b3f8-444b-822e-bc1833c32f6f)
![output-area](https://github.com/user-attachments/assets/6a37b7a6-bcdc-4a19-b7c0-e83340c854dc)
![visualisation](https://github.com/user-attachments/assets/fd3a7ecd-486b-421e-a7b6-fad9e045997a)

## Folder Tree

```
├── public
│   ├── icons
│   │   ├── charging.svg
│   │   └── down-chevron.svg
│   └── index.html
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.tsx
│   │   ├── ErrorMessage
│   │   │   ├── ErrorMessage.test.tsx
│   │   │   └── ErrorMessage.tsx
│   │   ├── NumberInput
│   │   │   ├── NumberInput.test.tsx
│   │   │   └── NumberInput.tsx
│   │   └── Select
│   │       ├── Select.test.tsx
│   │       └── Select.tsx
│   ├── containers
│   │   ├── InputArea
│   │   │   ├── Form
│   │   │   │   └── Form.tsx
│   │   │   └── InputArea.tsx
│   │   ├── OutputArea
│   │   │   └── OutputArea.tsx
│   │   └── VisualisationArea
│   │       ├── Chart
│   │       │   ├── ConcurrencyDeviation.tsx
│   │       │   └── ValuesPerChargePoint.tsx
│   │       └── VisualisationArea.tsx
│   ├── context
│   │   ├── ConcurrencyContext.tsx
│   │   └── SimulationContext.tsx
│   ├── hooks
│   │   └── useWindowSize.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── lib
│   │   ├── arrivalProbabilitiesData.ts
│   │   ├── chargingDemandProbabilitiesData.ts
│   │   └── defaultMockData.ts
│   ├── pages
│   │   └── Main.tsx
│   ├── setupTests.ts
│   ├── types
│   │   └── simulator.ts
│   └── utils
│       ├── simulateCharging.test.ts
│       └── simulateCharging.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── yarn.lock
```
