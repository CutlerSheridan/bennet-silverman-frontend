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
    //
    // background: '#141414', // charcoal
    // primary: "#FFFDD3", //banana
    // text: "#F5EAB6",// cream
    // background: '#177246', // green
    // background: '#135d39',
    background: '#124f24',
    // background: '#0f3e1d',
    primary: '#E9C46B', //yellow
    text: '#E9C46B', //yellow
    highlight: '#E9C46B', //yellow
    // secondary: "primary", // cream

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
        // highlight: "#D7263D",
        // highlight: "#F0386B",
        highlight: '#A60067',
        // secondary: "#448FA3",
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
    // body: 'Sora, monospace',
    // body: 'Roboto, monospace',
    // body: 'Helvetica Neue Bold, Roboto, monospace',
    body: 'League-Gothic, Oswald, Roboto, monospace',
    // heading: 'Rubik, monospace',
    heading: 'League-Gothic, Oswald, Roboto, cursive',
    // monospace: 'Menlo, monospace',
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
      letterSpacings: '.03rem',
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
      letterSpacings: '.03rem',
      // backgroundColor: 'text',
      // color: 'background',
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
      // backgroundColor: transparentize('background', 0.3),
      // backgroundColor: 'background',
      // backgroundColor: 'rgb(35,35,35)',
      backgroundColor: 'transparent',
      color: 'text',
      // opacity: '80%',
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
        transition: 'opacity .5s ease',
        letterSpacing: '.1rem',
      },
    },
  },
};

export default newTheme;
