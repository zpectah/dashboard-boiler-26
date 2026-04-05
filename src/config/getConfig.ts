import packages from '../../package.json';
import type { Config } from '../types';

const getConfig = (): Config => {
  const meta = {
    name: 'zpecter homepage',
    description: 'Personalized browser homepage with customization options',
    version: packages.version,
    since: 2008,
  };
  const locales = {
    available: ['en'],
    default: 'en',
  };
  const url = {
    randomImage: 'https://picsum.photos/1920?random=1&grayscale&blur=2',
    openMeteo: 'https://api.open-meteo.com/v1/forecast',
  };
  const links = [
    {
      url: 'https://zpecter.com/',
      label: 'zpecter.com',
    },
    {
      url: 'https://tools.zpecter.com/',
      label: 'tools.zpecter.com',
    },
  ];
  const ui = {
    animation: 350,
    disableLock: 10000,
    apiCacheDuration: 60 * 60 * 1000,
  };
  const features = {};

  return {
    meta,
    locales,
    url,
    links,
    ui,
    features,
  };
};

export default getConfig;
