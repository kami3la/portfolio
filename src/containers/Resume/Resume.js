import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { infoWrapper, info, img } from './Resume.module.scss';

import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'
import Box from '../../components/Box/Box';

const Resume = () => {
  const value = useContext(LanguageContext);

  return (
    <div>
      <ScrollIcon />
      <div className={infoWrapper}>
        <div className={info}>
          <div alt='Me' className={img}></div>
          <div>
            <Box
              text={value.state.resume.intro}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;