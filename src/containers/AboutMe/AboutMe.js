import React, { useState } from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import { intro, introInfo, img, hobby, hobby_slider, darkArrow } from './AboutMe.module.scss';
import Title from '../../components/Title/Title';
import Box from '../../components/Box/Box';
import LArrow from '../../assets/icons/LArrow.png';
import LArrow2 from '../../assets/icons/LArrow2.png';
import RArrow from '../../assets/icons/RArrow.png';
import RArrow2 from '../../assets/icons/RArrow2.png';

let hobbyBoxes = {
  0: 
    <Box
      title={<Title text='Volleyball' size={20} bold='bold' />}
      text='I love team games, especially volleyball. I trained it for 6 years, and I started in primary school when I went to a sport class. It has always been a lot of fun for me and I still enjoy playing with my friends whenever the opportunity arises.'
      width={3}
    />,
  1: 
    <Box
      title={<Title text='Houseplants' size={20} bold='bold' />}
      text='Potted plants are my next passion. I believe that colorful pots with well-kept flowers are an indispensable element of my home. It gives me great joy when a plant sprouts a new leaf, stain or flower.'
      width={4}
      />,
  2:
    <Box
      title={<Title text='Traveling' size={20} bold='bold' />}
      text='It is very important for me to travel, both in Poland and to other countries. That is why I always try to visit new places and discover foreign cultures in my spare time. After each journey, I am richer with new knowledge and experience, which I greatly appreciate.'
    />,
  3: 
    <Box
      title={<Title text='Billiards' size={20} bold='bold' />}
      text='My last interest, this time quite unusual, is billiards. An evening game of pool is a perfect time for me. I have been playing socializing for many years and I never get tired of it.'
    />
}

const AboutMe = () => {
  const [hobbyCounter, setHobbyCounter] = useState(0);

  const prevHobby = (e) => {
    e.preventDefault();
    return setHobbyCounter(hobbyCounter-1);
  }
  
  const nextHobby = (e) => {
    e.preventDefault();
    return setHobbyCounter(hobbyCounter+1);
  }

  return (
    <div>
      <div className={intro}>
        <Title text='A few words about who I am' size={30} bold='bold' />
        <div className={introInfo}>
          <div alt='Me' className={img}></div>
          <Box
            text='I am 23 years old and I was born in Gorzów Wielkopolski. I live and study in Poznań. Apart from programming, I also love traveling, 
            meeting new people, drinking good coffee, being surrounded by animals, solving puzzles and just being out in nature.'
          />
        </div>
      </div>
      <div className={hobby}>
        <Title text='My hobby' size={30} bold='bold' />
        <div className={hobby_slider}>
          {hobbyBoxes[hobbyCounter-1] ? <img src={LArrow} onClick={prevHobby} alt='Previous hobby' /> : <img src={LArrow2} alt='No previous hobby' className={darkArrow}/>}
          {hobbyBoxes[hobbyCounter]}
          {hobbyBoxes[hobbyCounter+1] ? <img src={RArrow} onClick={nextHobby} alt='Next hobby' /> : <img src={RArrow2} alt='No next hobby' className={darkArrow}/>}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
