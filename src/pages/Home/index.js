import React, { useEffect, useState } from 'react';

import Typography from '../../components/Typography';
import Button from '../../components/Button';

import * as S from './styles';

const Home = () => {
  const [phrase, setPhrase] = useState('awake');
  const [isOn, setIsOn] = useState(false);
  const [lock, setLock] = useState(false);

  const handleButtonClick = () => setPhrase(
    phrase === 'awake'
      ? 'release'
      : 'awake'
  );

  useEffect(() => {
    if (phrase === 'release') {
      setIsOn(true);
    } else {
      setIsOn(false)
    }
  }, [phrase]);

  useEffect(() => {
    if (isOn) {
      (async () => {
        if (!lock) {
          const lock = await window.navigator.wakeLock.request('screen');
          setLock(lock);
        }
      })()
    } else {
      lock?.release?.();
      setLock(false);
    }
  }, [isOn]);

  return (
    <S.Container>
      <Typography>
        I'm gonna keep your PC awake
      </Typography>

      <Button onClick={handleButtonClick}>Click here to {phrase}</Button>
    </S.Container>
  );
};

export default Home;
