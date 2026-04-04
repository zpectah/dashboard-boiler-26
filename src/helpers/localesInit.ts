import { getConfig } from '../config';
import { storageLocalesKey } from '../constants';

(() => {
  const { locales } = getConfig();

  const root = document.querySelector('html') as HTMLElement;
  const locale =
    window.localStorage.getItem(storageLocalesKey) ?? locales.default;

  root.setAttribute('lang', locale);
})();
