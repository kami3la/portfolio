import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { intro, introBox, header, subheader } from './Home.module.scss';

const Home = () => {
  const value = useContext(LanguageContext);

  return (
    <div className={intro}>
      <div className={introBox}>
        <p className={header}>{value.state.home.header}</p>
        <p className={subheader}>{value.state.home.subheader}</p>
      </div>
    </div>
  )
}

export default Home;