import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, size, bold }) => {

  return (
    <p style={{ fontSize: size, fontWeight: bold }}>{text}</p>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  bold: PropTypes.string.isRequired
}

export default Title;
