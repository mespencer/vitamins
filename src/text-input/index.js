import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './text-input-styles';
import { generateId } from '../helpers';

const TextInput = ({
  text, onChange, labelText, hideLabel, display, styles,
}) => {
  // TODO: Decide a better way to generate ids. Maybe in componentWiliMount
  const id = generateId('text-input');

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
  display: PropTypes.string,
};

TextInput.defaultProps = {
  hideLabel: false,
  display: 'block',
};

export default style(TextInput);
