export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(214.3,11.7%,23.5%)', // navy navy blue
  },
  sidebar_background: {
    light: 'hsl(220deg, 8.8%, %)', // white
    dark: 'hsl(215,14.3%,16.5%)', // navy navy blue
  },
  primary: {
    light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    dark: 'hsl(50deg, 100%, 50%)', // Yellow
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)', // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
