import React, { useState } from 'react';
import { TextInput, Button } from 'components';
import CompoentContainer from './component-container';

const TextInputDemo = () => {
  const [text, updateText] = useState('');
  const [textWithLabel, updateTextWithoutLabel] = useState('');
  return (
    <CompoentContainer title="Text Input">
      <TextInput text={text} onChange={updateText} labelText="A text input" />
      <CompoentContainer title="Text Input With Hidden Label" isVariation>
        <TextInput
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text input"
          hideLabel
        />
      </CompoentContainer>
      <CompoentContainer title="Text Input With A Status" isVariation>
        <TextInput
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text input"
          status="A status message"
        />
      </CompoentContainer>
      <CompoentContainer title="Text Input With An Error" isVariation>
        <TextInput
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text input"
          error="An error message"
        />
      </CompoentContainer>
      <CompoentContainer title="Text Input with Button Next To it" isVariation>
        <TextInput
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text input"
          status="A status message"
          hideLabel
        />
        <Button type="filled" onClick={() => {}}>Do Something</Button>
      </CompoentContainer>
    </CompoentContainer>
  );
};
export default TextInputDemo;
