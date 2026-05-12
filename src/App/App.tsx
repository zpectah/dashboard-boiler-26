import { useEffect } from 'react';
import { useAppStore } from '../store';
import AppProvider from './AppProvider';
import AppRouter from './AppRouter';

import '../i18n';
import '../helpers/localesInit';

const App = () => {
  const { generateHash, generateTimestamp } = useAppStore();

  useEffect(() => {
    /*
    localStorage.setItem(
      'CONTENT',
      JSON.stringify({
        layout: {
          google: true,
          microsoft: true,
          apple: true,
        },
        timeDate: {
          blinkColon: true,
          active: true,
        },
        calendar: {
          active: true,
        },
        holidays: {
          showTomorrowHoliday: true,
          active: true,
        },
        favorites: {
          active: true,
          items: [
            {
              id: 'Zo8EWS8ZcLxF',
              label: 'Callisto NAS',
              url: 'http://quickconnect.to/callistonaszpc',
              order: 0,
            },
            {
              id: 'OSdBLNwInU8y',
              label: 'Spotify',
              url: 'https://open.spotify.com/',
              order: 0,
            },
            {
              uid: 'facebook',
              label: 'Facebook',
              url: 'https://facebook.com',
              order: '1',
              checked: true,
              id: '96eGS9rTwhpO',
            },
            {
              uid: 'linkedIn',
              label: 'LinkedIn',
              url: 'https://www.linkedin.com/',
              order: 2,
              id: 'gujind82Dl0o',
            },
            {
              uid: 'chatGTP',
              label: 'Chat GTP',
              url: 'https://chatgpt.com/',
              order: 3,
              id: 'L0Ss9EaN19AS',
            },
            {
              uid: 'youtube',
              label: 'YouTube',
              url: 'https://www.youtube.com/',
              order: 4,
              id: 'qKrwaj2LFMCY',
            },
            {
              id: 'cSpSIjae00SA',
              label: 'mailtrap.io',
              url: 'https://mailtrap.io/',
              order: '5',
            },
            {
              uid: '9gag',
              label: '9GAG',
              url: 'https://9gag.com/',
              order: 8,
              id: 'tEdvVnnLXI5U',
            },
            {
              uid: 'imgur',
              label: 'Imgur',
              url: 'https://imgur.com/',
              order: 9,
              id: 'ejQrozKin71a',
            },
            {
              uid: 'tumblr',
              label: 'Tumblr',
              url: 'https://www.tumblr.com/',
              order: 10,
              id: 'mkkjY9ILhRGr',
            },
            {
              uid: 'behance',
              label: 'Behance',
              url: 'https://www.behance.net/',
              order: 11,
              id: 'TW2lt9B0K4IM',
            },
            {
              uid: 'smashingMag',
              label: 'Smashing Mag',
              url: 'https://www.smashingmagazine.com/',
              order: 12,
              id: 'Y3chcqLMnJrz',
            },
            {
              uid: 'deviantArt',
              label: 'DeviantArt',
              url: 'https://www.deviantart.com/',
              order: 13,
              id: 'zLdi1qy2EaIq',
            },
            {
              uid: 'stackoverflow',
              label: 'Stackoverflow',
              url: 'https://stackoverflow.com/',
              order: 14,
              id: 'aQh4qUI4k5ft',
            },
            {
              uid: 'github',
              label: 'GitHub',
              url: 'https://github.com/',
              order: 15,
              id: '9ms516NXHd46',
            },
            {
              uid: 'gitlab',
              label: 'GitLab',
              url: 'https://gitlab.com/users/sign_in',
              order: 16,
              id: 'M71koexFxvZt',
            },
            {
              uid: 'bitbucket',
              label: 'BitBucket',
              url: 'https://bitbucket.org/',
              order: 17,
              id: 'qfQ38jGgZDPT',
            },
            {
              uid: 'netflix',
              label: 'Netflix',
              url: 'https://www.netflix.com/',
              order: 18,
              id: 'zuuOcJwFrc0Y',
            },
            {
              uid: 'hbo',
              label: 'MAX',
              url: 'https://www.max.com/',
              order: 19,
              id: 'mmarfZGAitC7',
            },
            {
              id: 'IGrj7yVBuB48',
              label: 'ideogram',
              url: 'https://ideogram.ai/',
              order: '20',
            },
            {
              id: 'shHtciSVBsbf',
              label: 'pikalabs',
              url: 'https://pikalabs.org/',
              order: '21',
            },
            {
              id: 'G0Qmn8t8qLb7',
              label: 'videogen',
              url: 'https://videogen.io/',
              order: '22',
            },
            {
              id: 'JrBSH38XHgfu',
              label: 'claude',
              url: 'https://claude.ai/',
              order: '30',
            },
            {
              id: '78AIwTzkAAej',
              label: 'obsidian.md',
              url: 'https://obsidian.md/',
              order: '30',
            },
            {
              id: 'DxyFWj7brgiO',
              label: 'Itch.io',
              url: 'https://itch.io/',
              order: '30',
            },
            {
              id: 'tv5W1TaS9l4u',
              label: 'excalidraw',
              url: 'https://excalidraw.com/',
              order: '50',
            },
            {
              id: 'LUsT3uTYGbiU',
              label: 'kondik.cz',
              url: 'https://www.kondik.cz/',
              order: '250',
            },
            {
              id: 'xCAMxzUz0hZt',
              label: 'ČRS',
              url: 'https://www.rybsvaz.cz/',
              order: '500',
            },
            {
              id: 'SJLvjGJYIIvo',
              label: 'mrk.cz',
              url: 'https://www.mrk.cz/',
              order: '500',
            },
            {
              id: 'oErlhXvdx4aY',
              label: 'sportcarp.cz',
              url: 'https://www.sportcarp.cz/',
              order: '500',
            },
            {
              id: 'RA4CfJBZRhOn',
              label: 'Arktan',
              url: 'https://arktan.com/best-ai-porn-generators',
              order: '500',
            },
            {
              id: 'eUZolMusa7sk',
              label: 'untitledui',
              url: 'https://www.untitledui.com/react/docs/introduction',
              order: '900',
            },
            {
              id: 'AowgGvjAuLFK',
              label: 'radix-ui',
              url: 'https://www.radix-ui.com/',
              order: '900',
            },
            {
              id: 'sQ4pWxaW49Sb',
              label: 'react-ui',
              url: 'https://react-ui.io/',
              order: '900',
            },
            {
              id: 'Z2UNJPoNTDlw',
              label: 'primereact',
              url: 'https://primereact.org/',
              order: '900',
            },
            {
              id: 'KwAFJvS24NBD',
              label: 'chakra-ui',
              url: 'https://chakra-ui.com/',
              order: '900',
            },
            {
              id: 'Yphe7XjHeyuN',
              label: 'heroui',
              url: 'https://www.heroui.com/',
              order: '900',
            },
            {
              id: 'iFIOaxCLIHhW',
              label: 'shadcn',
              url: 'https://ui.shadcn.com/',
              order: '900',
            },
            {
              id: 'soTrmM2n9ske',
              label: 'salat_',
              url: 'https://varimesmozkem.cz/spekackovy-lahodny-salat-recept/?sznclid=-pOex8vDy8rOy8vJzsnNzMzMwsLNyMmGjsfLzcvIyMrCyM3M1M7JyYaOn8fLzc3IzcjJz8LC1MzIzIaZx7zIubvNv7zLzbvKu7y8yr_Pzcq7ws_MzLvLucK4zs-5#dop_ab_variant=1632401&dop_source_zone_name=hpfeed.sznhp.box&dop_vert_ab=1632401&dop_vert_id=int1&dop_req_id=AF1LI3yuSeN-202603051537&dop_id=271470443',
              order: '5000',
            },
          ],
        },
        todos: {
          active: true,
          items: [
            {
              id: 'JL1fJhf6iWe2',
              title: 'Srovnat to na ploše !!!',
              done: true,
            },
            {
              id: 'EPwzQWexSegl',
              title: 'Objednat se k Majce + na CT',
              done: true,
            },
            {
              id: '2wyWgQZkB63O',
              title:
                'Opravit to proč se při znovu načtení stránky nezobrazí to co má',
              done: true,
            },
          ],
        },
      }),
    );
    */
    generateHash();
    generateTimestamp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
