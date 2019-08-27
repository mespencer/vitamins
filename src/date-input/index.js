import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../text-input';

const DATE_LENGTH = 8;
const DATE_TIME_LENGTH = 12;

const DateInput = ({
  text, onChange, labelText, hideLabel, display, status, error, time,
}) => {
  const filteredText = text.replace(/[a-zA-Z\\/:-\s]/gi, '')
    .slice(0, time ? DATE_TIME_LENGTH : DATE_LENGTH);

  let formattedText = '';
  for (let i = 0; i < filteredText.length; i += 1) {
    formattedText += filteredText[i];
    if (formattedText.length === 2 || formattedText.length === 5) {
      formattedText += '/';
    } else if (time && formattedText.length === 10) {
      formattedText += ' ';
    } else if (time && formattedText.length === 13) {
      formattedText += ':';
    }
  }

  return (
    <TextInput
      text={formattedText}
      onChange={onChange}
      labelText={labelText}
      hideLabel={hideLabel}
      display={display}
      status={status}
      error={error}
    />
  );
};

DateInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  display: PropTypes.string,
  time: PropTypes.bool,
  status: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

DateInput.defaultProps = {
  hideLabel: false,
  display: 'inline',
  time: false,
  status: '',
  error: false,
};

export default DateInput;
