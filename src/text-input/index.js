import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './text-input-styles';
import { generateId } from '../helpers';

const id = generateId('text-input');

const TextInput = ({
  text, onChange, labelText, hideLabel, styles,
}) => {
  const [focused, updateFocus] = useState(false);
  const filled = text !== '' || focused;
  return (
    <label htmlFor={id} {...css(styles.label)}>
      <span
        {...css(styles.labelText,
          hideLabel ? styles.hide : false,
          filled ? styles.labelTextFilled : false,
          focused ? styles.labelTextFocused : false)}
      >
        {labelText}
      </span>
      <input
        id={id}
        type="text"
        value={text}
        placeholder={hideLabel ? labelText : undefined}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => updateFocus(true)}
        onBlur={() => updateFocus(false)}
        {...css(styles.input, focused ? styles.focused : false)}
      />
    </label>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
};

TextInput.defaultProps = {
  hideLabel: false,
};

export default style(TextInput);
