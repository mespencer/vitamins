import React from 'react';
import { render } from 'react-dom';
import ButtonDemo from './button-demo';
import LinkDemo from './link-demo';
import TextInputDemo from './text-input-demo';

const Demo = () => (
  <div>
    <h1>Demo of Vitamins</h1>
    <ButtonDemo />
    <LinkDemo />
    <TextInputDemo />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
