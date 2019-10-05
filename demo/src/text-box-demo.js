import React, { useState } from 'react';
import { TextBox } from 'components';
import CompoentContainer from './component-container';

const TextBoxDemo = () => {
  const [text, updateText] = useState('');
  const [textWithLabel, updateTextWithoutLabel] = useState('');
  return (
    <CompoentContainer title="Text Box">
      <TextBox text={text} onChange={updateText} labelText="A text box" />
      <CompoentContainer title="Text Box With Hidden Label" isVariation>
        <TextBox
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text box"
          hideLabel
        />
      </CompoentContainer>
      <CompoentContainer title="Text Box With A Status" isVariation>
        <TextBox
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text box"
          status="A status message"
        />
      </CompoentContainer>
      <CompoentContainer title="Text Box With An Error" isVariation>
        <TextBox
          text={textWithLabel}
          onChange={updateTextWithoutLabel}
          labelText="A text box"
          error="An error message"
        />
      </CompoentContainer>
    </CompoentContainer>
  );
};
export default TextBoxDemo;
