import { withStyles } from 'react-with-styles';
import display from '../display';

export const boxStyles = () => ({
  box: {
    boxSizing: 'border-box',
  },
  ...display,
});

export default withStyles(boxStyles, { pureComponent: true });
