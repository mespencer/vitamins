import { withStyles } from 'react-with-styles';

export const buttonStyles = ({
  colors, border, transitionTime, fonts,
}) => {
  const horizontalPadding = 14;
  const verticalPadding = 10;
  const common = {
    background: colors.transparent,
    borderRadius: border.radius,
    borderWidth: border.width,
    paddingTop: verticalPadding,
    paddingBottom: verticalPadding,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    cursor: 'pointer',
    outline: 'none',
    transition: transitionTime,
    'font-weight': 'bold',
    display: 'inline-block',
    borderStyle: 'outset',
    fontFamily: fonts.accent,
    fontSize: 16,
    boxSizing: 'border-box',
  };
  const disabledCommon = {
    color: colors.disabled.text,
    cursor: 'not-allowed',
  };
  const outlineFocusHover = {
    borderColor: colors.primary.background,
  };
  const disabledOutlineFocusHover = { borderColor: border.color };
  const filledFocusHover = {
    background: colors.transparent,
    color: colors.primary.text,
  };
  const disabledFilledFocusHover = {
    background: colors.disabled.background,
    color: colors.disabled.text,
  };
  const textFocusHover = { borderColor: colors.primary.background };
  const disabledTextFocusHover = { borderColor: 'none' };
  const active = {
    boxShadow: `inset 0 0 0 1px ${colors.primary.background}`,
    transition: '.1s',
  };

  return {
    outline: {
      ...common,
      color: colors.primary.text,
      borderColor: border.color,
      ':hover': outlineFocusHover,
      ':focus': outlineFocusHover,
      ':active': active,
    },
    'disabled-outline': {
      ...disabledCommon,
      ':hover': disabledOutlineFocusHover,
      ':focus': disabledOutlineFocusHover,
    },
    filled: {
      ...common,
      background: colors.primary.background,
      color: colors.primary.textInverted,
      borderColor: colors.primary.background,
      ':hover': filledFocusHover,
      ':focus': filledFocusHover,
      ':active': active,
    },
    'disabled-filled': {
      ...disabledCommon,
      background: colors.disabled.background,
      borderColor: colors.disabled.background,
      ':hover': disabledFilledFocusHover,
      ':focus': disabledFilledFocusHover,
    },
    text: {
      ...common,
      color: colors.primary.text,
      background: colors.transparent,
      borderColor: colors.transparent,
      ':hover': textFocusHover,
      ':focus': textFocusHover,
      ':active': active,
    },
    'disabled-text': {
      ...disabledCommon,
      ':hover': disabledTextFocusHover,
      ':focus': disabledTextFocusHover,
    },
  };
};

export default withStyles(buttonStyles, { pureComponent: true });
