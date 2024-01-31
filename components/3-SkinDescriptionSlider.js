// 3-SkinDescriptionSlider.js

import React, { useState } from 'react';
import styles from '../styles/3-SkinDescriptionSlider.module.css';

const SkinDescriptionSlider = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const imagePaths = {
    0: '/cb-quiz-frontend-imgs/3-normal-skin.png',
    25: '/cb-quiz-frontend-imgs/3-dry-skin.png',
    50: '/cb-quiz-frontend-imgs/3-microwrinkles.png',
    75: '/cb-quiz-frontend-imgs/3-crepey-skin.png',
  };

  const getImageForSliderValue = (value) => {
    const closestValue = Object.keys(imagePaths).reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );

    return imagePaths[closestValue];
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.backButton}>&lt;</div>
        <div className={styles.progress}>3/6</div>
      </div>
      <h2 className={styles.title}>How would you describe your skin?</h2>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className={styles.rangeSlider}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={getImageForSliderValue(sliderValue)}
          alt="Skin Condition"
          className={styles.skinImage}
        />
      </div>
      <div className={styles.buttonContainer}>
      <button className={styles.continueButton} onClick={() => onContinue(sliderValue)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
    </div>
  );
};

export default SkinDescriptionSlider;
