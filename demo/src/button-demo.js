import React from 'react';
import { Button, Box } from 'components';
import CompoentContainer from './component-container';

const ButtonDemo = () => (
  <CompoentContainer title="Button">
    <CompoentContainer title="Outline Button (default)" isVariation>
      <Box>
        <Button type="outline" onClick={() => {}}>Outline Button</Button>
      </Box>
      <Box>
        <Button type="outline" onClick={() => {}} disabled>Disabled Outline Button</Button>
      </Box>
    </CompoentContainer>
    <CompoentContainer title="Filled Button" isVariation>
      <Box>
        <Button type="filled" onClick={() => {}}>Filled Button</Button>
      </Box>
      <Box>
        <Button type="filled" onClick={() => {}} disabled>Disabled Filled Button</Button>
      </Box>
    </CompoentContainer>
    <CompoentContainer title="Text Button" isVariation>
      <Box>
        <Button type="text" onClick={() => {}}>Text Button</Button>
      </Box>
      <Box>
        <Button type="text" onClick={() => {}} disabled>Disabled Text Button</Button>
      </Box>
    </CompoentContainer>
  </CompoentContainer>
);

export default ButtonDemo;
