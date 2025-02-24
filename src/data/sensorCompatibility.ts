export interface SensorBrand {
  name: string;
  models: string[];
  interface: string;
}

export const SensorCompatibilityData: SensorBrand[] = [
  {
    name: 'ABB',
    models: ['Optima AO2000'],
    interface: 'Ethernet'
  },
  {
    name: 'Acoem',
    models: ['Orion', '01dB'],
    interface: 'Ethernet'
  },
  {
    name: 'Advantech',
    models: ['ADAM-4017'],
    interface: 'RS485'
  },
  {
    name: 'Alphasense',
    models: ['OPC-N3', 'A4', 'A43F', 'A431 Sensor Modules'],
    interface: 'RS485'
  },
  {
    name: 'Aqualabo',
    models: [
      'Salinity & Conductivity C4E, CTZ',
      'Turbidity NTU',
      'Dissolved Oxygen OPTOD',
      'pH PHEHT',
      'Total Suspended Solids MES5'
    ],
    interface: 'RS485'
  },
  {
    name: 'Davis Instruments',
    models: ['Vantage Pro & Vue Series'],
    interface: 'Weather Station'
  },
  {
    name: 'Delta Ohm',
    models: ['HD52 Series'],
    interface: 'RS485'
  },
  {
    name: 'Envea',
    models: [
      'PM Cairsens Series',
      'IQ-Link PM Cairsens Series',
      'IQ-Link Cairsens Series',
      'Cairsens Series',
      'E-Series Gas Analyzer'
    ],
    interface: 'RS485/Ethernet'
  },
  {
    name: 'Lufft',
    models: ['WS-UMB Series'],
    interface: 'RS485'
  },
  {
    name: 'Vaisala',
    models: ['WXT500 Series'],
    interface: 'RS485'
  }
];