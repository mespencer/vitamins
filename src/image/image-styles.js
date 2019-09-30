import { withStyles } from 'react-with-styles';

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
});

export default withStyles(imageStyles, { pureComponent: true });
