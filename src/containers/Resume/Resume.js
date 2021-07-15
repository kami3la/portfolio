import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { infoWrapper, info, img, skillsWrapper, skills, reactStyle } from './Resume.module.scss';

import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';

import html from '../../assets/icons/html.png';
import js from '../../assets/icons/js.png';
import ts from '../../assets/icons/ts.png';
import css from '../../assets/icons/css.png';
import sass from '../../assets/icons/sass.png';
import react from '../../assets/icons/react.png';
import node from '../../assets/icons/node.png';
import sql from '../../assets/icons/sql.png';
import python from '../../assets/icons/python.png';
import github from '../../assets/icons/github2.png';
import jest from '../../assets/icons/jest.png';
import mongo from '../../assets/icons/mongo.png';
import figma from '../../assets/icons/figma.png';
import trello from '../../assets/icons/trello.png';

const Resume = () => {
  const value = useContext(LanguageContext);

  return (
    <div>
      <ScrollIcon />
      <div className={infoWrapper}>
        <a href={value.state.resume.cv} target='_blank' rel='noreferrer'>{value.state.resume.cvText}</a>
        <div className={info}>
          <div alt='Me' className={img}></div>
          <div>
            <Box
              text={value.state.resume.intro}
            />
          </div>
        </div>
      </div>
      <div className={skillsWrapper}>
        <Title text={value.state.resume.skills} size={30} bold='bold' />
        <div className={skills}>
          <img src={html} alt='html' />
          <img src={js} alt='js' />
          <img src={ts} alt='ts' />
          <img src={css} alt='css' />
          <img src={sass} alt='sass' />
          <img src={react} alt='react' className={reactStyle} />
          <img src={node} alt='node' />
          <img src={sql} alt='sql' />
          <img src={python} alt='python' />
          <img src={github} alt='github' />
          <img src={jest} alt='jest' />
          <img src={mongo} alt='mongo' />
          <img src={figma} alt='figma' />
          <img src={trello} alt='trello' />
        </div>
      </div>
    </div>
  );
}

export default Resume;