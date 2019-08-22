import React from 'react';
import { Button } from 'components';

const ButtonDemo = () => (
  <div>
    <Button onClick={() => {}}>Default Button</Button>
    <Button type="outline" onClick={() => {}}>Outline Button</Button>
    <Button type="filled" onClick={() => {}}>Filled Button</Button>
    <Button type="text" onClick={() => {}}>Text Button</Button>
    <Button type="outline" onClick={() => {}} disabled>Disabled Outline Button</Button>
    <Button type="filled" onClick={() => {}} disabled>Disabled Filled Button</Button>
    <Button type="text" onClick={() => {}} disabled>Disabled Text Button</Button>
  </div>
);

export default ButtonDemo;
