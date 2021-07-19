import React, { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import PropTypes from 'prop-types';
import styles from './Box.module.scss'

const Box = ({ title, text }) => {
  const value = useContext(LanguageContext);
  
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
      const newTab = tab[0].split('\n')
      newTab.splice(newTab.length-1, 1)
      const tab1 = newTab.map((item, i) => <p key={i}>{item}<br/><br/></p>)
      const tab2 = tab[0].split('\n').pop()
      const tab3 =  <a href={tab[1]} rel='noreferrer' className={styles.link} target='_blank' key='*'>{value.state.projects.link}</a>

      return ( [tab1, tab2, tab3] )
    } else {
      return text;
    }
  }

  return (
    <div className={styles.box}>
      {ifTitle()}
      <div>{checkString()}</div>
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
