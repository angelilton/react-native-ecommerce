
const palette = {
  white: '#FFFFFF',
  cyan: '#2CB9B0',
  lightCyan: '#E7F9F7',
  darkBlue: '#0C0D34',
  orange: '#FE5E33',
  yellow: '#FFC641',
  pink: '#FF87A2',
  darkPink: '#FF0058',
  violet: '#442CB9',
  lightBlue: '#BFEAF5',
  grey: '#F4F0EF',
  darkGrey: '#808080',
  darkGrey50: 'rgba(12, 13, 52,0.05)',
};

export default {
  colors: {
    background: palette.white,
    background2: palette.grey,
    primary: palette.cyan,
    primaryLight: palette.lightCyan,
    secondary: palette.darkBlue,
    info: palette.darkGrey,
    edit: palette.lightBlue,
    danger: palette.darkPink,
    body: 'rgba(12, 13, 52, 0.7)',
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
    dot: 'rgba(12, 13, 52,0.5)',
    ...palette,
  },
  sizes: {
    small: '12px',
    medium: '16px',
    large: '24px',
    xLarge: '28px',
    huge: '80px',
    nLarge: 20
  },
  spacing: {
    s: '8px',
    m: '16px',
    l: '24px',
    xl: '40px',
    xxl: '45px',
  },
  border: {
    s: '4px',
    m: '10px',
    l: '25px',
    xl: '75px',
    nxl: 75,
    nl:25
  },
};
