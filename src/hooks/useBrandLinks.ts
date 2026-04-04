import type { Links } from '../types';

export const useBrandLinks = () => {
  const google: Links = [
    { url: 'https://google.com/', label: 'Google', order: 0 },
    { url: 'https://www.youtube.com/', label: 'YouTube', order: 1 },
    { url: 'https://mail.google.com/', label: 'GMail', order: 2 },
    { url: 'https://drive.google.com/', label: 'Drive', order: 3 },
    { url: 'https://calendar.google.com/', label: 'Calendar', order: 4 },
    { url: 'https://translate.google.com/', label: 'Translate', order: 5 },
    { url: 'https://maps.google.com/', label: 'Maps', order: 6 },
    { url: 'https://photos.google.com/', label: 'Photos', order: 7 },
    { url: 'https://keep.google.com/', label: 'Keep', order: 8 },
    { url: 'https://gemini.google.com/', label: 'Gemini', order: 9 },
    { url: 'https://play.google.com/', label: 'Play', order: 10 },
    {
      url: 'https://marketingplatform.google.com/',
      label: 'Analytics',
      order: 11,
    },
    {
      url: 'https://myaccount.google.com/',
      label: 'Google Account',
      order: 12,
    },
    {
      url: 'https://search.google.com/search-console',
      label: 'Search Console',
      order: 13,
    },
  ];

  const apple: Links = [
    { url: 'https://apple.com/', label: 'Apple', order: 0 },
    { url: 'https://support.apple.com/', label: 'Support', order: 1 },
    { url: 'https://apps.apple.com/', label: 'App Store', order: 2 },
    { url: 'https://www.icloud.com/', label: 'iCloud', order: 3 },
    { url: 'https://developer.apple.com/', label: 'Developer', order: 4 },
    { url: 'https://music.apple.com/', label: 'Apple Music', order: 5 },
    { url: 'https://tv.apple.com/', label: 'Apple TV+', order: 6 },
    { url: 'https://appleid.apple.com/', label: 'Apple ID', order: 7 },
  ];

  const microsoft: Links = [
    { url: 'https://microsoft.com/', label: 'Microsoft', order: 0 },
    { url: 'https://support.microsoft.com/', label: 'Support', order: 1 },
    { url: 'https://apps.microsoft.com/', label: 'Microsoft Store', order: 2 },
    { url: 'https://account.microsoft.com/', label: 'Account', order: 3 },
    { url: 'https://outlook.live.com/', label: 'Outlook', order: 4 },
    { url: 'https://onedrive.live.com/', label: 'OneDrive', order: 5 },
    { url: 'https://www.office.com/', label: 'Microsoft 365', order: 6 },
    { url: 'https://azure.microsoft.com/', label: 'Azure', order: 7 },
    { url: 'https://github.com/', label: 'GitHub', order: 8 },
    { url: 'https://www.linkedin.com/', label: 'LinkedIn', order: 9 },
  ];

  return {
    google,
    apple,
    microsoft,
  };
};
