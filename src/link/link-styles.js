import { buttonStyles } from '../button/button-styles';
import display from '../display';

export const linkStyles = () => (theme) => {
  const { colors, fonts } = theme;
  const common = {
    textDecoration: 'none',
  };
  const linkActive = { textDecoration: 'underline' };
  return {
    link: {
      ...common,
      color: colors.primary.text,
      fontFamily: fonts.main,
      ':hover': linkActive,
      ':focus': linkActive,
    },
    'button-outline': {
      ...common,
      ...buttonStyles(theme).outline,
    },
    'button-filled': {
      ...common,
      ...buttonStyles(theme).filled,
    },
    'button-text': {
      ...common,
      ...buttonStyles(theme).text,
    },
    ...display,
  };
};

export default linkStyles;
