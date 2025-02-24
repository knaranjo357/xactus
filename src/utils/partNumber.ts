import type { Config } from '../types/partNumber';

export const parsePartNumber = (pn: string): Config => {
  try {
    const parts = pn.split('-');
    if (parts.length !== 8) throw new Error('Formato inválido');

    const [reference, version, gasType, gasCode, particulate, meteorology, noise, communications] = parts;

    let gases = {
      CO: false,
      NO2: false,
      O3: false,
      SO2: false,
      H2S: false,
      NH3: false,
      CO2: false,
      CH4: false
    };

    if (gasType === 'D') {
      if (gasCode === 'D') gases.CO2 = true;
      if (gasCode === 'M') gases.CH4 = true;
    } else {
      const gasCodes = gasCode.split('');
      gases.CO = gasCodes[0] === '1';
      gases.NO2 = gasCodes[1] === '1';
      gases.O3 = gasCodes[2] === '1';
      gases.SO2 = gasCodes[3] === '1';
      gases.H2S = gasCodes[4] === '1';
      gases.NH3 = gasCodes[5] === '1';
    }

    return {
      reference,
      version,
      gasType,
      gases,
      particulate: particulate === 'X' ? '' : particulate,
      meteorology: meteorology === 'X' ? '' : meteorology,
      noise: noise === 'X' ? '' : noise,
      communications: communications === 'X' ? '' : communications
    };
  } catch (err) {
    throw new Error('Número de parte inválido');
  }
};

export const generatePartNumber = (config: Config): string => {
  let gasCode = '';
  if (config.gasType === 'D') {
    gasCode = config.gases.CO2 ? 'D' : (config.gases.CH4 ? 'M' : '--');
  } else {
    gasCode = Object.entries(config.gases)
      .slice(0, 6)
      .map(([_, present]) => present ? '1' : 'X')
      .join('');
  }

  return [
    config.reference,
    config.version,
    config.gasType,
    gasCode,
    config.particulate || 'X',
    config.meteorology || 'X',
    config.noise || 'X',
    config.communications || 'X'
  ].join('-');
};