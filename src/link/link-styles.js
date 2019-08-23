import { withStyles } from 'react-with-styles';
import { buttonStyles } from '../button/button-styles';

export const linkStyles = (theme) => {
  const { colors } = theme;
  const common = {
    textDecoration: 'none',
  };
  const linkActive = { textDecoration: 'underline' };
  return {
    link: {
      ...common,
      color: colors.primary.text,
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
  };
};

export default withStyles(linkStyles, { pureComponent: true });
