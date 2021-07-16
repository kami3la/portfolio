import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { infoWrapper, info, img, skillsWrapper, skills, skill, reactStyle } from './Resume.module.scss';

import ScrollIcon from '../../components/ScrollIcon'
import Box from '../../components/Box';
import Title from '../../components/Title';

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
          <img src={html} alt='html' className={skill} />
          <img src={js} alt='js' className={skill} />
          <img src={ts} alt='ts' className={skill} />
          <img src={css} alt='css' className={skill} />
          <img src={sass} alt='sass' className={skill} />
          <div className={skill}>
            <img src={react} alt='react' className={reactStyle} />
          </div>
          <img src={node} alt='node' className={skill} />
          <img src={sql} alt='sql' className={skill} />
          <img src={python} alt='python' className={skill} />
          <img src={github} alt='github' className={skill} />
          <img src={jest} alt='jest' className={skill} />
          <img src={mongo} alt='mongo' className={skill} />
          <img src={figma} alt='figma' className={skill} />
          <img src={trello} alt='trello' className={skill} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
