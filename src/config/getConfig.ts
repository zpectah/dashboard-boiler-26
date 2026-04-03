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
  const url = {
    randomImage: 'https://picsum.photos/1920?random=1&grayscale&blur=2',
  };
  const ui = {
    animation: 350,
  };
  const features = {};

  return {
    meta,
    locales,
    url,
    ui,
    features,
  };
};

export default getConfig;
