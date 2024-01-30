// 6-DailyBodyCareTime.js

import React, { useState, useMemo } from 'react';
import styles from '../styles/6-DailyBodyCareTime.module.css';

const DailyBodyCareTime = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(5);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const description = useMemo(() => {
    const descriptions = {
      1: "Newcomer: Whenever I touch my skin it feels flaky, but I leave it alone",
      5: "Amateur: I try to apply lotion/cream, but still not regularly",
      10: "Pro: I'm on fire. Deeply hydrating my skin every day is a must to stimulate collagen/elastin"
    };
    return descriptions[sliderValue] || "Select a value"; // Default message or handling for other values
  }, [sliderValue]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onSkip}>&lt; Back</div>
        <div className={styles.progress}>5/6</div>
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
