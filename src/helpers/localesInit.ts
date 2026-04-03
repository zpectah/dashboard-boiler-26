import { getConfig } from '../config';
import { StorageLocalesKey } from '../constants';

(() => {
  const { locales } = getConfig();

  const root = document.querySelector('html') as HTMLElement;
  const locale =
    window.localStorage.getItem(StorageLocalesKey) ?? locales.default;

  root.setAttribute('lang', locale);
})();
