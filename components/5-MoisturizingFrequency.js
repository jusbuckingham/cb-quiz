// 6-DailyBodyCareTime.js

import React, { useState, useMemo } from 'react';
import styles from '../styles/5-MoisturizingFrequency.module.css';

const DailyBodyCareTime = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(5);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const description = useMemo(() => {
    const descriptions = {
      1: 'Newcomer: Whenever I touch my skin it feels flaky, but I leave it alone',
      2: 'Newcomer: I have applied lotion before to my dry, crepey skin (Rarely)',
      3: 'Newcomer: I do apply lotion/cream sometimes on dry skin',
      4: 'Newcomer: I do apply lotion/cream to my skin to feel moisturized',
      5: 'Amateur: I try to apply lotion/cream, but still not regularly',
      6: 'Amateur: I apply lotion/cream fairly regularly, at least once a week',
      7: 'Amateur: I apply lotion/cream after every shower consistently for the last 1-3 months',
      8: 'Pro: I’m committed to moisturize my skin whenever I can',
      9: 'Pro: Oh, trust me. I deeply hydrate my skin, but I want to take it to the next level',
      10: 'Pro: I’m on fire. Deeply hydrating my skin every day is a must to stimulate collagen/elastin',
    };
    return descriptions[sliderValue] || "Select a value"; // Default message or handling for other values
  }, [sliderValue]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onSkip}>&lt; Back</div>
        <div className={styles.progress}>4/6</div>
      </div>
      <h2 className={styles.title}>How often do you moisturize your skin?</h2>
      <div className={styles.descriptionBox}>
        {description}
      </div>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="1"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <div className={styles.sliderTicks}>
          <div className={styles.tick}>1</div>
          <div className={styles.tick}>5</div>
          <div className={styles.tick}>10</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.continueButton} onClick={() => onContinue(sliderValue)}>Continue</button>
        <button className={styles.skipButton} onClick={onSkip}>Skip</button>
      </div>
    </div>
  );
};

export default DailyBodyCareTime;
