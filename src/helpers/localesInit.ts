(() => {
  // TODO
  const root = document.querySelector('html') as HTMLElement;
  const locale = window.localStorage.getItem('i18nextLng') ?? 'en';

  root.setAttribute('lang', locale);
})();
