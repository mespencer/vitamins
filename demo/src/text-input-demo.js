import React, { useState } from 'react';
import { TextInput, Box } from 'components';
import CompoentContainer from './component-container';

const TextInputDemo = () => {
  const [text, updateText] = useState('');
  const [textWithLabel, updateTextWithoutLable] = useState('');
  return (
    <CompoentContainer title="Text Input">
      <Box>
        <TextInput text={text} onChange={updateText} labelText="A text input" />
      </Box>
      <CompoentContainer title="Text Input With Hidden Label" isVariation>
        <Box>
          <TextInput
            text={textWithLabel}
            onChange={updateTextWithoutLable}
            labelText="A text input"
            hideLabel
          />
        </Box>
      </CompoentContainer>
    </CompoentContainer>
  );
};
export default TextInputDemo;
