import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-with-styles';
import style from './text-input-styles';
import { generateId } from '../helpers';

const TextInput = ({
  text, onChange, labelText, hideLabel, display, status, error, styles,
}) => {
  // TODO: Decide a better way to generate ids. Maybe in componentWiliMount
  const id = generateId('text-input');

  const [focused, updateFocus] = useState(false);
  const filled = text !== '' || focused;
  const statusText = typeof error === 'string' && error !== '' ? error : status;
  const isError = error !== false && error !== '';

  return (
    <div {...css(styles.container, styles[display])}>
      <label htmlFor={id} {...css(styles.label, styles[display])}>
        <span
          {...css(styles.labelText,
            hideLabel ? styles.hide : false,
            filled ? styles.labelTextFilled : false,
            focused ? styles.labelTextFocused : false,
            isError ? styles.errorText : false)}
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
          {...css(styles.input,
            styles[display],
            focused ? styles.focused : false,
            isError ? styles.error : false)}
        />
      </label>
      {statusText !== '' && <p {...css(styles.status, isError ? styles.errorText : false)}>{statusText}</p>}
    </div>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  display: PropTypes.oneOf(['block', 'inline']),
  status: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

TextInput.defaultProps = {
  hideLabel: false,
  display: 'block',
  status: '',
  error: false,
};

export default style(TextInput);
