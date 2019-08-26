import React, { useState } from 'react';
import { DateInput, Box } from 'components';
import CompoentContainer from './component-container';

const DateInputDemo = () => {
  const [text, updateText] = useState('');
  const [textWithTime, updateTextWithTime] = useState('');
  return (
    <CompoentContainer title="Date Input">
      <DateInput text={text} onChange={updateText} labelText="A date input" />
      <CompoentContainer title="Date and Time Input" isVariation>
        <DateInput
          text={textWithTime}
          onChange={updateTextWithTime}
          labelText="A date time input"
          time
        />
      </CompoentContainer>
    </CompoentContainer>
  );
};
export default DateInputDemo;
