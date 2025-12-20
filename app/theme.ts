import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'gold',
  colors: {
    gold: [
      '#fef9e7',
      '#fcf3d0',
      '#f9e8a6',
      '#f5dc78',
      '#f1d150',
      '#edc836',
      '#e2b829', // Main golden yellow
      '#c9a424',
      '#b4921f',
      '#9e7f1a',
    ],
    cream: [
      '#fdfcf9',
      '#faf8f3',
      '#f5f1e8', // Main cream background
      '#f0ecdf',
      '#ebe7d6',
      '#e6e2cd',
      '#e1ddc4',
      '#dcd8bb',
      '#d7d3b2',
      '#d2cea9',
    ],
  },
  primaryShade: 6,
  fontFamily: 'var(--font-rubik), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'var(--font-rubik), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
});
