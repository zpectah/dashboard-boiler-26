import packages from '../../package.json';
import type { Config } from '../types';

const getConfig = (): Config => {
  const meta = {
    name: 'zpecter homepage',
    description: 'Personalized browser homepage with customization options',
    version: packages.version,
  };
  const locales = {
    available: ['en'],
    default: 'en',
  };

  return {
    meta,
    locales,
  };
};

export default getConfig;
