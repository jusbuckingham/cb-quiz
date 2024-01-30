// 3-SkinDescriptionSlider.js

import React, { useState } from 'react';
import styles from '../styles/3-SkinDescriptionSlider.module.css';

// Importing images
import normalSkinImg from '../public/cb-quiz-frontend-imgs/3-normal-skin.png';
import drySkinImg from '../public/cb-quiz-frontend-imgs/3-dry-skin.png';
import microWrinklesImg from '../public/cb-quiz-frontend-imgs/3-microwrinkles.png';
import crepeySkinImg from '../public/cb-quiz-frontend-imgs/3-crepey-skin.png';

const SkinDescriptionSlider = ({ onContinue, onSkip }) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  // Function to get the image based on the slider value
  const getImageForSliderValue = (value) => {
    if(value < 25) return normalSkinImg;
    if(value < 50) return drySkinImg;
    if(value < 75) return microWrinklesImg;
    return crepeySkinImg;
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={onSkip}>&lt; Back</div>
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
      <button className={styles.continueButton} onClick={() => onContinue(sliderValue)}>Continue</button>
      <button className={styles.skipButton} onClick={onSkip}>Skip</button>
    </div>
  );
};

export default SkinDescriptionSlider;
