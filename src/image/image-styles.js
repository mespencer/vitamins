import { withStyles } from 'react-with-styles';

export const imageStyles = () => ({
  image: {
    maxWidth: '100%',
  },
  circle: {
    borderRadius: '50%',
  },
});

export default withStyles(imageStyles, { pureComponent: true });
