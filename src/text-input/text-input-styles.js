import display from '../display';

export const baseStyles = ({
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
    container: {
      paddingBottom: 14,
      position: 'relative',
    },
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
      fontSize,
      fontFamily: fonts.main,
      lineHeight: 1,
      boxSizing: 'border-box',
      borderStyle: 'solid',
      color: colors.text.main,
      transition: transitionTime,
    },
    label: {
      position: 'relative',
      fontSize,
      fontFamily: fonts.main,
      cursor: 'text',
    },
    labelText: {
      position: 'absolute',
      left: horizontalPadding,
      transition: transitionTime,
      transformOrigin: 'center left',
      borderRadius: 3,
      color: colors.text.grey,
    },
    labelTextFilled: {
      transform: 'scale(.8)',
      background: colors.white,
      paddingLeft: 2,
      paddingRight: 2,
    },
    labelTextFocused: {
      color: colors.primary.text,
    },
    status: {
      position: 'absolute',
      margin: 0,
      left: horizontalPadding,
      fontFamily: fonts.main,
      fontSize: 12,
      color: colors.text.grey,
    },
    error: {
      borderColor: colors.error.border,
      ':hover': {
        borderColor: colors.error.border,
      },
      ':focus': {
        borderColor: colors.error.border,
        boxShadow: `inset 0 0 0 1px ${colors.error.border}`,
      },
    },
    errorText: {
      color: colors.error.text,
    },
    focused,
    hide: {
      ...display.hidden,
    },
    ...display,
  };
};

const TextInputStyles = () => ({
  colors, border, transitionTime, fonts,
}) => ({
  ...baseStyles({
    colors, border, transitionTime, fonts,
  }),
  input: {
    ...baseStyles({
      colors, border, transitionTime, fonts,
    }).input,
    transition: transitionTime,
  },
  labelText: {
    ...baseStyles({
      colors, border, transitionTime, fonts,
    }).labelText,
    transform: 'translateY(-50%)',
    top: '50%',
  },
  labelTextFilled: {
    ...baseStyles({
      colors, border, transitionTime, fonts,
    }).labelTextFilled,
    top: '-25%',
  },
});

export default TextInputStyles;
