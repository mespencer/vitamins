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
    fontFamily: fonts.rubik,
    fontSize: 16,
    boxSizing: 'border-box',
  };
  const disabledCommon = {
    color: colors.disabled.text,
    cursor: 'not-allowed',
  };
  const outlineActive = {
    borderColor: colors.primary.background,
  };
  const disabledOutlineActive = { borderColor: border.color };
  const filledActive = {
    background: colors.transparent,
    color: colors.primary.text,
  };
  const disabledFilledActive = {
    background: colors.disabled.background,
    color: colors.disabled.text,
  };
  const textActive = { borderColor: colors.primary.background };
  const disabledTextActive = { borderColor: 'none' };

  return {
    outline: {
      ...common,
      color: colors.primary.text,
      borderColor: border.color,
      ':hover': outlineActive,
      ':focus': outlineActive,
    },
    'disabled-outline': {
      ...disabledCommon,
      ':hover': disabledOutlineActive,
      ':focus': disabledOutlineActive,
    },
    filled: {
      ...common,
      background: colors.primary.background,
      color: colors.primary.textInverted,
      borderColor: colors.primary.background,
      ':hover': filledActive,
      ':focus': filledActive,
    },
    'disabled-filled': {
      ...disabledCommon,
      background: colors.disabled.background,
      borderColor: colors.disabled.background,
      ':hover': disabledFilledActive,
      ':focus': disabledFilledActive,
    },
    text: {
      ...common,
      color: colors.primary.text,
      background: colors.transparent,
      borderColor: colors.transparent,
      ':hover': textActive,
      ':focus': textActive,
    },
    'disabled-text': {
      ...disabledCommon,
      ':hover': disabledTextActive,
      ':focus': disabledTextActive,
    },
  };
};

export default withStyles(buttonStyles, { pureComponent: true });
