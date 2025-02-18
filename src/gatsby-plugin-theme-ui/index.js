// example theme
import theme from '@theme-ui/preset-future';
import { transparentize } from '@theme-ui/color';

const newTheme = {
  ...theme,
  breakpoints: ['40em', '56em', '64em'],
  config: {
    ...theme.config,
    useRootStyles: true,
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
    initialColorModeName: 'bennettwo',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  colors: {
    ...theme.colors,
    ...theme.colors.modes.dark,
    background: '#124f24', // green
    primary: '#E9C46B', //yellow
    text: '#E9C46B', //yellow
    highlight: '#E9C46B', //yellow

    modes: {
      ...theme.colors.modes,
      dark: {
        ...theme.colors.modes.dark,
        background: '#011', // muted
        primary: '#5B9279',
        highlight: '#CC2936',
        text: '#fff',
      },
      bennet: {
        background: '#02182B', // dark blue
        primary: '#0197F6',
        highlight: '#A60067',
        secondary: '#4df', // turquoise
        linkColor: 'primary',
      },
    },
  },
  forms: {
    ...theme.forms,
    select: {
      ...theme.select,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
    input: {
      ...theme.input,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
    textarea: {
      ...theme.textarea,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
  },
  fonts: {
    ...theme.fonts,
    body: 'League-Gothic, Oswald, Roboto, monospace',
    heading: 'League-Gothic, Oswald, Roboto, cursive',
  },
  text: {
    ...theme.text,
    title: {
      fontSize: [6, 7],
      fontWeight: 'heading',
    },
    subtitle: {
      fontSize: [5, '44px'],
      fontWeight: 'heading',
    },
    h3: {
      fontSize: [3, 4],
      fontWeight: 500,
    },
    bodylight: {
      fontWeight: 400,
    },
  },
  links: {
    ...theme.links,
  },
  messages: {
    ...theme.messages,
    error: {
      bg: 'transparent',
      borderColor: 'red',
    },
  },
  layout: {
    ...theme.layout,
    container: {
      paddingTop: 140,
      paddingBottom: 100,
    },
  },
  buttons: {
    ...theme.buttons,
    outlined: {
      bg: 'transparent',
      textTransform: 'uppercase',
      cursor: 'pointer',
      border: '2px solid',
      borderColor: 'text',
      borderRadius: 0,
      transition: 'background-color ease .3s',
      fontFamily: 'body',
      letterSpacing: '.03rem',
      color: 'text',
      '&:hover': {
        bg: transparentize('text', 0.5),
      },
    },
    solid: {
      bg: 'transparent',
      textTransform: 'uppercase',
      cursor: 'pointer',
      border: '2px solid',
      borderColor: 'text',
      borderRadius: 0,
      transition: 'background-color ease .3s',
      fontFamily: 'body',
      letterSpacing: '.03rem',
      backgroundColor: 'background',
      color: 'text',
      '&:hover': {
        bg: transparentize('background', 0.5),
      },
    },
    onVideo: {
      bg: 'transparent',
      textTransform: 'uppercase',
      cursor: 'pointer',
      border: '2px solid',
      borderColor: 'text',
      borderRadius: '5rem',
      transition: 'background-color ease .3s',
      fontFamily: 'body',
      letterSpacing: '.05rem',
      backgroundColor: 'transparent',
      color: 'text',
      '&:hover': {
        bg: transparentize('background', 0.5),
      },
    },
  },
  sizes: {
    ...theme.sizes,
    container: 950,
    paragraph: 550,
  },
  fontWeights: {
    ...theme.fontWeights,
    body: 300,
    heading: 700,
    bold: 700,
    bodylight: 400,
    threehundred: 300,
  },
  lineHeights: {
    ...theme.lineHeights,

    body: 1.5,
    heading: 1.125,
  },

  styles: {
    ...theme.styles,

    root: {
      ...theme.styles.root,
      a: {
        ...theme.styles.root.a,
        textDecoration: 'none',
        fontStyle: 'none',
        color: 'primary',
        ':visited': {
          color: 'primary',
        },
        ':hover': {
          opacity: 0.8,
        },
        transition: 'opacity .2s ease',
        letterSpacing: '.1rem',
      },
    },
  },
};

export default newTheme;
