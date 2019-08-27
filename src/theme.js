const rubikFont = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: "local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nBrXw.woff2) format('woff2')",
};

const nunitoFont = {
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: "local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v11/XRXV3I6Li01BKofINeaB.woff2) format('woff2')",
};

const black = 'rgba(0, 0, 0, .9)';
const white = 'rgba(255, 255, 255, 1)';
const blue = 'blue';
const darkGrey = 'rgba(0, 0, 0, .6)';
const red = 'red';

const colors = {
  primary: {
    background: blue,
    text: blue,
    textInverted: white,
  },
  disabled: {
    text: darkGrey,
    background: 'rgba(0, 0, 0, .1)',
  },
  text: {
    main: black,
    inverted: white,
    grey: darkGrey,
  },
  error: {
    text: red,
    border: red,
  },
  transparent: 'transparent',
  border: 'rgba(0, 0, 0, .2)',
  black,
  white,
  darkGrey,
};

export default {
  colors,
  fonts: {
    main: [nunitoFont, 'sans-serif'],
    accent: [rubikFont, 'sans-serif'],
  },
  screens: {},
  border: {
    radius: 3,
    width: 1,
    color: colors.border,
  },
  transitionTime: '.3s',
};
