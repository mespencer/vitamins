import React, { useState } from 'react';
import { TextInput, Button } from 'components';
import CompoentContainer from './component-container';

const TextInputDemo = () => {
  const [text, updateText] = useState('');
  const [textWithLabel, updateTextWithoutLable] = useState('');
  return (
    <CompoentContainer title="Text Input">
      <TextInput text={text} onChange={updateText} labelText="A text input" />
      <CompoentContainer title="Text Input With Hidden Label" isVariation>
        <TextInput
          text={textWithLabel}
          onChange={updateTextWithoutLable}
          labelText="A text input"
          hideLabel
        />
      </CompoentContainer>
      <CompoentContainer title="Text Input with Button Next To it" isVariation>
        <TextInput
          text={textWithLabel}
          onChange={updateTextWithoutLable}
          labelText="A text input"
          hideLabel
        />
        <Button onClick={() => {}}>Do Something</Button>
      </CompoentContainer>
    </CompoentContainer>
  );
};
export default TextInputDemo;
