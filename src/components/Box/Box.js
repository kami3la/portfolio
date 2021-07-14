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

  const checkString = () => {
    if (text.split('*')[1]) {
      const tab = text.split('*')
      const tab1 = tab[0].split('\n').map((item, i) => <p key={i}><br/>{item}</p>)
      const tab2 =  <a href={tab[1]} rel='noreferrer' className={styles.link} target='_blank'>Click here !</a>

      return ( [tab1, tab2] )
    } else {
      return text;
    }
  }

  return (
    <div className={styles.box}>
      {ifTitle()}
      <div className={styles.textStyle}>{checkString()}</div>
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

Box.defaultProps = {
  title: ''
};

export default Box;
