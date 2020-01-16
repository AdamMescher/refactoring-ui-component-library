const theme = {
  typography: {
    family: {
      display: '',
      sans: '',
      serif: '',
    },
    fontSize: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
    fontWeight: [],
  },
  iconography: {
    size: [16, 20, 24, 32],
  },
  margin: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768],
  padding: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768],
  spacing: [2, 4, 8, 12, 16, 24, 32, 40, 48],
  layout: [16, 24, 32, 48, 64, 96, 160],
  breakpoints: {},
  border: {
    radius: {
      none: '0',
      small: '2px',
      medium: '4px',
      large: '8px',
      pill: '',
      circle: '50%',
    },
  },
  colors: {
    neutral: {
      n000: 'hsl(210, 36%, 96%)',
      n100: 'hsl(212, 33%, 89%)',
      n200: 'hsl(210, 31%, 80%)',
      n300: 'hsl(211, 27%, 70%)',
      n400: 'hsl(209, 23%, 60%)',
      n500: 'hsl(210, 22%, 49%)',
      n600: 'hsl(209, 28%, 39%)',
      n700: 'hsl(209, 34%, 30%)',
      n800: 'hsl(211, 39%, 23%)',
      n900: 'hsl(209, 61%, 16%)',
    },
    utilities: {
      boxShadow: {
        none: 'none',
        tiny: '0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)',
        small: '0 3px 6px rgba(0,0,0,.15), 0 2px 4px rgba(0,0,0,.12)',
        medium: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
        large: 'box-shadow: 0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
        huge: 'box-shadow: 0 20px 40px rgba(0,0,0,0.2);',
      },
      zIndex: {
        z0: 0,
        z1: 100,
        z2: 200,
        z3: 300,
        z4: 400,
        z5: 500,
        z6: 600,
        z7: 700,
        z8: 800,
        z9: 900,
        z10: 1000,
      },
    },
  },
};

export default theme;
