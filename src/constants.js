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
    light: 'hsl(214deg, 29.3%, 26.1%)', // white
    dark: 'hsl(215,14.3%,16.5%)', // navy navy blue
  },
  sidebar_text: {
    light: 'hsl(0deg, 0%, 100%)', // white
    // dark: 'hsl(214.3,11.7%,23.5%)', // navy navy blue
  },
  primary: {
    light: 'hsl(214deg, 29.3%, 26.1%)', // Pinkish-red
    dark: 'hsl(50deg, 100%, 50%)', // Yellow
  },
  secondary: {
    light: 'hsl(213.4,29.2%,41%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)', // Cyan
  },

  search: {
    dark: 'hsl(0deg, 0%, 100%)', // white
    light: 'hsl(214.3,11.7%,23.5%)', // navy navy blue
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
