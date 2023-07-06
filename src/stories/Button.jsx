import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant = 'primary', size = 'medium', label, bordered = false, disabled = false, link = false, ...props }) => {
  const classNames = ['racino-button', `racino-button--${size}`, `racino-button--${variant}`]
  if (bordered) {
    classNames.push('racino-button--bordered')
  }
  if (link) {
    classNames.push('racino-button--link')
  }

  return (
    <button
      type="button"
      className={classNames.join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
