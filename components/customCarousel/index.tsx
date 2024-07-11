import React from 'react';
import { DotButton, useDotButton } from './carouselDots';
import { PrevButton, NextButton, usePrevNextButtons } from './carouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';

const EmblaCarousel = (props: any) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {Array.from({length: 8}).map((_, index: number) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                styles.embla__dot +
                (index === selectedIndex ? ` ${styles.embla__dot__selected}` : '')
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
