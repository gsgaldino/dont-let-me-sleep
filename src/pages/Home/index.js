import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Star from '../../components/Star';
import Footer from '../../components/Footer';

import { useLocales } from '../../context/Locales';

import * as S from './styles';

function Home() {
  const { t } = useLocales();

  const [isActive, setIsActive] = useState(false);
  const [lock, setLock] = useState(false);

  const handleButtonClick = () => setIsActive(!isActive);

  useEffect(() => {
    if (isActive) {
      (async () => {
        if (!lock) {
          const myLock = await window.navigator.wakeLock.request('screen');
          setLock(myLock);
        }
      })();
    } else {
      lock?.release?.();
      setLock(false);
    }
  }, [isActive]);

  return (
    <>
      <S.Background>
        <S.Container>
          <Header />

          <S.Content>
            <Star />

            <div className="title">
              <Typography variant="h2-bold">
                {t('title')}
              </Typography>
            </div>

            <Button onClick={handleButtonClick} color="var(--blue)">
              {t('button_phrase')}
              {isActive ? t('button_status_release') : t('button_status_awake')}
            </Button>
          </S.Content>

        </S.Container>
      </S.Background>
      <Footer />
    </>
  );
}

export default Home;
