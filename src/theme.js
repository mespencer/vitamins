const rubikFont = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: "local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nBrXw.woff2) format('woff2')",

};

const colors = {
  primary: {
    background: 'blue',
    text: 'blue',
    textInverted: 'white',
  },
  disabled: {
    text: 'rgba(0, 0, 0, .3)',
    background: 'rgba(0, 0, 0, .1)',
  },
  transparent: 'transparent',
  border: 'rgba(0, 0, 0, .2)',
};

export default {
  colors,
  fonts: {
    nunito: {
      fontFamily: ['Nunito', 'san-serif'],
      src: "local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v11/XRXV3I6Li01BKofINeaB.woff2) format('woff2')",
    },
    rubik: [rubikFont, 'sans-serif'],
  },
  screens: {},
  border: {
    radius: 3,
    width: 1,
    color: colors.border,
  },
  transitionTime: '.3s',
};
