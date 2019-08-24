import { withStyles } from 'react-with-styles';

const TextInputStyles = ({
  colors, border, transitionTime, fonts,
}) => {
  const horizontalPadding = 14;
  const verticalPadding = 10;
  const focused = {
    borderColor: colors.primary.background,
    boxShadow: `inset 0 0 0 1px ${colors.primary.background}`,
  };
  const fontSize = 16;
  return {
    input: {
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding,
      paddingRight: horizontalPadding,
      paddingLeft: horizontalPadding,
      borderColor: border.color,
      borderWidth: border.width,
      borderRadius: border.radius,
      outline: 'none',
      ':hover': {
        borderColor: colors.primary.background,
      },
      ':focus': focused,
      transition: transitionTime,
      fontSize,
      fontFamily: fonts.main,
    },
    label: {
      position: 'relative',
      fontSize,
      fontFamily: fonts.main,
    },
    labelText: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: horizontalPadding,
      transition: transitionTime,
      transformOrigin: 'center left',
      borderRadius: 3,
    },
    labelTextFilled: {
      top: '-100%',
      transform: 'scale(.8)',
      background: colors.white,
      paddingLeft: 2,
      paddingRight: 2,
    },
    labelTextFocused: {
      color: colors.primary.text,
    },
    focused,
    hide: {
      display: 'none', // TODO: Change this to something more a11y friendly
    },
  };
};

export default withStyles(TextInputStyles, { pureComponent: true });
