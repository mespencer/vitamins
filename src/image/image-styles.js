import display from '../display';

export const imageStyles = ({ border }) => ({
  image: {
    maxWidth: '100%',
  },
  rounded: {
    borderRadius: border.radius,
  },
  circle: {
    borderRadius: '50%',
  },
  square: {
    borderRadius: 0,
  },
  ...display,
});

export default imageStyles;
