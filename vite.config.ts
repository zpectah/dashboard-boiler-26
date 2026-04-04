import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('@mui') ||
              id.includes('@mui/x-date-pickers') ||
              id.includes('@emotion/react') ||
              id.includes('@emotion/styled')
            )
              return 'mui';
            if (
              id.includes('@tabler/icons-react') ||
              id.includes('@fontsource/barlow')
            )
              return 'assets';
            if (
              id.includes('react-hook-form') ||
              id.includes('@hookform/resolvers')
            ) {
              return 'form';
            }
            if (
              id.includes('dayjs') ||
              id.includes('i18next') ||
              id.includes('i18next-browser-languagedetector') ||
              id.includes('lodash') ||
              id.includes('zod') ||
              id.includes('zustand')
            ) {
              return 'utils';
            }
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom')
            )
              return 'react-core';
          }
        },
      },
    },
  },
});
