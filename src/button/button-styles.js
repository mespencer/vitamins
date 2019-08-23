import { withStyles } from 'react-with-styles';

export const buttonStyles = ({
  colors, borderRadius, transitionTime, fonts,
}) => {
  const horizontalPadding = 14;
  const verticalPadding = 10;
  const common = {
    background: colors.transparent,
    borderRadius,
    borderWidth: 1,
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
  };
  const disabledCommon = {
    color: colors.disabled.text,
    cursor: 'not-allowed',
  };
  const outlineActive = {
    // boxShadow: `inset 0 0 0 1px ${colors.primary.background}`,
    borderColor: colors.primary.background,
  };
  const disabledOutlineActive = { boxShadow: 'none' };
  const filledActive = {
    background: colors.transparent,
    color: colors.primary.text,
  };
  const textActive = { borderColor: colors.primary.background };
  const disabledTextActive = { borderColor: 'none' };

  return {
    outline: {
      ...common,
      color: colors.primary.text,
      borderColor: colors.border,
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

export default withStyles(buttonStyles);
