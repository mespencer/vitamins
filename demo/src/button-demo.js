import React from 'react';
import { Button } from 'components';
import CompoentContainer from './component-container';

const ButtonDemo = () => (
  <CompoentContainer title="Button">
    <CompoentContainer title="Outline Button (default)" isVariation>
      <Button type="outline" onClick={() => {}}>Outline Button</Button>
      <Button type="outline" onClick={() => {}} disabled>Disabled Outline Button</Button>
    </CompoentContainer>
    <CompoentContainer title="Filled Button" isVariation>
      <Button type="filled" onClick={() => {}}>Filled Button</Button>
      <Button type="filled" onClick={() => {}} disabled>Disabled Filled Button</Button>
    </CompoentContainer>
    <CompoentContainer title="Text Button" isVariation>
      <Button type="text" onClick={() => {}}>Text Button</Button>
      <Button type="text" onClick={() => {}} disabled>Disabled Text Button</Button>
    </CompoentContainer>
  </CompoentContainer>
);

export default ButtonDemo;
