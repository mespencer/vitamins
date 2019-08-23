import { withStyles } from 'react-with-styles';

export const boxStyles = () => ({
  box: {
    boxSizing: 'border-box',
  },
});

export default withStyles(boxStyles, { pureComponent: true });
