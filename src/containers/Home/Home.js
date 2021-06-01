import React from 'react';
import { intro, introBox } from './Home.module.scss';
import Title from '../../components/Title/Title';

const Home = () => {
  return (
    <div className={intro}>
      <div className={introBox}>
        <Title text='Hello, my name is Kamila Grusza' size={50} bold='bold' />
        <Title text='I am Front End Developer' size={30} bold='bold' />
      </div>
    </div>
  )
}

export default Home;