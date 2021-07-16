import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles.js';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import styles from './AboutMe.module.scss';

import ScrollIcon from '../../components/ScrollIcon'
import Title from '../../components/Title';
import Box from '../../components/Box';

import France from '../../assets/illustrations/francja.jpg';
import Granada from '../../assets/illustrations/granada.jpg';
import Aveiro from '../../assets/illustrations/portugalia.jpg';
import Malta from '../../assets/illustrations/malta.jpg';
import Poland from '../../assets/illustrations/polska.jpg';
import Nl from '../../assets/illustrations/holandia.jpg';

const slider = (
  <AwesomeSlider animation="cubeAnimation">
    <div data-src={France} />
    <div data-src={Granada} />
    <div data-src={Aveiro} />
    <div data-src={Malta} />
    <div data-src={Poland} />
    <div data-src={Nl} />
  </AwesomeSlider>
);

const AboutMe = () => {
  const value = useContext(LanguageContext);

  return (
    <div>
      <ScrollIcon />
      <div className={styles.container}>
        <div className={styles.intro}>
          <Title text={value.state.about.about.header} size={30} bold='bold' />
          <div className={styles.introInfo}>
            <div alt='Me' className={styles.img}></div>
            <div>
              <Box
                text={value.state.about.about.text}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.hobby}>
          <Title text={value.state.about.hobby.header} size={30} bold='bold' />
          <div className={styles.hobbyBoxes}>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                  <Title text={value.state.about.hobby.games.title} size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text={value.state.about.hobby.games.text}
                  />
                </div>
              </div>
            </div>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                  <Title text={value.state.about.hobby.plants.title} size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text={value.state.about.hobby.plants.text}
                  />
                </div>
              </div>
            </div>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                <Title text={value.state.about.hobby.traveling.title} size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text={value.state.about.hobby.traveling.text}
                  />
                </div>
              </div>
            </div>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                  <Title text={value.state.about.hobby.billards.title} size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text={value.state.about.hobby.billards.text}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.travels}>
          <Title text={value.state.about.travels.title} size={30} bold='bold' />
          <div className={styles.travelsSlider}>
            {slider}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
