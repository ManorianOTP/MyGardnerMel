import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'green',
  colors: {
    green: [
      '#e7f5ed',
      '#d0e8da',
      '#a8d4ba',
      '#7ec098',
      '#5baf7c',
      '#44a569',
      '#36a15f',
      '#278d4e',
      '#1a7d43',
      '#145233', // Primary dark green from original site
    ],
    cream: [
      '#fcfbf0',
      '#f7f5e6',
      '#f0ecd3',
      '#e9e3c0',
      '#e2dbb0',
      '#dcd4a2',
      '#d6ce97',
      '#cfc889',
      '#c9c37f',
      '#e2e1cf', // Original site background color
    ],
  },
  primaryShade: 9,
  fontFamily: 'var(--font-rubik), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'var(--font-rubik), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
});
