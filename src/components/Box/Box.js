import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss'

const Box = ({ title, text, wid }) => {

  return (
    <div className={styles.box} style={{ width: wid }}>
      <div className={styles.title}>{title}</div>
      <div>{text}</div>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  wid: PropTypes.number,
  text: PropTypes.string.isRequired
}

Box.defaultProps = { title: '' , width: 'fit-content' };

export default Box;
