import React from 'react';
import { render } from 'react-dom';
import ButtonDemo from './button';

const Demo = () => (
  <div>
    <h1>Demo of Vitamins</h1>
    <ButtonDemo />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
