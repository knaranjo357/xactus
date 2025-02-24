interface GasSpec {
  range: string;
  resolution: string;
  detectionLimit: string;
}

interface GasModule {
  maxSensors: string;
  gases: Record<string, GasSpec>;
}

interface ParticulateSpec {
  range: string;
  resolution: string;
  precision: string[];
}

interface MeteoSpec {
  range: string;
  resolution: string;
  precision: string;
}

interface MeteoModule {
  parameters: Record<string, MeteoSpec>;
}

export const GasModules: Record<string, GasModule> = {
  'A': { // Alphasense
    maxSensors: 'Hasta 4 sensores',
    gases: {
      'CO': {
        range: '0-500 ppm',
        resolution: '20 ppb',
        detectionLimit: '20 ppb'
      },
      'NO2': {
        range: '0-20 ppm',
        resolution: '10 ppb',
        detectionLimit: '15 ppb'
      },
      'O3': {
        range: '0-20 ppm',
        resolution: '10 ppb',
        detectionLimit: '15 ppb'
      },
      'SO2': {
        range: '0-20 ppm',
        resolution: '20 ppb',
        detectionLimit: '15 ppb'
      },
      'H2S': {
        range: '0-5 ppm',
        resolution: '20 ppb',
        detectionLimit: '5 ppb'
      }
    }
  },
  'B': { // EC-Sense
    maxSensors: 'Hasta 7 sensores',
    gases: {
      'CO': {
        range: '0-10 ppm',
        resolution: '10 ppb',
        detectionLimit: '100 ppb'
      },
      'NO2': {
        range: '0-5 ppm',
        resolution: '1 ppb',
        detectionLimit: '50 ppb'
      },
      'O3': {
        range: '0-5 ppm',
        resolution: '1 ppb',
        detectionLimit: '10 ppb'
      },
      'SO2': {
        range: '0-5 ppm',
        resolution: '1 ppb',
        detectionLimit: '50 ppb'
      },
      'H2S': {
        range: '0-2 ppm',
        resolution: '10 ppb',
        detectionLimit: '-'
      },
      'NH3': {
        range: '0-10 ppm',
        resolution: '10 ppb',
        detectionLimit: '-'
      }
    }
  },
  'D': { // Senva
    maxSensors: 'Depende de la configuración',
    gases: {
      'CH4': {
        range: '0-50% LEL',
        resolution: '1% LEL',
        detectionLimit: '1% LEL'
      },
      'CO2': {
        range: '0-2000 ppm',
        resolution: '1 ppm',
        detectionLimit: '-'
      }
    }
  },
  'C': { // Membrapor
    maxSensors: 'Hasta 4 sensores',
    gases: {
      'CO': {
        range: '0-200 ppm',
        resolution: '100 ppb',
        detectionLimit: '100 ppb'
      },
      'NO2': {
        range: '0-20 ppm',
        resolution: '100 ppb',
        detectionLimit: '100 ppb'
      },
      'O3': {
        range: '0-5 ppm',
        resolution: '50 ppb',
        detectionLimit: '50 ppb'
      },
      'SO2': {
        range: '0-20 ppm',
        resolution: '100 ppb',
        detectionLimit: '100 ppb'
      },
      'H2S': {
        range: '0-50 ppm',
        resolution: '100 ppb',
        detectionLimit: '100 ppb'
      },
      'NH3': {
        range: '0-100 ppm',
        resolution: '500 ppb',
        detectionLimit: '500 ppb'
      }
    }
  }
};

export const ParticulateModules: Record<string, ParticulateSpec> = {
  'P': { // Plantower
    range: '0-500 µg/m³ (0.3-1 µm, 1-2.5 µm, 2.5-10 µm)',
    resolution: '1 µg/m³',
    precision: [
      '±10% para 100-500 µg/m³',
      '±10 µg/m³ para 0-100 µg/m³'
    ]
  },
  'S': { // Sensirion
    range: '0-1000 µg/m³ (0.3-1 µm, 0.3-2.5 µm, 0.3-4 µm, 0.3-10 µm)',
    resolution: '1 µg/m³',
    precision: ['±5 µg/m³ para 0-100 µg/m³']
  }
};

export const MeteoModules: Record<string, MeteoModule> = {
  'D': { // Davis
    parameters: {
      'Temperatura': {
        range: '-40 a 65 °C',
        resolution: '0.1 °C',
        precision: '±0.3 °C'
      },
      'Humedad': {
        range: '0-100%',
        resolution: '1%',
        precision: '±2%'
      },
      'Presión': {
        range: '540-1100 hPa',
        resolution: '0.1 hPa',
        precision: '±1 hPa'
      },
      'Precipitación': {
        range: '0-999.8 mm',
        resolution: '0.2 mm',
        precision: '±3%'
      },
      'Radiación Solar': {
        range: '0-1800 W/m²',
        resolution: '1 W/m²',
        precision: '±5%'
      },
      'Radiación UV': {
        range: '0-199 MEDs; 0-16 Índice',
        resolution: '0.1 MEDs/Índice',
        precision: '±5%'
      },
      'Dirección del Viento': {
        range: '1-360°',
        resolution: '1°',
        precision: '±3°'
      },
      'Velocidad del Viento': {
        range: '0-89 m/s',
        resolution: '0.4 m/s',
        precision: '±0.9 m/s'
      }
    }
  },
  'R': { // Rika
    parameters: {
      'Temperatura': {
        range: '-40 a 80 °C',
        resolution: '0.1 °C',
        precision: '±0.5 °C'
      },
      'Humedad': {
        range: '0-100%',
        resolution: '1%',
        precision: '±5%'
      },
      'Presión': {
        range: '300-1100 hPa',
        resolution: '0.1 hPa',
        precision: '±1 hPa'
      },
      'Precipitación': {
        range: '0-200 mm/h',
        resolution: '0.1 mm',
        precision: '±5%'
      },
      'Radiación Solar': {
        range: '0-2000 W/m²',
        resolution: '0.1 W/m²',
        precision: '±5%'
      },
      'Dirección del Viento': {
        range: '0-359°',
        resolution: '1°',
        precision: '±3°'
      },
      'Velocidad del Viento': {
        range: '0-70 m/s',
        resolution: '0.1 m/s',
        precision: '±3%'
      }
    }
  },
  'C': { // Chao
    parameters: {
      'Temperatura': {
        range: '-30 a 70 °C',
        resolution: '0.1 °C',
        precision: '±0.2 °C'
      },
      'Humedad': {
        range: '0-100%',
        resolution: '0.10%',
        precision: '±2%'
      },
      'Presión': {
        range: '600-1100 hPa',
        resolution: '0.1 hPa',
        precision: '±0.5 hPa'
      },
      'Radiación UV': {
        range: '0-200 W/m²',
        resolution: '0.1 W/m²',
        precision: '±1%'
      }
    }
  }
};

export const NoiseModule = {
  range: '30-130 dB',
  frequency: '31.5 Hz - 8 kHz',
  precision: '±3 dB'
};