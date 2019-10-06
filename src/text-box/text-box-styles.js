import { baseStyles } from '../text-input/text-input-styles';

const textBoxStyles = ({ height }) => ({
  colors, border, transitionTime, fonts,
}) => ({
  ...baseStyles({
    colors, border, transitionTime, fonts,
  }),
  input: {
    ...baseStyles({
      colors, border, transitionTime, fonts,
    }).input,
    transition: `border ${transitionTime}, box-shadow ${transitionTime}`,
    minHeight: 40,
    height,
  },
  labelText: {
    ...baseStyles({
      colors, border, transitionTime, fonts,
    }).labelText,
    top: 9,
  },
  labelTextFilled: {
    ...baseStyles({
      colors, border, transitionTime, fonts,
    }).labelTextFilled,
    top: -11,
  },
});

export default textBoxStyles;
