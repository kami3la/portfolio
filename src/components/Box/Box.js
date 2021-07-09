import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss'

const Box = ({ title, text }) => {
  const ifTitle = () => {
    if (title !== '') {
      return (
        <div className={styles.titleStyle}>{title}</div>
      );
    }
  }

  return (
    <div className={styles.box}>
      {ifTitle()}
      <div className={styles.textStyle}>{text.split('\\n').map((item, i) => <p key={i}>{item}<br/><br/></p>)}</div>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  text: PropTypes.string.isRequired
}

Box.defaultProps = { title: '' };

export default Box;
