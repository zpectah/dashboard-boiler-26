import packages from '../../package.json';

export const getConfig = () => {
  const meta = {
    name: 'zpecter homepage',
    description: 'Personalized browser homepage with customization options',
    version: packages.version,
    since: '2008',
    links: [
      {
        id: 'zpc',
        label: 'zpecter.com',
        url: 'https://zpecter.com',
      },
      {
        id: 'zpc-tools',
        label: 'zpecter tools',
        url: 'https://tools.zpecter.com',
      },
    ],
  };
  const locales = {
    supported: ['en', 'cs', 'sk'],
    default: 'en',
  };
  const api = {
    randomImage: 'https://picsum.photos/1920?random=1&grayscale&blur=2',
    openMeteo: 'https://api.open-meteo.com/v1/forecast',
    openStreetMap: 'https://nominatim.openstreetmap.org/reverse',
  };

  return {
    meta,
    locales,
    api,
  };
};
